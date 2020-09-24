import React from 'react';
import styles from '../../../styles/CriteriaPicker.module.css';
import Selector from "../TeamsPicker/Selector";
import Picker from "../TeamsPicker/Picker";

const CriteriaPicker = ({
                            label,
                            pickerConfig,
                            addPickerHandler,
                            removePickerHandler,
                            changePickerHandler
                        }) => {

    let pickers = pickerConfig.map(config => (
        <div key={config.id} className={styles.Picker}>
            <Picker
                type={config.id}
                size="MEDIUM"
                options={config.options}
                changed={changePickerHandler}
                value={config.value}
                removable
                removeHandler={removePickerHandler}
                removeId={config.id}/>
        </div>
    ))

    return (
        <div className={styles.Container}>
            <div className={styles.Types}>
                <label>{label}</label>
                <a href="#" onClick={addPickerHandler}>+</a>
            </div>
            <div>
                {pickers}
            </div>
        </div>
    );
};

export default CriteriaPicker;
