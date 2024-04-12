import Button1 from '../Button1/Button1';
import styles from './Navbar.module.css';
import { Icon, InlineIcon } from "@iconify/react";

export const Navbar = () => {
    return (
        <>
            <div className={styles.fixedNavbar}>
                <div className={styles.navbar}>
                    <h2>JN</h2>
                    <div className={styles.navLinks}>
                        <ul className={styles.linksContainer}>
                            <li>Skills</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <ul>
                            <li className={styles.iconli}><Icon icon='entypo-social:linkedin-with-circle' style={{color: '#adadad'}} width={45}/></li>
                            <li className={styles.iconli}><Icon icon='entypo-social:github-with-circle' style={{color: '#adadad'}} width={45}/></li>
                            <li className={styles.buttonli}><Button1 buttonText={"Let's Connect!"}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
