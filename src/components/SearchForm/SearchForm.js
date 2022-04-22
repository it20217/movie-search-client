import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from './SearchForm.module.scss';
import { HiOutlineArrowRight } from "react-icons/hi";

function SearchForm(props) {
  const [query, setQuery] = useState('');

  // useNavigate hook let to navigate programmatically 
  const navigate = useNavigate();

  //Event handler on key 'Enter' press
  const Enter = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      handleFind();
    }
  };

  // handler of input value
  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  // handler of searching function
  const handleFind = (e) => {
    navigate(`/search/${query}`);
    setQuery('');
  }

  
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
            style={{borderColor: (query !== '') ?  "#ecdb20" : "#273461"}}
            placeholder={"Spiderman: No Way Home"}
            onChange={handleInput}
            onKeyDown={Enter}
          />
        </div>
        <div className={styles["btn-container"]}>
          <button 
            type="button"
            style={{borderColor: (query !== '') ?  "#ecdb20" : "#273461", Color: (query !== '') ?  "#20d920" : "#273461"}}
            className={styles["form-btn"]}
            onClick={handleFind}
          >
            < HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;