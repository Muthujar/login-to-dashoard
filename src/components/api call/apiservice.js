import axios from "axios";

export const GetApi = async (url, callback) => {
  let data;
  axios.get(url).then((res) => {
    if (res) {
      return callback(res.data);
    }
  });
};
export const postApi = (url, body = {}) => {
  axios.post(url, body).then((res) => console.log("posting data", res));
};
