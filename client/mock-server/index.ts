import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

let api;

switch (import.meta.env.MODE) {
  case 'development':
    api = mock
    break
  case 'production':
    api = axiosInstance
    break
  default:
    console.log('err')
    throw Error('Define your environment variables!')
}

mock.onPost('/login').reply(200, {

})

export default api