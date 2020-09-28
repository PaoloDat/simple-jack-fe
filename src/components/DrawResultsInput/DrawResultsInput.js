import styles from '../../../styles/DrawResultsInput.module.css';
import { useState } from 'react';
import { getDrawByNumber, saveDraw } from '../../httpConfig/apiFetch';
import ScoreInput from "./ScoreInput";

const DrawResultsInput = () => {

    const [ drawNumber, setDrawNumber ] = useState('');

    const [ drawData, setDrawData ] = useState();
    const [ gameResults, setGameResults ] = useState([]);



    const drawNumberHandler = event => {
        setDrawNumber(event.target.value);
    }

    const onDrawLoading = async () => {
        const [ data ] = await getDrawByNumber(drawNumber);
        setDrawData(data);
        console.log(data);
    }

    const addScoreHandler = (event, id, type) => {

        let homeScore;
        let awayScore;

        const index = gameResults.findIndex(game => game.id === id);

        if (index < 0) {
            if (type === 'HOME') {
                homeScore = event.target.value
            }
            if (type === 'AWAY') {
                awayScore = event.target.value
            }

            const gameResult = {
                id,
                homeScore,
                awayScore
            }
            setGameResults(prev => [ ...prev, gameResult ]);
        } else {
            const currentArray = gameResults;
            if (type === 'HOME') {
                currentArray[index].homeScore = event.target.value
            }
            if (type === 'AWAY') {
                currentArray[index].awayScore = event.target.value
            }
            setGameResults([ ...currentArray ]);
        }


    }

    let drawInfo;
    if (drawData) {
        drawInfo = (
            drawData.map(game => {
                return <ScoreInput key={game.id}
                                   homeTeam={game.homeTeam}
                                   awayTeam={game.awayTeam}
                                   id={game.id}
                                   changed={addScoreHandler} />
            })
        )
    }


    const drawSubmitHandler = async () => {
        let error = false;

        if (gameResults.length === 0 || gameResults.length < drawData.length) {
            error = true;
        } else {
            gameResults.forEach(game => {
                if (!game.homeScore || !game.awayScore) {
                    error = true;
                }
            })
        }

        if (error) {
            alert("Не все заполнено!");
            return;
        }

        const [data] = await saveDraw(gameResults);
        alert(`Сохренено ${data} результатов`)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Load}>
                <input value={drawNumber} onChange={drawNumberHandler} />
                <a href="#" onClick={onDrawLoading}>LOAD</a>
            </div>
            <div>
                {drawData && drawInfo}
            </div>
            <div className={styles.Button}>
                <button onClick={drawSubmitHandler}>Submit</button>
            </div>
        </div>
    );
};

export default DrawResultsInput;
