import styles from './Navbar.module.css';
import { Icon, InlineIcon } from "@iconify/react";

const Navbar = () => {
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
                            <li className={styles.buttonli}><button>Let's Connect!</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
