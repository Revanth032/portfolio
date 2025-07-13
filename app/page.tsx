"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { Kaushan_Script } from "next/font/google";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram ,} from "react-icons/fa";
import po1 from "./portfolio-images/po1.png";
import Typewriter from 'typewriter-effect';
import skcet from "./portfolio-images/skcet.png";
import intern from "./portfolio-images/intern.png"; 
import java from "./portfolio-images/java.png";
import cplusplus from "./portfolio-images/cplusplus.png";
import python from "./portfolio-images/python.png";
import reactLogo from "./portfolio-images/reactLogo.png";
import nodejsLogo from "./portfolio-images/nodejsLogo.png";
import mongodb from "./portfolio-images/mongodb.png";
import git from "./portfolio-images/git.png";



const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  return (
   <div>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={kaushan.className}> I&apos;m Revanth</h1>
        <h2 className = {kaushan.className}><Typewriter  
        options={{ strings: ['Developer', 'UI/UX Designer', 'Tech Enthusiast'], 
        autoStart: true, 
        loop: true,}}/></h2>
        <p>Hello! Im a passionate developer with a keen interest in creating innovative solutions. Explore my work and lets connect!</p>
        <hr className={styles.line}/>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Revanth032">
          <FaGithub style={{ color: "#efd09e", fontSize: "2rem", marginRight: "1rem" }} /></a>
          <a href="https://www.linkedin.com/in/revanth-p-b45b32212/">
           <FaLinkedin style={{ color: "#efd09e", fontSize: "2rem", marginRight: "1rem" }} /></a>
          <a href="https://www.instagram.com/revanthpandy?igsh=MWRlNHJkZmNlbXZj">
           <FaInstagram style={{ color: "#efd09e", fontSize: "2rem", marginRight: "1rem"}} /></a>
           <a href="https://x.com/Revanth2014">
          <FaTwitter style={{ color: "#efd09e", fontSize: "2rem" }} /></a>
        </div>
      </div>
      <Image
        src={po1}
        alt="Portfolio Image"
        className={styles.portfolioImage}
      />
      </div>
      <div className={styles.container1}>
      <h1 className={kaushan.className}>About me</h1>
      <hr/>
      <p>I’m Revanth — a beginner in the world of tech, quietly learning to build things that matter.
I may be new to this journey, but I bring with me a steady heart, a curious mind, and a quiet determination to grow. I find comfort in clean code, peace in problem-solving, and pride in small wins that push me forward.
As an introvert, I observe deeply and speak through the work I create. As a dog lover, I believe in loyalty — to people, to learning, and to doing things with sincerity. And as someone who’s felt the ache of heartbreak, I carry a quiet resilience in everything I do.
This portfolio is my first step — not perfect, but honest. Thanks for being part of it.</p>
</div>

  <div className={styles.container2}>
    <div className={styles.textContainer}>
      <h1 className={kaushan.className}>Academics</h1>
      <hr/>
      <p>Master of Technology in Computer Science and Engineering (Integrated)</p>
       <p>- Sri Krishna College of engineering and Technology, Coimbatore</p>
      <p> (2020 - 2025)</p>
    </div>
      
   <Image
        src={skcet}
        alt="SKCET Image"
        className={styles.skcetlogo}
      />

  </div>

  <div className={styles.container3}>
    <div className={styles.textContainer1}>
      <h1 className={kaushan.className}>Internship</h1>
      <hr/>
      <h2> Front-End Developer Intern</h2>
       <h3>Qriocity Ventures</h3>
       <p> -Built and optimized responsive components using React.js.</p>
        <p>-Collaborated with team to improve UI/UX and  performance</p>
        <p>(Jan2025 - Mar2025)</p>
    </div>
      
   <Image
        src={intern}
        alt="Internship Image"
        className={styles.internlogo}
      />
  </div>
  <div className={styles.container4}>
    <div className={styles.textContainer2}>
      <h1 className={kaushan.className}>Skills</h1>
      <hr/>
      <div className={styles.skillsContainer}>
        <Image
        src={cplusplus}
        alt="Internship Image"
        className={styles.tslogo}
      />
      <Image
        src={java}
        alt="Internship Image"
        className={styles.tslogo}
      />
       <Image
        src={python}
        alt="Internship Image"
        className={styles.tslogo}
      />
      <Image
        src={reactLogo}
        alt="Internship Image"
        className={styles.tslogo}
      />
      <Image
        src={nodejsLogo}
        alt="Internship Image"
        className={styles.tslogo}
      />
       <Image
        src={mongodb}
        alt="Internship Image"
        className={styles.tslogo}
      />
      <Image
        src={git}
        alt="Internship Image"
        className={styles.tslogo}
      />
      </div>
      

    </div>
  </div>
           
      </div>
  );
}
