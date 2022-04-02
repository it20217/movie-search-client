import styles from './Home.module.scss'
import projector from '../assets/images/film-projector.webp'


function Home() {

  return (
    <div className={styles["home-container"]}>
      <div className={styles["image-container"]}>

      </div>
      <div className={styles["image-container"]}>
        <img src={projector} alt="film-projector"/>
      </div>
      <form className={styles["form-container"]}>
        <div className={styles["form-wrapper"]}>
          <div className={styles["search-input"]}>
            <input type="search" className={styles["search-input"]} placeholder={"Spiderman: No Way Home"}/>
          </div>
          <div>
            <button className={styles["form-btn"]}>
              Find
            </button>
          </div>
        </div>
      </form>
      
    </div>
  )
}

export default Home;
