import styles from '../../../styles/ScoreInput.module.css';

const ScoreInput = ({
                        homeTeam,
                        awayTeam,
                        id,
                        changed,
                        homeValue,
                        awayValue
                    }) => {
    return (
        <div className={styles.Container}>
            <div>
                <label>{homeTeam}</label>
            </div>
            <div>
                <label>{awayTeam}</label>
            </div>
            <div>
                <input type="text" onChange={event => changed(event, id, "HOME")} value={homeValue} />
            </div>
            <div>
                <input type="text" onChange={event => changed(event, id, "AWAY")} value={awayValue}/>
            </div>
        </div>
    );
};

export default ScoreInput;
