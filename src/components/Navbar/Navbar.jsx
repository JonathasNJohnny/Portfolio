import Button1 from '../Button1/Button1';
import styles from './Navbar.module.css';
import { Icon, InlineIcon } from "@iconify/react";
import linkedInIcon from '../../assets/linkedInIcon.png'
import githubIcon from '../../assets/githubIcon.png'

export const Navbar = () => {
    return (
        <>
            <div className={styles.fixedNavbar}>
                <div className={styles.navbar}>
                    <h2 className={styles.gradient}>JN</h2>
                    <div className={styles.navLinks}>
                        <ul className={styles.linksContainer}>
                            <li className={styles.gradient}>Skills</li>
                            <li className={styles.gradient}>Projects</li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <ul>
                            <li className={styles.iconli}><img src={linkedInIcon} alt='LinkedInIcon' width={45} className={styles.linkedInIcon}/></li>
                            <li className={styles.iconli}><img src={githubIcon} alt='GithubIcon' width={45} className={styles.githubIcon}/></li>
                            <li className={styles.buttonli}><Button1 buttonText={"Let's Connect!"}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
