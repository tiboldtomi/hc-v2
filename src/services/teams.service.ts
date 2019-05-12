import axios from 'axios';
import { API_KEY } from '../consts/football-api-key.const';

class Teams {

    public async getLeagues(): Promise<any> {
        const result = await axios.get(`https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=${API_KEY}`);
        console.log('result: ', result);
        const data = await result.data;
        console.log('data: ', data);
    }
}

export default Teams;