import {LOGINUSER, LOGINUSERSUCCESS, LOGINUSERERROR} from './actionTypes'

const initialState = {user: null, loading:false, error:null}


const Loginreducer = (state = initialState, action) => {
    
     switch(action.type){
         case LOGINUSER:
              
              state = {
                 ...state,
                 loading:true
             }
            break;
         case LOGINUSERSUCCESS:
             state = {
                 ...state,
                 loading:false,
                 user:action.payload
             }
             break;
         case LOGINUSERERROR:
             state = {
                 ...state,
                 loading:false,
                 error: action.payload
             }
             break;
          default:
              state = {...state}
              break;
     }
     return state
}


export default Loginreducer