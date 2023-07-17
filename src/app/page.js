'use client'

import { useRef, useEffect } from 'react';
// import Image from 'next/image';
import styles from './page.module.css';


export default function Home() {
  const videoRef = useRef(null);

  function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;  
  }

  useEffect(() => {
    const handleVideo = () => {
      console.log('videoHandled');
      videoRef.current.style.opacity = '1';
    }

    videoRef.current.addEventListener('canplay', handleVideo);

    let startFrom = Math.floor(Math.random() * 36);
    console.log(`startFrom: ${startFrom}`);
    videoRef.current.src = 'https://cloud.disorient.xyz/s/qANZQ7o8egMzZYd/download/UMZU_plystation-MINE_v01.m4v';
    videoRef.current.currentTime = startFrom;

    return () => {
      videoRef.current.removeEventListener('canplay', handleVideo);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.messageContainer}>
        <p> website in progress </p>
      </div>
      <div className={styles.videoContainer}>
        <video ref={videoRef} width="100%" height="100%" autoPlay loop muted />
      </div>
    </main>
  )
}
