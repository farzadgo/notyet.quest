import Link from 'next/link';
import styles from './Home.module.css';
import VideoBG from './VideoBackground';
import Closing from './Closing';
// import Image from 'next/image';
// import logos from '../../MINE_mitFoerderzusatz.png';


export default function Page() {

  // console.log(logos);

  return (
    <main className={styles.home}>

      <div className={styles.messageContainer}>
        <Link href="/mine"> MINE </Link>
        <p> 8-26. AUGUST 2023 </p>
      </div>

      <Closing />

      <div className={styles.contactContainer}>
        <div>
          <p> Contact </p>
          <p> notyet.quest@proton.me </p>
        </div>
        <div>
          <a href='https://t.me/+aVyBCvsnjANhYTRi'> Telegram Channel </a>
        </div>
      </div>

      <VideoBG />

      <footer className={styles.footer}>

        <div className={styles.logoContainer}>
          <img src="./MINE_mitFoerderzusatz_.png" alt="funding logos"></img>
        </div>

        <div className={styles.programmedBy}>
          web by <a href='https://github.com/farzadgo' target='_blank'> farzadgo </a>
        </div>

      </footer>

    </main>
  )
}
