import axios from 'axios';

const baseUrl = axios.create({ baseURL: 'http://localhost:9988' });

const Api = {
  async getAnswer() {
    const result = await baseUrl.get('/answer');

    return result.data;
  },
};

export default Api;
