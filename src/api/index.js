import axios from 'axios';


const url = 'https://corona.lmao.ninja/v2/all';
//const url2 = 'https://api.thevirustracker.com/free-api?countryTimeline=BD';
const url2 = 'https://covid19.mathdro.id/api/daily';

export const fetchData = async () => {
    try {
        const {data: {cases, recovered, deaths, updated}} = await axios.get(url);

        return {cases, recovered, deaths, updated};
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(url2);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };