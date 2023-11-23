import axios from 'axios';

const baseURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;

export const addreview = async (requestData,dataset,language) => {
    console.log('request data', requestData);
    const ret = await axios.post(
      `http://localhost:3000/review/${dataset}/${language}`,
      requestData
    );
    return ret.data;
  };
  
  export const viewData = async ( requestData) => {
    const dataset = requestData.dataset;
    const language = requestData.language;
    const saveName = await axios.post (
      `http://localhost:3000/saveUser/${dataset}/${language}`,
      requestData
    );
    const ret = await axios.get(
      `http://localhost:3000/view/${dataset}/${language}`);

    return ret.data;
  };