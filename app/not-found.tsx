
'use client';
import './not-found.css';
import { Kaushan_Script } from "next/font/google";
const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1>404</h1>
      <p className={kaushan.className}>Oops! The page you are looking for <span className="highlight">does not exist.</span></p>
    </div>
  );
}
