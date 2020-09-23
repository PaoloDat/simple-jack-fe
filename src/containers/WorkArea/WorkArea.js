import styles from '../../../styles/WorkArea.module.css';
import GameSubmit from "../../components/GameSubmit/GameSubmit";

const WorkArea = ({countries}) => {
    return (
        <div className={styles.Container}>
            <GameSubmit countries={countries}/>
        </div>
    );
};

export default WorkArea;
