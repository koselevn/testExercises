import axios from 'axios';

const ACCESS_KEY = '4Ko8xh4hW2916BacaZmJymAXqOiaSb5i70QAx221D00';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});
