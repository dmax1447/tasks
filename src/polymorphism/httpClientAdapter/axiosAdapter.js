import axios from 'axios';

const axiosAdapter = (config) => {
  const instance = axios.create(config);

  const processResult = (requestPromise) => {
    return requestPromise
      .then(({ data, status } = {}) => {
        return {
          ok: true,
          status,
          json() {
            return new Promise((resolve) => resolve(data))
          },
          text() {
            return new Promise((resolve) => resolve(JSON.stringify(data)))
          }
        }
      })
      .catch(({ response } = {}) => {
        const { data, status } = response
        return {
          ok: false,
          status,
          json() {
            return new Promise((resolve) => resolve(data))
          },
          text() {
            return new Promise((resolve) => resolve(data))
          }
        }
      })
  }

  return {
    get: (route, params) => processResult(instance.get(route, params)),
    delete: (route, params) => processResult(instance.delete(route, params)),
    post: (route, ...params) => processResult(instance.post(route, ...params)),
    patch: (route, data, params) => processResult(instance.patch(route, data, params)),
  };
};

export default axiosAdapter;
