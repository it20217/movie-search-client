import logo from "../../assets/images/dev-logo.png"
import styles from "./Header.module.scss"

function Header() {

  return(
    <div className={styles.header}>
     
        <img src={logo} width={"100"} alt="Logo" />
        <div className={styles["app-name"]}>
         Movie app!
        </div>
    </div>
    
  )
}

export default Header;

