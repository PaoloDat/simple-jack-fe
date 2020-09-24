import styles from '../../../styles/WorkArea.module.css';
import GameSubmit from "../../components/GameSubmit/GameSubmit";

const WorkArea = ({countries, criteria}) => {
    return (
        <div className={styles.Container}>
            <GameSubmit countries={countries} criteria={criteria}/>
        </div>
    );
};

export default WorkArea;
