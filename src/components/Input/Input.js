import styles from '../../../styles/Input.module.css'

const Input = ({changed, value, type}) => {
    return (
        <div>
            <input onChange={ event => changed(event, type)} value={value} className={styles.Input}/>
        </div>
    );
};

export default Input;
