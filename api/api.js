const API_KEY = "RGAPI-c42a3ea0-1b53-457e-935e-22f94188e191";

export function getInfoFromResearch (name) {
  const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name+'?api_key='+API_KEY
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
