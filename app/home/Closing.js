'use client'

import { useState } from 'react';
import styles from './Closing.module.css';


export default function Closing() {
  const [showFinissage, setShowFinissage] = useState(false);

  const handleFinissage = () => {
    setShowFinissage(prev => !prev);
  }

  const Finissage = () => {
    return (
      <div className={styles.finissage}>
        
        <button onClick={handleFinissage} className={styles.hideFinBut}> close </button>

          <section>
            <p> Dear all, </p>
            <p> As our enriching three-week exploration comes to a close, we welcome you to join us in celebrating our collective endeavor this weekend. </p>
            <p> Our time together has been a combination of an open educational approach and reflective studio practice. We delved into reading sessions which illuminated the complex layers of urban transformation, engaged in workshops that inspired our imagination, and shared discussions that challenged our perspectives. </p>
            <p> This chapter closing is a new beginning. It's a celebration of the linkages we've constructed and emerging potentials. Let us come together to mark the transformation of the UMZU pavilion, from a transient shop to a stage for dialogue, exchange and community. </p>
          </section>

          <section>
            <h3> Remnants </h3>
            <p> August 25 – 6:00 PM - 10:00 PM <br/> UMZU Pavilion, Papenstr. 6 </p>
            <p> We're happy to share some first-draft of the works-in-progress that have emerged from our journey.  To bring the day to an end, we wish to broaden our imagination with an audio-visual performance. </p>
          </section>

          <section>
            <h3> Sonic Escapades </h3>
            <p> August 26 – 8:00 AM - 10:00 PM <br/> UMZU Pavilion, Papenstr. 6 </p>
            <p> Through a blend of mixtapes, radio-show-alike, live performances, noise explorations, and DJ sets, we will redefine our perception of sound and together paint the city center with a symphony of possibilities. </p>
            <ul>
              <li> abd <span>8 – 10</span> &nbsp;&nbsp;&nbsp; </li>
              <li> gabb <span>10 – 12</span> &nbsp;&nbsp;&nbsp; </li>
              <li> Schirin <span>12 – 14</span> &nbsp;&nbsp;&nbsp; </li>
              <li> pinkie <span>14 – 16</span> &nbsp;&nbsp;&nbsp; </li>
              <li> <i>_pause_</i> <span>16 – 16:30</span> </li>
              <li> ap0teke <span>16:30 – 17</span> &nbsp;&nbsp;&nbsp; </li>
              <li> HaiparHaipar <span>17 – 18:30</span> </li>
              <li> k445h <span>18:30 – 20:30</span> </li>
              <li> dis_orient <span>20:30 – 22</span> &nbsp;&nbsp;&nbsp; </li>
            </ul>
          </section>

          <section>
            <p> Finally, we would like to express our sincere thanks to all who have helped make this project possible through their presence, contributions, insights and generosity. In particular, we are grateful to the contributors who joined us for workshops and events and offered perspectives from the community and beyond. We appreciate those who came over to the pavilion and engaged with our process and practices along the way. We also thank ASTA Uni-Bremen, and Mikrofonds for funding our project and as well to ZZZ & AAA for the collaboration that allowed us to set up a temporary studio in the city center. </p>
            <p> Your support shaped an unforgettable experience – thank you. </p>
          </section>

      </div>
    )
  }

  return (
    <>
      <button onClick={handleFinissage} className={styles.showFinBut}> closing weekend <br/> 25. - 26.08 </button>
      {showFinissage && <Finissage />}
    </>
  )
}

