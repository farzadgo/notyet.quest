
import Link from 'next/link';
import styles from './page.module.css';
import VideoBG from './videobg';
import Closing from './closing';

// export const metadata = {
//   icons: {
//     icon: '/icon.png',
//   },
// };

export default function Page() {

  return (
    <main className={styles.home}>

      <div className={styles.messageContainer}>
        <Link href="/mine"> MINE </Link>
        <p> 8-26. AUGUST 2023 </p>
      </div>

      <Closing />

      <div className={styles.contactContainer}>
        <div>
          <p> Registration </p>
          <p> notyet.quest@proton.me </p>
        </div>
        <div>
          <a href='https://t.me/+aVyBCvsnjANhYTRi'> Telegram Channel </a>
        </div>
      </div>

      <VideoBG />

    </main>
  )
}
