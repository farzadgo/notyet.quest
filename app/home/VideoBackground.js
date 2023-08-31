'use client'

import { useState, useRef, useEffect } from 'react';
import styles from './Home.module.css';


export default function VideoBG() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // function isElement(element) {
  //   return element instanceof Element || element instanceof HTMLDocument;
  // }

  const handlePlaying = () => {
    console.log('video playing');
    videoRef.current.style.opacity = '1';
    setLoaded(true);
  }

  const handleLoading = () => {
    console.log('video loading');
    setLoaded(false);
  }

  useEffect(() => {
    // setLoaded(true);
    if (videoRef.current) {
      videoRef.current.addEventListener('playing', handlePlaying);
      videoRef.current.addEventListener('waiting', handleLoading);
    }

    let startFrom = Math.floor(Math.random() * 36);
    console.log(`startFrom: ${startFrom}`);
    videoRef.current.src = 'https://cloud.disorient.xyz/s/qANZQ7o8egMzZYd/download/UMZU_plystation-MINE_v01.m4v';
    videoRef.current.currentTime = startFrom;

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('playing', handlePlaying);
        videoRef.current.removeEventListener('waiting', handleLoading);
      }
    }
  }, []);

  return (
    <>
      {!loaded && <div className={styles.loader}></div>}
      
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        />
      </div>
    </>
  )
}
