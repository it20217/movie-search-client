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
		</footer>
	)
}

export default Footer;