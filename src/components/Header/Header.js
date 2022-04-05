import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../../assets/images/dev-logo.png"
import SearchForm  from '../SearchForm/SearchForm'
import styles from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {

  const [query, setQuery] = useState('');
  const [path, setPath] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  const handleFind = (e) => {
    navigate(`/search/${query}`);
    setQuery('');
  }

 useEffect(() => {
    location.pathname.localeCompare("/") === 0 
  ?
    setPath(true)
  :
    setPath(false)

  }, [location]);

  return(
    <div className={styles.header}>
     <div 
      className={styles["app-logo"]}
      onClick={(e) => {e.preventDefault(); navigate('/')}}
     >
      <img src={logo}  alt="Logo" />
     </div>
      <div className={styles["app-name"]}>
        Movie app!
      </div>
      {!path && 

        <SearchForm />
        // <>
        //   <div className={styles.search}>
        //     <div className={styles["form-wrapper"]}>
        //       <div className={styles["search-input"]}>
        //         <input 
        //           type="search" 
        //           value={query}
        //           className={styles["search-input"]} 
        //           placeholder={"Spiderman: No Way Home"}
        //           onChange={handleInput}
        //         />
        //       </div>
        //       <div className={styles["btn-container"]}>
        //         <button 
        //           type="button"
        //           className={styles["form-btn"]}
        //           onClick={handleFind}
        //         >
        //           Find
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </>
      }
      
     
      <div className={styles["menu-icon-div"]}>
        < HiOutlineMenu/>
      </div>
    </div>
    
  )
}

export default Header;

