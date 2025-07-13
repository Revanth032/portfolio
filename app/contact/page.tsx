import styles from './page.module.css';
import { Kaushan_Script } from 'next/font/google';


const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function contact () {
  return (
    <div className={styles.contact}>
      <h1 className={kaushan.className}>Get in <span className={styles.highlight}>touch</span></h1>
      <form action="https://formsubmit.co/revanth.pandt@gmail.com" method="POST" target="_self" rel="noreferrer" className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

          <input type="hidden" name="_next" value="https://portfolio-azure-zeta-10.vercel.app/contact" />
          <input type="hidden" name="_captcha" value="false" />
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  );
}
