import useStyles from "./useStyles";
import './Toast.css';

const Toast = ({message}) => {

    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <h6 className={styles.body}>{message}</h6>
            </div>
        </div>
    )
}

export default Toast
