import styles from './Bubble.module.css';
const Bubble = ({ message }) =>{
    const {content} = message;

    return (
        <div className={styles.bubble}>
            <p>{content}</p>
        </div>
    )
}

export default Bubble;