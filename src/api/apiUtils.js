import axios from 'axios'
export default {
    makeGetRequest (path, callback, fail) {
        axios.get(path)
            .then(callback)
            .catch(fail)
    },
    makePostRequest (path, callback, fail, payload) {
        axios.post(path, payload)
            .then(callback)
            .catch(fail)
    },
    makeDeleteRequest (path, callback, fail, payload) {
        axios.delete(path,
            { data: payload })
            .then(callback)
            .catch(fail)
    },
    makePutRequest (path, callback, fail, payload) {
        axios.put(path, payload)
            .then(callback)
            .catch(fail)
    }
}
