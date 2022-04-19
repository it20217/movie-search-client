import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../../assets/images/dev-logo.png"
import SearchForm  from '../SearchForm/SearchForm'
import styles from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";

function Header(props) {

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
      <div className={`${styles["app-name"]} text-gray-800`}>
        Movie app!
      </div>
      {!path && 

        <SearchForm />
       
      }
      
      <div 
        className={styles["menu-icon-div"]}
        onClick={props.setShowNavbar}
      >
        < HiOutlineMenu/>
      </div>
    </div>
    
  )
}

export default Header;

