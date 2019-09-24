import axios from 'axios';

class AxiosWithAuth {
  constructor() {
    const token = localStorage.getItem('token');

    return axios.create({
      headers: {
        Authorization: token,
      },
    });
  }
}
