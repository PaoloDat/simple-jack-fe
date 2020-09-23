import TeamsPicker from "../TeamsPicker/TeamsPicker";
import { useState, useEffect } from 'react';
import { getLeaguesByCountryId } from '../../httpConfig/apiFetch';
import * as selectorTypes from '../../util/SelectorTypes';
import styles from '../../../styles/GameSubmit.module.css';

const GameSubmit = ({ countries }) => {

    const [ countryId, setCountryId ] = useState(countries[0].id);

    const [ leagueId, setLeagueId ] = useState();
    const [ leagues, setLeagues ] = useState([]);

    const [ teamId, setTeamId ] = useState();

    const onSelectorChange = (event, type) => {

        switch (type) {
            case selectorTypes.COUNTRY:
                setCountryId(event.target.value);
                break;
            case selectorTypes.LEAGUE:
                setLeagueId(event.target.value);
                break;
            default:
                console.log("Invalid selector type");
        }
    }

    useEffect(() => {
        (async () => {
            if (countryId) {
                const [data] = await getLeaguesByCountryId(countryId);
                setLeagues(data);
            }
        })()
    }, [ countryId ]);

    useEffect(() => {
        setLeagueId(leagues[0]);
    }, [ leagues ]);


    return (
        <div className={styles.Container}>
            <form>
                <TeamsPicker countries={countries}
                             leagues={leagues}
                             selectedCountry={countryId}
                             selectedLeague={leagueId}
                             onSelectorChange={onSelectorChange} />
            </form>
        </div>
    );
};

export default GameSubmit;
