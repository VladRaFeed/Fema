import axios from "axios";

// https://dash.smart-maic.com/api?devid=1828719372&period=hour&apikey=141401828

const BASE_URL = 'https://dash.smart-maic.com/api?';

const DEVICE_ID = 1828719372;

const PERIOD = 'hour';

const API_KEY = 141401828;

export default class maicApi {
    constructor() {

    }

    async fetchArticles() {
    try {
      const response = await axios.get(
        `${BASE_URL}devid=${DEVICE_ID}&period=${PERIOD}&apikey=${API_KEY}`
        );
        console.log(response)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}