const axios = require("axios")

module.exports = {

    get(url, headers) {
        return axios.get(url, { headers }).then(({ data }) => data)
    },

    post(url, data, headers) {
        return axios.post(url, data, { headers }).then(({ data }) => data)
    }
}