import axios from 'axios';


export const apiGet = (url, header) => {
  return axios.get(url, header)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
    // always executed
    });
};

export const apiPost = () => {
  axios.get({

  });
};

