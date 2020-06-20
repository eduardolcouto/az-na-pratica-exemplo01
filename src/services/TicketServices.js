import {ApiServices} from './ApiServices'

const endpoint='tickets/getcalls'

export const TicketServices = {
    getcalls(){
        return ApiServices.get(endpoint)
    },
    getPeople(people){
        return ApiServices.get('/people/'+people)
    }
}