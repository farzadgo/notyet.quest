'use client'

import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import styles from './Mine.module.css';
import { program } from './program-data';
import ProgramEntry from './ProgramEntry';
import { Map, Sun, Moon } from 'react-feather';
import styled from 'styled-components';

const Mine = () => {
  const [data, setData] = useState('');
  const [toggleTheme, setToggleTheme] = useState(false);

  const iconProps = {
    color: toggleTheme ? '#eee' : 'black',
    size: 36,
    strokeWidth: 1.5
  }

  const themeColors = {
    backColor: toggleTheme ? 'black' : 'white',
    foreColor: toggleTheme ? '#eee' : 'black'
  }

  const handleTheme = () => {
    setToggleTheme(prev => !prev);
  }

  const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    padding: 50px;
    border: 1px solid #00adb7;
    border-radius: 15px;
    :hover {
      box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
    }
  `;

  const Image = styled.img.attrs((props) => ({
    src: props.source
  }))``;

  const Target = styled(Image)`
    position: absolute;
    left: ${(props) => props.offset.left}px;
    top: ${(props) => props.offset.top}px;
    opacity: ${(props) => props.opacity};
  `;

  const ZoomImage = () => {
    const sourceRef = useRef(null);
    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const [opacity, setOpacity] = useState(0);
    const [offset, setOffset] = useState({ left: 0, top: 0 });

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    const handleMouseMove = (e) => {
      const targetRect = targetRef.current.getBoundingClientRect();
      const sourceRect = sourceRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
      const yRatio =
        (targetRect.height - containerRect.height) / sourceRect.height;

      const left = Math.max(
        Math.min(e.pageX - sourceRect.left, sourceRect.width),
        0
      );
      const top = Math.max(
        Math.min(e.pageY - sourceRect.top, sourceRect.height),
        0
      );

      setOffset({
        left: left * -xRatio,
        top: top * -yRatio
      });
    };
    

    return (
      <div style={{display: 'flex', position: 'relative'}}>
        <Container
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <Image ref={sourceRef} alt="source" source="mine-program-thumb.jpg" />
          <Target
            ref={targetRef}
            alt="target"
            opacity={opacity}
            offset={offset}
            source="mine-program-pd.jpg"
          />
        </Container>
      </div>
    )
  }



  useEffect(() => {
    setData(program)

    return () => {
    }
  }, [])

  return (
    <main
      className={styles.mine}
      style={{
        background: themeColors.backColor,
        color: themeColors.foreColor
      }}>
      <section className={styles.section}>
        <h1 className={styles.minetitle}> MINE </h1>

        <div className={styles.themeButContainer}>
          <button className={styles.closebtn} onClick={handleTheme}>
            {toggleTheme ? <Sun {...iconProps}/> : <Moon {...iconProps}/>}
          </button>
        </div>

        <div className={styles.subsection}>
          <h3> A CONDITION </h3>
          <h3> INTERVENTION AT HANSEATENHOF UMZU PAVILION </h3>
        </div>

        <div className={styles.subsection}>
          <p>
            Profound transformations are reshaping our cities, altering
            perspectives and leaving remnants of the past scattered in
            their wake. Amidst this dynamic tapestry, we find ourselves
            mining for evidence related to shifts in economic and developmental
            priorities as well its consequences on individuals,
            communities and local business. Our intervention in the UMZU
            pavilion (formerly a flower shop) in the city center of
            Bremen sets the stage for a multidirectional exploration into
            the heart of an indeterminate site. Here, the absence of a
            stable ground encapsulates the disorienting effects of this
            urban ecology, triggering questions about operative
            actors,their motives and how they designate who/what this
            city is for.
          </p>
          <p>
            As artists and cultural workers in Bremen, we embrace our
            roles as information miners, excavating hidden narratives,
            memories, and insights from the depths of this transient
            space. Together, we weave a delicate thread through past,
            present and future (imaginaries), identifying within the
            palimpsest ways to redefine this city as a site for harmonious
            connections and shared visions. We hope that through the
            collective fusion of artistic excavations and ethical mining
            we could begin to form a connection to the city center,
            setting a rhythm of its potential transformation beyond
            consumptive patterns and practices.
          </p>
          <p>
            We invite you to join us in cultivating dialogue, exchange,
            mutual learning and unlearning, culminating in a collaborative
            effort to relocate this site as a social space. From August 8
            to August 26 we will host a series of workshops and activations
            open to public interactions and participation.
          </p>
        </div>

        <div className={styles.subsection}>
          <h3> Location </h3>
          <div>
            <p> UMZU Pavillon, Markt am Hanseatenhof </p>
            <p> Papenstraße 6, 28195 Bremen </p>
          </div>
          <div className={styles.iconcontainer}>
            <Map />
            <a href='https://osm.org/go/0G01WacVU?m=&relation=3614332'> OpenStreetMap </a>
          </div>
        </div>
      </section>

      {/* <ZoomImage /> */}

      <section className={styles.section}>
        <h2 className={styles.secondtitle}>PROGRAM</h2>
        {data && data.map((e, i) => <ProgramEntry content={e} key={i} theme={themeColors}/>)}
      </section>

    </main>
  )
}

export default Mine
