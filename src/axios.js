import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:4001/divine-treasures-by-teresa/us-central1/api' 
    // 'https://us-central1-clone-42755.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-42755/us-central1/api' //THE API (cloud function) URL\
    // http://localhost:4001/divine-treasures-by-teresa/us-central1/api
});

export default instance;
