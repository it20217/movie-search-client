import { Link } from "react-router-dom";
import styles from "./Footer.module.scss"
function Footer(){
	return(
		<footer className={styles.footer}>
			<div className={styles.logo}>
				...LOGO.JPG...
			</div>
			<div className={styles.links}>
				
				<div>Link tag 1</div>
				<div>Link tag 2</div>
				<div>Link tag 3</div>
			</div>
            <hr />
            <div className={styles.side}>
                <address>
                    <span>Contact Us</span><br />
                    Example name<br/>
                    Example address<br/>
                    Example phone<br/>
                    Example email
                </address>
			</div>
		</footer>
	)
}

export default Footer;