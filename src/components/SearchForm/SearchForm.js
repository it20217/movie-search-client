import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from './SearchForm.module.scss';

function SearchForm(props) {
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
  console.log(props.marginTop)
  return(
    <div className={styles.search}>
      <div 
        className={styles["form-wrapper"]}
        style={{marginTop: props.marginTop}}
      >
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
    </div>
  )
}

export default SearchForm;