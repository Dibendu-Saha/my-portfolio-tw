import { ChangeEvent, useState } from "react";
import axios from "axios";
import linkedinIcon from "../../assets/img/contact/icon-linkedin.svg";
import githubIcon from "../../assets/img/contact/icon-github.svg";
import instagramIcon from "../../assets/img/contact/icon-instagram.svg";
import fbIcon from "../../assets/img/contact/icon-facebook.svg";
import { Button, Container, Heading, IconCard, LeftPane, PageContent, RightPane, TextInput } from "../../common/AppComponents";
import { ENDPOINT } from "../../services/endpoints";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [message, setMessage] = useState(""),
    [emailTriggered, setEmailTrigger] = useState(false),
    [isValidEmail, setEmailValidity] = useState(true);

  const validateEmailFormat = () => {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isValid = emailRegex.test(email);

    if (email.trim().length && !isValid) setEmailValidity(false);
    else setEmailValidity(true);
  };

  const sendEmail = async () => {
    setEmailTrigger(true);
    if (!name || !email || !message) {
      toast.warn("Please fill in all the input fields");
      return;
    } else if (!isValidEmail) {
      toast.warn("Please enter a valid email address");
      return;
    }

    try {
      await toast.promise(axios.post(`${ENDPOINT.SEND_EMAIL}?name=${name}&email=${email}`, { message }), {
        pending: "Sending email...",
        success: {
          render() {
            resetUserInput();
            return "Thank you for your email. I shall get back to you as soon as possible.";
          },
        },
        error: {
          render({ data }: any) {
            return data.response.data.message ?? "Something went wrong!";
          },
        },
      });
    } catch (exception: any) {
      if (exception.response.data.statusText !== "ERR_INPUT_STR") alert("ERR: Exception!");
    } finally {
      setEmailTrigger(false);
    }
  };

  const resetUserInput = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Heading>Let's talk</Heading>

      <PageContent>
        <LeftPane>
          <p className="-mb-6 lg:-mb-7">Interested to know more?</p>
          <p className="lg:mb-12">Send me a 'hi'...</p>

          <div className="grid max-w-[600px] grid-cols-[1fr_2fr] items-center gap-x-2 gap-y-5 md:gap-x-0">
            <label htmlFor="name" className="md:text-base">
              Name
            </label>
            <TextInput
              name="name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className={emailTriggered && !name ? "border-red-500" : ""}
            />

            <label htmlFor="email" className="md:text-base">
              Email
            </label>
            <TextInput
              name="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              onBlur={validateEmailFormat}
              className={(emailTriggered && !email) || !isValidEmail ? "border-red-500" : ""}
            />

            <label htmlFor="message" className="md:text-base">
              Message
            </label>
            <TextInput
              type="textarea"
              cols={10}
              rows={6}
              name="message"
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              className={emailTriggered && !message ? "border-red-500" : ""}
            />

            <Button onClick={sendEmail} className="col-start-2 mt-2 animate-fade-up text-center">
              Send
            </Button>
          </div>
        </LeftPane>

        <RightPane>
          <p className="text-center text-3xl font-extralight">Follow me on...</p>

          <div className="mt-5 flex justify-evenly lg:mt-16">
            <a href="https://www.linkedin.com/in/dibendu-saha/" target="_blank" rel="noreferrer">
              <IconCard imgSrc={linkedinIcon} altText="Linkedin icon" />
            </a>
            <a href="https://github.com/Dibendu-Saha" target="_blank" rel="noreferrer" className="animate-delay-[0.4s]">
              <IconCard imgSrc={githubIcon} altText="Github icon" />
            </a>
            <a href="https://www.instagram.com/dibendu.s/" target="_blank" rel="noreferrer" className="animate-delay-[0.8s]">
              <IconCard imgSrc={instagramIcon} altText="Instagram icon" />
            </a>
            <a href="https://www.facebook.com/dibendu03" target="_blank" rel="noreferrer" className="animate-delay-[1.2s]">
              <IconCard imgSrc={fbIcon} altText="Facebook icon" />
            </a>
          </div>
        </RightPane>
      </PageContent>

      <div className="absolute bottom-3 right-3 animate-fade-up text-xs animate-delay-1000">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Contact;
