const URL_INFO = 'http://localhost:8082/info';
const URL_GAME = 'http://localhost:8082/game';

export const saveDraw = async payload => {

    const requestInfo = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    const response = await fetch(`${URL_GAME}/draw`, requestInfo);
    const data = await response.json();
    return [data];
}

export const getDrawByNumber = async drawNumber => {
    const response = await fetch(`${URL_GAME}/draw/${drawNumber}`);
    const data = await response.json();
    return [data];
}

export const getLeaguesByCountryId = async (countryId) => {
    const response = await fetch(`${URL_INFO}/countries/${countryId}/league`);
    const data = await response.json();
    return [data];
}

export const getTeamsByCountryAndLeague = async (countryId, leagueId) => {
    const response = await fetch(`${URL_INFO}/countries/${countryId}/league/${leagueId}/team`);
    const data = await response.json();
    return [data];
}

export const saveGame = async (payload) => {

    const requestInfo = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    const response = await fetch(URL_GAME, requestInfo);
    const data = await response.json();
    return [data];
}
