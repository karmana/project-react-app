import styles from './Button.module.scss';

const Button = param => {
    return (<button className={styles.button}> {param.text} </button>);
};
export default Button;
