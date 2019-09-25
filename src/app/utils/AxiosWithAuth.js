import axios from 'axios';

// const token = localStorage.getItem('token');
// const axiosWithAuth = axios.create({
//   headers: {
//     Authorization: token,
//   },
// });

// export { axiosWithAuth };

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
