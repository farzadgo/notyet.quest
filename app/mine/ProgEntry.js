import styles from './ProgEntry.module.css';


const ProgEntry = ({ content, theme }) => {

  const createMarkup = (string) => {
    return {__html: string}
  }

  return (
   <div className={styles.programentry}>
      <div className={styles.time} style={{border: `3px solid ${theme.foreColor}`}}>
        <p> {content.date} </p>
        <p> {content.timespan} </p>
      </div>
      <p className={styles.type}> {content.type} </p>
      <h1 className={styles.title}> {content.title} </h1>
      {content.author && <h2 className={styles.author}> {content.author} </h2>}
      <div className={styles.parts}>
        {content.parts.length ? <p> PART I: {content.parts[0]} </p> : ''}
        {content.parts.length ? <p> part II: {content.parts[1]} </p> : ''}
      </div>
      {content.body && <div className={styles.description}>
        {content.body.map((e, i) => <p key={i} dangerouslySetInnerHTML={createMarkup(e)}/>)}
      </div>}

   </div>
  )
}

export default ProgEntry