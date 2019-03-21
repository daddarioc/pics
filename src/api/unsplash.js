import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d51599ecdd8564389d094199f3d4c8f032c325d70bde84ee74c6e410555dd294'
  }
});

