import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import OpenAI from "openai";
import { supabase } from "../../services/supabase";
import { API_GATEWAY } from "../../services/endpoints";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! 👋 I'm Dibendu. Ask me anything about my experience, tech stack, or background!",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, loading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      let answer = "";
      if (!API_GATEWAY.CHAT) {
        // 1. question    --> OpenAI     --> embeddings
        const client = new OpenAI({
          apiKey: import.meta.env.VITE_OPENAI_API_KEY,
          dangerouslyAllowBrowser: true,
        });

        const embeddingResponse = await client.embeddings.create({
          model: "text-embedding-3-small",
          input: question,
        });

        const userQueryEmbeddings = embeddingResponse.data[0].embedding;

        // 2. embeddings  --> supabase   --> similarity search
        const searchResult = await supabase.rpc("match_documents", {
          query_embedding: userQueryEmbeddings,
          match_threshold: 0.3,
          match_count: 3,
        });

        console.log(searchResult);
        // 3. client app  <-- text chunk <-- supabase
        // 4. text chunk  --> OpenAI     --> response

        // const response = await axios.post(API_GATEWAY.CHAT, { question });
        // answer = response.data?.answer || "No response received.";
      } else {
        // Quick MVP mock preview before AWS endpoint is wired up
        await new Promise((resolve) => setTimeout(resolve, 600));
        answer = "Thanks for asking! The AWS AI backend will be connected shortly. You can also reach Dibendu directly via the Contact page.";
      }
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I had trouble reaching the AI assistant. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-16 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#46351d] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#332615] md:bottom-16 md:right-8"
      >
        {isOpen ? (
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 z-50 flex h-[440px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl md:bottom-32 md:right-8">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#46351d] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400"></span>
              <h3 className="text-sm font-medium tracking-wide">Ask Me Anything . . .</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-gray-300 transition-colors hover:text-white"
              aria-label="Close chat"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                  msg.role === "user"
                    ? "self-end rounded-tr-none bg-[#46351d] text-white"
                    : "self-start rounded-tl-none border border-gray-200 bg-gray-50 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-1.5 self-start rounded-2xl rounded-tl-none border border-gray-200 bg-gray-50 px-3.5 py-2.5">
                <span className="size-1.5 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.3s]"></span>
                <span className="size-1.5 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.15s]"></span>
                <span className="size-1.5 animate-bounce rounded-full bg-gray-500"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-gray-200 bg-gray-50 p-2.5">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question . . ."
              className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#46351d]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-[#46351d] p-2 text-white transition hover:bg-[#332615] disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
