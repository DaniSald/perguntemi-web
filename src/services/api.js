import axios from 'axios';

const baseUrl = axios.create({ baseURL: '<BASE_URL>' });

const Api = {
  async getAnswer() {
    const result = await baseUrl.get('/answer');

    return result.data;
  },

  async createAnswer(object) {
    const result = await baseUrl.post('/create/answer', object);

    return result;
  },
};

export default Api;
