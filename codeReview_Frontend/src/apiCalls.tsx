import axios from 'axios';

const baseURL = 'http://localhost:8081/api';

// axios.defaults.withCredentials = true;

export const addreview = async (data) => {
    // console.log(data);
    const ret = await axios.post(`${baseURL}/review`, data);
  };

  function change(str) {
    return JSON.parse(`{
      "temp": "${str}"
    }`).temp
  }
  export const viewData = async (lang) => {
    // console.log(lang);
    const ret = await axios.get(`${baseURL}/review/${lang}`);
    let res = ret.data;
    // console.log(change(res.patch));
    res.original = change(res.original);
    res.output = change(res.output);
    res.patch = change(res.patch);
    // console.log(res.patch);

    // console.log(res);
    return res;
  };