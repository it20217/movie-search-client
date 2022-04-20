import styles from "./Footer.module.scss"
import logo from "../../assets/images/dev-logo.png"
import { Link } from 'react-router-dom'

function Footer(){
	return(
        <div className={styles.wrapper}>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img clssName={styles.pic} src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div className={styles.links}>
                    <div>
                        <Link to="/" className={styles.link}>Home </Link><br /><br />
                        <Link to="/read-more" className={styles.link}>Read More </Link><br /><br />
                        <Link to="/contact-us" className={styles.link}>Contact us </Link><br />
                    </div>
                </div> 
                <div className={styles.side}>
                    <address>
                        <span>Movie app!</span><br/>
                        email@email.com<br/>
                        0123456789<br/>
                        @movie_app!
                    </address>
                </div>
            </footer>
            <div className={styles.project}>
                <hr /><br />
                Project created by <span>Jaroslaw Polowy</span> and <span>Igor Tokarev</span> &copy; 2022 <a href="https://www.ncirl.ie/" target="_blank">NCI</a>
            </div>
        </div>
	)
}

export default Footer;