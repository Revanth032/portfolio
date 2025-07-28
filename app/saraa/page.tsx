"use client";
import { useChat} from "ai/react";
import styles from './page.module.css';
import { Kaushan_Script } from 'next/font/google';
import Bubble from './components/Bubble'
import LoadingBubble from './components/LoadingBubble';
import { FaArrowCircleUp } from 'react-icons/fa';


const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function Saraa () {
     const{ isLoading,messages, input, handleInputChange, handleSubmit } = useChat();

     const nomessages = !messages || messages.length === 0;

  return (
    <div className={styles.container}>
      <h1 className={kaushan.className}>Hii , This is Saraa a RAG based AI assistant for your needs.</h1>
      <section className={styles.chat}>
  {nomessages ? (
    <h2>Ask Anything about Revanth</h2>
  ) : (
    <div className={styles.messages}>
      
      {messages.map((message, index) => (
        <Bubble key={`message-${index}`} message={message} />
      ))}
      {isLoading && <LoadingBubble />}
    </div>
  )}
  <form onSubmit={handleSubmit} className={styles.form}>
    <input onChange={handleInputChange} value={input} />
    <button type="submit" className={styles.submitButton}> <FaArrowCircleUp style={{ color: "#efd09e", fontSize: "2rem" }} /> </button>
  </form>
</section>

    </div>
  );
}
