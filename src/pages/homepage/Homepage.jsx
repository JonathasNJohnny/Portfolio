import styles from "./Homepage.module.css"
import Navbar from '../../components/Navbar/Navbar.jsx'
import Banner from '../../components/Banner/Banner.jsx'

export const Homepage = () => {
    return (  
        <div className={styles.homepageContent}>
            <Navbar/>
            <Banner/>
        </div>
        
    )
}
export default Homepage;