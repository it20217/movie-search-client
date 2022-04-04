import { Link } from "react-router-dom";
import styles from "./Footer.module.scss"
import logo from "../../assets/images/dev-logo.png"
function Footer(){
	return(
		<footer className={styles.footer}>
			<div className={styles.logo}>
                <img src={logo} alt="Logo"/>
                <span>Movie&nbsp;app!</span>
			</div>
			<div className={styles.links}>
				<div>
                    <Link to="/" className={styles.link}>Home </Link><br /><br />
                    <span>Start exploring our<br />
                    website here</span>
                </div>
				<div>
                    <Link to="/search" className={styles.link}>Search </Link><br /><br />
                    <span>Search the database<br />
                    for movies of your choice</span>
                </div>
				<div>
                    <Link to="/read-more" className={styles.link}>Read More </Link><br /><br />
                    <span>Find out more about<br />
                    movies, TV shows, actors and more...</span>
                </div>
			</div> 
            <div className={styles.side}>
                <address>
                    <span>Contact Us</span><br /><br />
                    Movie app!<br/>
                    email@email.com<br/>
                    0123456789<br/>
                    @movie_app!
                </address>
			</div>
		</footer>
	)
}

export default Footer;