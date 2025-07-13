import { Kaushan_Script } from "next/font/google";
import styles from './page.module.css';
import Image from "next/image";
import dwa from "../portfolio-images/dwa.png"; 
import mbt from "../portfolio-images/mbt.png"; 
import ffd from "../portfolio-images/ffd.png"; 


const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function Projects() {
return (
    <div className={styles.container}>
     <h1 className={kaushan.className}> A small selection of <span className={styles.highlight}>Recent Projects</span></h1>
     <h2>Explore featured projects that highlight technical skills, <span className={styles.highlight1}>innovative problem-solving, and real-world application. </span></h2>
     <div className={styles.projects}>
        <div className={styles.project}>
             <Image
        src={dwa}
        alt="Internship Image"
        className={styles.projectImage}
      />
          <h3 className={kaushan.className}>DeHome</h3>
          <p className={styles.projectDescription}>A decentralized web app for house selling that uses Ethereum smart contracts to enable secure, trustless transactions.
             Built with ReactJS and integrated with MetaMask for wallet connectivity and transaction signing.
              It uses Hardhat for contract deployment and features an escrow system for safe fund transfers on the testnet.</p>
            <a
              href="https://github.com/zeittinfo/zeittinfo"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
        </div>
        <div className={styles.project}>
             <Image
        src={mbt}
        alt="Internship Image"
        className={styles.projectImage}
      />
          <h3 className={kaushan.className}>NeuroScan </h3>
          <p className={styles.projectDescription}>An AI-powered web app for detecting brain tumors from MRI scans using Convolutional Neural Networks (CNNs). 
            Built with TensorFlow and a ReactJS frontend for smooth user experience. 
            Provides fast, accurate predictions to assist medical diagnostics.</p>
            <a
              href="https://github.com/Revanth032/MRI-Brain-Tumor-detection"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
        </div>
        <div className={styles.project}>
             <Image
        src={ffd}
        alt="Internship Image"
        className={styles.projectImage}
      />
          <h3 className={kaushan.className}>FraudLens</h3>
          <p className={styles.projectDescription}>A smart detection platform using LLaMA 2 for NLP to analyze suspicious transactions and patterns. 
            Powered by GraphQL APIs and Neo4j for visualizing fraud networks and relationships. 
            Ensures intelligent, real-time insights into financial anomalies.</p>
            <a
              href="https://github.com/Revanth032/Financial-Fraud-Detection"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
        </div>
     </div>
    </div>
);
}