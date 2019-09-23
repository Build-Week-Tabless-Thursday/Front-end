import axios from 'axios';

export const axiosWithAuth = () => {
  //create auth token
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
