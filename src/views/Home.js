import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.scss';
import SearchForm  from '../components/SearchForm/SearchForm'
import projector from '../assets/images/film-projector.webp';


function Home() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  const handleFind = (e) => {
    navigate(`/search/${query}`);
    setQuery('');
  }

  return (
    <div className={styles["home-container"]}>
      <div className={styles["image-container"]}>
      </div>
      <div className={styles["image-container"]}>
        <img src={projector} alt="film-projector"/>
      </div>
      <SearchForm 
        marginTop={80} 
      />
      
      {/* <div className={styles.search}>
        <div className={styles["form-wrapper"]}>
          <div className={styles["search-input"]}>
            <input 
              type="search" 
              value={query}
              className={styles["search-input"]} 
              placeholder={"Spiderman: No Way Home"}
              onChange={handleInput}
            />
          </div>
          <div className={styles["btn-container"]}>
            <button 
              type="button"
              className={styles["form-btn"]}
              onClick={handleFind}
            >
              Find
            </button>
          </div>
        </div>
      </div>       */}
    </div>
  )
}

export default Home;
