import styles from './Button1.module.css'

export const Button1 = ({buttonText, onClick}) => {
    return (
        <button className={styles.style} onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button1;