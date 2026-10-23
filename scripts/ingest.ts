import "dotenv/config";
import fs from "fs";
import OpenAI from "openai";
import { supabase } from "./config/supabase";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const ingest = async () => {
  const openai = new OpenAI();

  // 1. get file
  const bioDataDoc = await fs.readFileSync("data/bio.txt", "utf-8");
  console.log("Loaded bio data:", bioDataDoc.length, "characters");

  // 2. chunk it
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 100, chunkOverlap: 20 });
  const textChunks = await splitter.splitText(bioDataDoc);

  // 3. generate embeddings
  const embeddings = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: textChunks,
  });

  console.log(embeddings);

  // 4. save to supabase
  try {
    const chunkEmbeddingPair = embeddings.data.map((e) => ({
      content: textChunks[e.index],
      embedding: e.embedding,
    }));

    const { data, error } = await supabase.from("portfolio_documents").insert(chunkEmbeddingPair);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    console.log("Successfully inserted", chunkEmbeddingPair.length, "records.");
  } catch (err) {
    console.error("Error during ingestion:", err);
  }
};

ingest();
