import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../../assets/images/cinema-154392__340.webp"
import SearchForm  from '../SearchForm/SearchForm'
import styles from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";

function Header(props) {

  const [path, setPath] = useState(false);

  // useNavigate hook let to navigate programmatically 
  const navigate = useNavigate();

  //useLocation hook returns the location object that represents the current URL
  const location = useLocation();

  
// page re-rendering on 'location' change. Return 'path' state as true or false 
 useEffect(() => {

   //String.localeCompare returns 0 or 1
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

      {/* {If current route is not home page show component SearchForm in Header} */}

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

