import axios from 'axios';

export const runCallBack = (cb) => {
  cb('abc');
};

export const createInstance = (classItem) => {
  new classItem();
};

export const getData = () => {
  return axios.get('/api').then((res) => res.data);
};
