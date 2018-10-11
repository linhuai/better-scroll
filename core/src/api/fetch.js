import axios from 'axios'

export const fetch = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: data.url,
      method: data.method || 'GET',
      params: data.params || {}
    })
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}
