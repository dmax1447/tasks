import fetch from 'node-fetch';

const fetchAdapter = (config) => {
  // BEGIN (write your solution here)
  const prepareUrl = (route, params) => {
    const path = `${config.baseURL}${route}`
    if (!params || !Object.keys(params).length) return path

    const urlSearchParams = new URLSearchParams(params)
    return `${path}?${urlSearchParams.toString()}`

  }
  // END

  return {
    get: (route, { params, ...options }) => fetch(prepareUrl(route, params), options),
    delete: (route, { params, ...options }) => fetch(prepareUrl(route, params), {
      method: 'DELETE',
      ...options,
    }),
    post: (route, payload, config = {}) => {
      const {headers, params} = config
      return fetch(prepareUrl(route, params), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify(payload),

      })
    },
    patch: (route, payload, {headers, params} = {}) => {
      return fetch(prepareUrl(route, params), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify(payload),

      })

    },
    // BEGIN (write your solution here)

    // END
  };
};

export default fetchAdapter;
