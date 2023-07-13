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
    let startFrom = Math.floor(Math.random() * 36);
    console.log(`startFrom: ${startFrom}`);
    videoRef.current.src = 'https://cloud.disorient.xyz/s/qANZQ7o8egMzZYd/download/UMZU_plystation-MINE_v01.m4v';
    videoRef.current.currentTime = startFrom;
    // console.log(videoRef.current);
    if (isElement(videoRef.current)) {
      setTimeout(() => {
        videoRef.current.style.opacity = '1';
      }, 100);
    }
  
    return () => {
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p> website in progress </p>
        <div className={styles.videoContainer}>
          <video ref={videoRef} width="100%" height="100%" autoPlay loop muted />
        </div>
      </div>
    </main>
  )
}
