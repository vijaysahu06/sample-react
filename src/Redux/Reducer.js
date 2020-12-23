import { REQUEST_SERVER_DATA, REQUEST_SERVER_DATA_success } from './ActionTypes'

const INIT_STATE = {
    payload:''
}
export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case REQUEST_SERVER_DATA:
            
            state.payload = action.payload
            return {state}
            break;

            case REQUEST_SERVER_DATA_success:
            
            state.payload = action.payload
            return {state}
            break;
    
        default:
            return state
            break;
    }
}