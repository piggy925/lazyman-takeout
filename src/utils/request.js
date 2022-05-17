import axios from 'axios';

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
      headers: {
        ContentType: 'Application/json',
      }
    }).then((resp) => {
      resolve(resp.data);
    }, err => {
      reject(err);
    });
  });
}
