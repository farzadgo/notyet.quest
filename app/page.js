
import Link from 'next/link';
import styles from './page.module.css';
import VideoBG from './videobg';

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
        {/* <p> website in progress </p> */}
        <p> 8-26. AUGUST 2023 </p>
      </div>

      <VideoBG />

    </main>
  )
}
