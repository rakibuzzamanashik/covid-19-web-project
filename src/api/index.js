import axios from 'axios';


const url = 'https://corona.lmao.ninja/v2/all';


export const fetchData = async () => {
    try {
        const {data: {cases, recovered, deaths, updated}} = await axios.get(url);

        return {cases, recovered, deaths, updated};
    } catch (error) {
        
    }
}