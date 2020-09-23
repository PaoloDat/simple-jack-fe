const URL_INFO = 'http://localhost:8082/info'

export const getLeaguesByCountryId = async (countryId) => {
    const response = await fetch(`${URL_INFO}/countries/${countryId}/league`);
    const data = await response.json();
    return [data];
}
