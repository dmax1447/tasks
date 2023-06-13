import fetchAdapter from './fetchAdapter.js';
import axiosAdapter from './axiosAdapter.js';
const BASE_URL = 'http://jsonplaceholder.typicode.com'

const createHttpClient = (mode) => {
  const modeToAdapterMap = {
    'axios': axiosAdapter,
    'fetch': fetchAdapter
  }

  return modeToAdapterMap[mode]
}

// export default createHttpClient

const httpClient = createHttpClient('axios') //?
const instance = httpClient({ baseURL: BASE_URL})
const response = await instance.get('/users2321')
console.log(response)
const data = await response.json()
console.log(data)
