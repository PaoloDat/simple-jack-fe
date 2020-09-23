import Selector from "./Selector";
import * as selectorTypes from '../../util/SelectorTypes';
import styles from '../../../styles/TeamPicker.module.css';

const TeamsPicker = ({ countries, onSelectorChange, selectedCountry, leagues, selectedLeague }) => {

    return (
        <div className={styles.Container}>
            <Selector type={selectorTypes.COUNTRY}
                      size="SMALL"
                      options={countries}
                      changed={onSelectorChange}
                      value={selectedCountry} />

            <Selector type={selectorTypes.LEAGUE}
                      size="SMALL"
                      options={leagues}
                      changed={onSelectorChange}
                      value={selectedLeague} />
        </div>
    );
};


export default TeamsPicker;
