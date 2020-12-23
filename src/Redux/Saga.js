import { all, call, put, race, fork, takeEvery } from 'redux-saga/effects'
import { REQUEST_SERVER_DATA } from './ActionTypes'
import { requestServerDataGenSuccess } from './Action'

const errorObj = {
    "type" : "error",
    "id" : "error",
    "title" : "an error occured",
    "desc" : "sorry, something went wrong..."
}

///////////////////////////////////////////////////////////////////////////
// root

export default function* rootSaga() {
    yield all([
        fork(watchRequestServerDataGen)
    ])
}

///////////////////////////////////////////////////////////////////////////
// watchers

export function* watchRequestServerDataGen() {
    yield takeEvery(REQUEST_SERVER_DATA, requestServerDataGenItem)
}

///////////////////////////////////////////////////////////////////////////
// actors

function* requestServerDataGenItem({payload}) {
    
    try {
        
        const {timeout, response} = yield race({

            timeout: call(delay, 3000),

            response: call(reqestSeverDataGenRequestAsync, payload)
        })

        if(timeout){
            throw{
                data: errorObj,
                ...payload
            }
        }

        yield put(requestServerDataGenSuccess(response))
    } catch (error) {
        
        yield put(requestServerDataGenSuccess(error))
    }
}

const reqestSeverDataGenRequestAsync = async (payload) => {

    let {key , url} = payload

    return await handleRemoteFetch(url, payload)
}

function handleRemoteFetch(target_href, payload){

    return 'success'
}

function  delay(ms) {
    
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
}