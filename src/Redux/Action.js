import { REQUEST_SERVER_DATA, REQUEST_SERVER_DATA_success } from './ActionTypes'


export const requstServerDataGen = (data) =>({
    type: REQUEST_SERVER_DATA,
    payload: data
})

export const requestServerDataGenSuccess = (data) =>({
    type: REQUEST_SERVER_DATA_success,
    payload: data
})