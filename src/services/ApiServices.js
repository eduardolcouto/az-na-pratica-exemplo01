import axios from 'axios'

const api = axios.create({
   // baseURL:'http://web.lipogramsw.com:8080/lpgdummy/v1'
   baseURL: 'https://swapi.dev/api/'
})
export const ApiServices = {
    get(endpoint){
        return api.get(endpoint)
    }/*,
    post(endpoint,data){
        return api.post(endpoint,data)
    },
    update(endpoint,data,id){
        return api.put(`${endpoint}/${id}`,data)
    },
    delete(endpoint, id){
        return api.delete(`${endpoint}/${id}`)
    }*/
}