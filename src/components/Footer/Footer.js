import styles from "./Footer.module.scss"
import logo from "../../assets/images/dev-logo.png"
import { Link } from 'react-router-dom'

function Footer(){
	return(
        <footer className={styles.wrapper}>
            <div className={styles.footer}>

                {/* Footer Logo */}
                <div className={styles.logo}>
                    <Link to="/">
                        <img clssName={styles.pic} src={logo} alt="Logo"/>
                    </Link>
                </div>

                {/* Footer Links */}
                <div className={styles.links}>
                    <div>
                        <Link to="/" className={styles.link}>Home </Link><br /><br />
                        <Link to="/read-more" className={styles.link}>Read More </Link><br /><br />
                        <Link to="/contact-us" className={styles.link}>Contact us </Link><br />
                    </div>
                </div>

                {/* Footer Address */}
                <div className={styles.side}>
                    <address>
                        <span>Movie app!</span><br/>
                        email@email.com<br/>
                        0123456789<br/>
                        @movie_app!
                    </address>
                </div>
            </div>

            {/* Footer project information */}
            <div className={styles.project}>
                <hr /><hr /><br />
                Project created by <span>Jaroslaw Polowy</span> and <span>Igor Tokarev</span> &copy; 2022 <a href="https://www.ncirl.ie/" target="_blank" rel="noreferrer">NCI</a>
            </div>
        </footer>
	)
}

export default Footer;