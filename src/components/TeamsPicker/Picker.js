import styles from '../../../styles/Picker.module.css';
import React from "react";
import OddShow from "../CriteriaPicker/OddShow";

const Selector = ({options, changed, value, type, size, removable, removeHandler, removeId}) => {

    const selectorClasses = [ styles.Selector ];
    if (size === 'SMALL') {
        selectorClasses.push(styles.Small)
    }
    if (size === 'MEDIUM') {
        selectorClasses.push(styles.Medium)
    }

    return (
        <div className={styles.Container}>
            <select className={selectorClasses.join(' ')} onChange={event=> changed(event, type)} value={value}>
                {
                    options.map( (option, index) => (
                        <option key={index} value={option.id}>{option.name}</option>
                    ))
                }
            </select>
            {removable && <a href="#" onClick={() => removeHandler(removeId)}>-</a>}
            {/*<OddShow/>*/}
            {/*<OddShow/>*/}
        </div>
    );
};

export default Selector;
