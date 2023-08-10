'use client'

import { useState, useEffect } from 'react';
// import Image from 'next/image';
import styles from './Mine.module.css';
import { program } from '../program-data';
import ProgramEntry from './programEntry';
import { Map, Sun, Moon } from 'react-feather';


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

      {/* <div>
        <Image
          src="/mine-prog-diag.png"
          width={2480}
          height={1754}
          alt="Picture of the author"
        />
      </div> */}

      <section className={styles.section}>
        <h2 className={styles.secondtitle}>PROGRAM</h2>
        {data && data.map((e, i) => <ProgramEntry content={e} key={i} theme={themeColors}/>)}
      </section>

    </main>
  )
}

export default Mine
