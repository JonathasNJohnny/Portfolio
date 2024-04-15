import Button1 from '../Button1/Button1'
import styles from './Banner.module.css'
import img1 from '../../assets/img1.png'

let greetings_en = "Hi, I'm Jonathas, a Full-Stack Dev"
let age = ((new Date()).getFullYear() - 2002)
let presentation = ["Hello, my name is Jonathas Nobrega, I'm " + age + " years old, I'm Brazillian, and I'm a programming student. Currently, I'm pursuing a degree in Computer Science at State University of Paraiba.", "I have experience in front-end development, specializing in HTML, CSS, JavaScript, and React. On the back end, I excel in creating robust server-side solutions using Python, including the development of RESTful APIs with Flask. I also have knowledge of technologies like Java and C. Additionally, I have expertise in working with databases such as PostgreSQL.", "Finally, I have experience in game development using GDScript."]

export const Banner = () => {
    return (
        <section className={styles.banner} id='home'>
            <div className={styles.bannerDiv}>
                <div className={styles.textSide}>
                    <h1>{greetings_en}</h1>
                    <p>{presentation[0]}<br/><br/>{presentation[1]}<br/><br/>{presentation[2]}</p>
                    <Button1 buttonText={"Let's Connect!"}/>
                </div>
                <div className={styles.imgSide}>
                    <img src={img1} alt='img1div' width={400} className={styles.img1}/>
                </div>
            </div>
        </section>
    )
}

export default Banner;