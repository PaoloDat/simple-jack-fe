import TeamsPicker from "../TeamsPicker/TeamsPicker";
import React, { useState, useEffect } from 'react';
import { getLeaguesByCountryId, getTeamsByCountryAndLeague, saveGame } from '../../httpConfig/apiFetch';
import * as selectorTypes from '../../util/SelectorTypes';
import styles from '../../../styles/GameSubmit.module.css';
import CriteriaPicker from "../CriteriaPicker/CriteriaPicker";
import Selector from "../TeamsPicker/Selector";

const GameSubmit = ({ countries, criteria }) => {

    const [ countryId, setCountryId ] = useState(countries[0].id);

    const [ leagueId, setLeagueId ] = useState();
    const [ leagues, setLeagues ] = useState([]);

    const [ homeTeamId, setHomeTeamId ] = useState();
    const [ awayTeamId, setAwayTeamId ] = useState();
    const [ teams, setTeams ] = useState([]);

    const [ fonHome, setFonHome ] = useState('');
    const [ fonDraw, setFonDraw ] = useState('');
    const [ fonAway, setFonAway ] = useState('');

    const [ manHome, setManHome ] = useState('');
    const [ manDraw, setManDraw ] = useState('');
    const [ manAway, setManAway ] = useState('');

    const [ oddHome, setOddHome ] = useState('');
    const [ oddDraw, setOddDraw ] = useState('');
    const [ oddAway, setOddAway ] = useState('');

    const [drawNumber, setDrawNumber] = useState('');

    const [ homeCriteriaPickers, setHomeCriteriaPickers ] = useState([]);
    const [ homeOnlyCriteriaPickers, setHomeOnlyCriteriaPickers ] = useState([]);
    const [ awayCriteriaPickers, setAwayCriteriaPickers ] = useState([]);
    const [ awayOnlyCriteriaPickers, setAwayOnlyCriteriaPickers ] = useState([]);
    const [ h2hCriteriaPickers, setH2HCriteriaPickers ] = useState([]);
    const [ otherCriteriaPickers, setOtherCriteriaPickers ] = useState([]);


    const onSelectorChange = (event, type) => {

        switch (type) {
            case selectorTypes.COUNTRY:
                setCountryId(event.target.value);
                break;
            case selectorTypes.LEAGUE:
                setLeagueId(event.target.value);
                break;
            case selectorTypes.TEAM_HOME:
                setHomeTeamId(event.target.value);
                break;
            case selectorTypes.TEAM_AWAY:
                setAwayTeamId(event.target.value);
                break;
            default:
                console.log("Invalid selector type");
        }
    }

    const onInputChange = (event, type) => {
        switch (type) {
            case selectorTypes.FON_HOME:
                setFonHome(event.target.value);
                break;
            case selectorTypes.FON_DRAW:
                setFonDraw(event.target.value);
                break;
            case selectorTypes.FON_AWAY:
                setFonAway(event.target.value);
                break;
            case selectorTypes.MAN_HOME:
                setManHome(event.target.value);
                break;
            case selectorTypes.MAN_DRAW:
                setManDraw(event.target.value);
                break;
            case selectorTypes.MAN_AWAY:
                setManAway(event.target.value);
                break;
            case selectorTypes.ODD_HOME:
                setOddHome(event.target.value);
                break;
            case selectorTypes.ODD_DRAW:
                setOddDraw(event.target.value);
                break;
            case selectorTypes.ODD_AWAY:
                setOddAway(event.target.value);
                break;
            case selectorTypes.DRAW_NUMBER:
                setDrawNumber(event.target.value);
                break;
            default:
                console.log("Invalid selector type");
        }
    }

    useEffect(() => {
        (async () => {
            if (countryId) {
                const [ data ] = await getLeaguesByCountryId(countryId);
                setLeagues(data);
            }
        })()
    }, [ countryId ]);

    useEffect(() => {
        if (leagues.length > 0) {
            setLeagueId(leagues[0].id);
        }
    }, [ leagues ]);

    useEffect(() => {
        (async () => {
            if (leagueId) {
                const [ data ] = await getTeamsByCountryAndLeague(countryId, leagueId);
                setTeams(data);
            }
        })()
    }, [ leagueId ]);

    useEffect(() => {
        if (teams.length > 0) {
            setHomeTeamId(teams[0].id);
            setAwayTeamId(teams[1].id);
        }
    }, [ teams ]);

    useEffect(() => {
        if (fonHome && fonDraw) {
            const a = parseFloat(100 - parseFloat(fonHome) - parseFloat(fonDraw)).toFixed(2);
            setFonAway(a);
        }
    }, [ fonHome, fonDraw ]);

    useEffect(() => {
        if (manHome && manDraw) {
            const a = parseFloat(100 - parseFloat(manHome) - parseFloat(manDraw)).toFixed(2);
            setManAway(a);
        }
    }, [ manHome, manDraw ]);


    const addHomeCriteriaPicker = () => {

        const newPicker = {
            id: homeCriteriaPickers.length,
            value: criteria[0][0].id,
            type: selectorTypes.HOME_CRITERIA,
            options: criteria[0],
        }

        setHomeCriteriaPickers(prev => [ ...prev, newPicker ])
    }

    const removeHomePickerHandler = id => {
        const updatedPickers = homeCriteriaPickers.filter(el => el.id !== id);
        setHomeCriteriaPickers(updatedPickers);
    }

    const changeHomePickerHandler = (event, id) => {
        const currentArray = homeCriteriaPickers;
        const index = currentArray.findIndex(el => el.id === id);
        currentArray[index].value = event.target.value;
        setHomeCriteriaPickers([...currentArray]);
    }

    const addHomeOnlyCriteriaPicker = () => {

        const newPicker = {
            id: homeOnlyCriteriaPickers.length,
            value: criteria[1][0].id,
            type: selectorTypes.HOME_ONLY_CRITERIA,
            options: criteria[1],
        }

        setHomeOnlyCriteriaPickers(prev => [ ...prev, newPicker ])
    }

    const removeHomeOnlyPickerHandler = id => {
        const updatedPickers = homeOnlyCriteriaPickers.filter(el => el.id !== id);
        setHomeOnlyCriteriaPickers(updatedPickers);
    }

    const changeHomeOnlyPickerHandler = (event, id) => {
        const currentArray = homeOnlyCriteriaPickers;
        const index = currentArray.findIndex(el => el.id === id);
        currentArray[index].value = event.target.value;
        setHomeOnlyCriteriaPickers([...currentArray]);
    }



    const addAwayCriteriaPicker = () => {

        const newPicker = {
            id: awayCriteriaPickers.length,
            value: criteria[2][0].id,
            type: selectorTypes.AWAY_CRITERIA,
            options: criteria[2],
        }

        setAwayCriteriaPickers(prev => [ ...prev, newPicker ])
    }

    const removeAwayPickerHandler = id => {
        const updatedPickers = awayCriteriaPickers.filter(el => el.id !== id);
        setAwayCriteriaPickers(updatedPickers);
    }

    const changeAwayPickerHandler = (event, id) => {
        const currentArray = awayCriteriaPickers;
        const index = currentArray.findIndex(el => el.id === id);
        currentArray[index].value = event.target.value;
        setAwayCriteriaPickers([...currentArray]);
    }



    const addAwayOnlyCriteriaPicker = () => {

        const newPicker = {
            id: awayOnlyCriteriaPickers.length,
            value: criteria[3][0].id,
            type: selectorTypes.AWAY_ONLY_CRITERIA,
            options: criteria[3],
        }

        setAwayOnlyCriteriaPickers(prev => [ ...prev, newPicker ])
    }

    const removeAwayOnlyPickerHandler = id => {
        const updatedPickers = awayOnlyCriteriaPickers.filter(el => el.id !== id);
        setAwayOnlyCriteriaPickers(updatedPickers);
    }

    const changeAwayOnlyPickerHandler = (event, id) => {
        const currentArray = awayOnlyCriteriaPickers;
        const index = currentArray.findIndex(el => el.id === id);
        currentArray[index].value = event.target.value;
        setAwayOnlyCriteriaPickers([...currentArray]);
    }


    const addH2HCriteriaPicker = () => {

        const newPicker = {
            id: h2hCriteriaPickers.length,
            value: criteria[4][0].id,
            type: selectorTypes.H2H,
            options: criteria[4],
        }

        setH2HCriteriaPickers(prev => [ ...prev, newPicker ])
    }

    const removeH2HPickerHandler = id => {
        const updatedPickers = h2hCriteriaPickers.filter(el => el.id !== id);
        setH2HCriteriaPickers(updatedPickers);
    }

    const changeH2HPickerHandler = (event, id) => {
        const currentArray = h2hCriteriaPickers;
        const index = currentArray.findIndex(el => el.id === id);
        currentArray[index].value = event.target.value;
        setH2HCriteriaPickers([...currentArray]);
    }


    const addOtherCriteriaPicker = () => {

        const newPicker = {
            id: otherCriteriaPickers.length,
            value: criteria[16][0].id,
            type: selectorTypes.OTHER,
            options: criteria[16],
        }

        setOtherCriteriaPickers(prev => [ ...prev, newPicker ])
    }

    const removeOtherPickerHandler = id => {
        const updatedPickers = otherCriteriaPickers.filter(el => el.id !== id);
        setOtherCriteriaPickers(updatedPickers);
    }

    const changeOtherPickerHandler = (event, id) => {
        const currentArray = otherCriteriaPickers;
        const index = currentArray.findIndex(el => el.id === id);
        currentArray[index].value = event.target.value;
        setOtherCriteriaPickers([...currentArray]);
    }

    const onSubmitHandler = async () => {
        const home =  homeCriteriaPickers.map(c => c.value);
        const homeOnly = homeOnlyCriteriaPickers.map(c => c.value);
        const away =  awayCriteriaPickers.map(c => c.value);
        const awayOnly = awayOnlyCriteriaPickers.map(c => c.value);
        const h2h =  h2hCriteriaPickers.map(c => c.value);
        const other = otherCriteriaPickers.map(c => c.value);

        const criteria = [...home, ...homeOnly, ...away, ...awayOnly, ...h2h, ...other];

        const payload = {
            drawNumber,
            countryId,
            leagueId,
            homeTeamId,
            awayTeamId,
            fonHome,
            fonDraw,
            fonAway,
            manHome,
            manDraw,
            manAway,
            oddHome,
            oddDraw,
            oddAway,
            criteria
        }
        console.log("payload");
        console.log(payload);
        const [data] = await saveGame(payload);
        console.log(data);
    }




    return (
        <div className={styles.Container}>
            <form onSubmit={onSubmitHandler}>
                <TeamsPicker countries={countries}
                             leagues={leagues}
                             teams={teams}
                             selectedCountry={countryId}
                             selectedLeague={leagueId}
                             selectedHomeTeam={homeTeamId}
                             selectedAwayTeam={awayTeamId}
                             onSelectorChange={onSelectorChange}
                             onInputChange={onInputChange}
                             fonHomeValue={fonHome}
                             fonDrawValue={fonDraw}
                             fonAwayValue={fonAway}
                             manHomeValue={manHome}
                             manDrawValue={manDraw}
                             manAwayValue={manAway}
                             oddHomeValue={oddHome}
                             oddDrawValue={oddDraw}
                             oddAwayValue={oddAway}
                             drawNumber={drawNumber}
                />
                <div className={styles.Picker}>
                    <CriteriaPicker label="Home"
                                    pickerConfig={homeCriteriaPickers}
                                    addPickerHandler={addHomeCriteriaPicker}
                                    removePickerHandler={removeHomePickerHandler}
                                    changePickerHandler={changeHomePickerHandler} />
                    <CriteriaPicker label="Home  Only"
                                    pickerConfig={homeOnlyCriteriaPickers}
                                    addPickerHandler={addHomeOnlyCriteriaPicker}
                                    removePickerHandler={removeHomeOnlyPickerHandler}
                                    changePickerHandler={changeHomeOnlyPickerHandler}/>
                    <CriteriaPicker label="Away"
                                    pickerConfig={awayCriteriaPickers}
                                    addPickerHandler={addAwayCriteriaPicker}
                                    removePickerHandler={removeAwayPickerHandler}
                                    changePickerHandler={changeAwayPickerHandler} />
                    <CriteriaPicker label="Away  Only"
                                    pickerConfig={awayOnlyCriteriaPickers}
                                    addPickerHandler={addAwayOnlyCriteriaPicker}
                                    removePickerHandler={removeAwayOnlyPickerHandler}
                                    changePickerHandler={changeAwayOnlyPickerHandler}/>
                    <CriteriaPicker label="Head-to-Head"
                                    pickerConfig={h2hCriteriaPickers}
                                    addPickerHandler={addH2HCriteriaPicker}
                                    removePickerHandler={removeH2HPickerHandler}
                                    changePickerHandler={changeH2HPickerHandler}/>
                    <CriteriaPicker label="Other"
                                    pickerConfig={otherCriteriaPickers}
                                    addPickerHandler={addOtherCriteriaPicker}
                                    removePickerHandler={removeOtherPickerHandler}
                                    changePickerHandler={changeOtherPickerHandler}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default GameSubmit;
