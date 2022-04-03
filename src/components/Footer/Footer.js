import styles from "./Footer.module.scss"
import projector from '../../assets/images/film-projector.webp'
function Footer(){
	return(
		<footer className={styles.footer}>
			<div className={styles.logo}>
                <img src={projector} alt="film-projector"/>
			</div>
			<div className={styles.links}>
				
				<div>Link tag 1<br />
                    content<br />
                    content<br />
                    content
                </div>
				<div>Link tag 2<br />
                    content<br />
                    content
                </div>
				<div>Link tag 3<br />
                    content<br />
                    content
                </div>
			</div>
            <hr />
            <div className={styles.side}>
                <address>
                    <span>Contact Us</span><br />
                    Movie App!<br/>
                    email@email.com<br/>
                    0123456789<br/>
                    @movie_app!
                </address>
			</div>
		</footer>
	)
}

export default Footer;