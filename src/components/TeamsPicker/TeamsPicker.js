import Selector from "./Selector";
import * as selectorTypes from '../../util/SelectorTypes';
import styles from '../../../styles/TeamPicker.module.css';
import Input from "../Input/Input";

const TeamsPicker = ({
                         countries,
                         onSelectorChange,
                         selectedCountry,
                         leagues,
                         selectedLeague,
                         teams,
                         selectedHomeTeam,
                         selectedAwayTeam,
                         onInputChange,
                         fonHomeValue,
                         fonDrawValue,
                         fonAwayValue,
                         manHomeValue,
                         manDrawValue,
                         manAwayValue,
                         oddHomeValue,
                         oddDrawValue,
                         oddAwayValue,
                         drawNumber
                     }) => {

    return (
        <div>
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
                <Selector type={selectorTypes.TEAM_HOME}
                          size="MEDIUM"
                          options={teams}
                          changed={onSelectorChange}
                          value={selectedHomeTeam} />
                <Selector type={selectorTypes.TEAM_AWAY}
                          size="MEDIUM"
                          options={teams}
                          changed={onSelectorChange}
                          value={selectedAwayTeam} />

            </div>
            <div className={styles.Container}>
                <div>
                    <Input type={selectorTypes.DRAW_NUMBER}
                           changed={onInputChange}
                           value={drawNumber} />
                </div>
                <div className={styles.Item}>
                    <label className={styles.Label}>FON</label>
                    <Input type={selectorTypes.FON_HOME}
                           changed={onInputChange}
                           value={fonHomeValue} />
                    <Input type={selectorTypes.FON_DRAW}
                           changed={onInputChange}
                           value={fonDrawValue} />
                    <Input type={selectorTypes.FON_AWAY}
                           changed={onInputChange}
                           value={fonAwayValue} />
                </div>
                <div className={styles.Item}>
                    <label className={styles.Label}>MAN</label>
                    <Input type={selectorTypes.MAN_HOME}
                           changed={onInputChange}
                           value={manHomeValue} />
                    <Input type={selectorTypes.MAN_DRAW}
                           changed={onInputChange}
                           value={manDrawValue} />
                    <Input type={selectorTypes.MAN_AWAY}
                           changed={onInputChange}
                           value={manAwayValue} />
                </div>
                <div className={styles.Item}>
                    <label className={styles.Label}>ODDS</label>
                    <Input type={selectorTypes.ODD_HOME}
                           changed={onInputChange}
                           value={oddHomeValue} />
                    <Input type={selectorTypes.ODD_DRAW}
                           changed={onInputChange}
                           value={oddDrawValue} />
                    <Input type={selectorTypes.ODD_AWAY}
                           changed={onInputChange}
                           value={oddAwayValue} />
                </div>
            </div>
        </div>
    );
};


export default TeamsPicker;
