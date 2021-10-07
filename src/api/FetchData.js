import axios from 'axios';
import config from '../config';

const { api } = config;

export default async function fetchWithKey() {

    return await axios({

        method: "get",
        url: api.baseUrl
    })
        .then(res => {

            return res.data;
        })
        .catch(e => console.log(e));
}