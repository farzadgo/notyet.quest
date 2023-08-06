'use client'

import { useState, useEffect } from 'react';
// import Image from 'next/image';
import styles from './Mine.module.css';

import { program } from '../program-data';
import ProgramEntry from './programEntry';


const Mine = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    // const data = program;
    setData(program)
    // console.log(data);
    return () => {
      
    }
  }, [])

  return (
    <main className={styles.main}>

      <h1 className={styles.headtitle}> MINE </h1>
      <div className={styles.headsubtitle}>
        <h3> A CONDITION </h3>
        <h3> INTERVENTION AT HANSEATENHOF UMZUPAVILION </h3>
      </div>
      <div className={styles.headbody}>
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
      <div className={styles.headaddress}>
        <h3>Location</h3>
        <p>UMZU Pavillon at Haseatenmarkthof</p>
        <p>Papenstraße 18 . 28219-Bremen</p>
      </div>

      <h2 className={styles.secondtitle}>PROGRAM</h2>
      {data && data.map((e, i) => <ProgramEntry content={e} key={i}/>)}

    </main>
  )
}

export default Mine
