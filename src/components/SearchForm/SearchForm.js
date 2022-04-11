import {useState} from 'react';
import { icons } from 'react-icons';
import { useNavigate } from "react-router-dom";
import styles from './SearchForm.module.scss';
import { HiOutlineArrowRight } from "react-icons/hi";

function SearchForm(props) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const Enter = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.");
      event.preventDefault();
      handleFind();
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
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
            style={{borderColor: (query !== '') ?  "#209fd9" : "#273461", borderWidth: (query !== '') ?  "3px" : "2px"}}
            placeholder={"Spiderman: No Way Home"}
            onChange={handleInput}
            onKeyDown={Enter}
          />
        </div>
        <div className={styles["btn-container"]}>
          <button 
            type="button"
            style={{borderColor: (query !== '') ?  "#209fd9" : "#273461", Color: (query !== '') ?  "#20d920" : "#273461", borderWidth: (query !== '') ?  "3px" : "2px"}}
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