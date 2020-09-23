import TeamsPicker from "../TeamsPicker/TeamsPicker";
import { useState, useEffect } from 'react';
import { getLeaguesByCountryId, getTeamsByCountryAndLeague } from '../../httpConfig/apiFetch';
import * as selectorTypes from '../../util/SelectorTypes';
import styles from '../../../styles/GameSubmit.module.css';

const GameSubmit = ({ countries }) => {

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
    }, [fonHome, fonDraw]);

    useEffect(() => {
        if (manHome && manDraw) {
            const a = parseFloat(100 - parseFloat(manHome) - parseFloat(manDraw)).toFixed(2);
            setManAway(a);
        }
    }, [manHome, manDraw]);



    return (
        <div className={styles.Container}>
            <form>
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
                />
            </form>
        </div>
    );
};

export default GameSubmit;
