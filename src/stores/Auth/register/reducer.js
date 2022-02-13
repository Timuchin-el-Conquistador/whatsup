import {SIGNUPUSER, SIGNUPUSERSUCCESS, SIGNUPUSERERROR} from './actionTypes'

const initialState = {user: null, loading:false, error:null}


const SignupReducer = (state = initialState, action) => {
    
     switch(action.type){
         case SIGNUPUSER:
              
              state = {
                 ...state,
                 loading:true
             }
            break;
         case SIGNUPUSERSUCCESS:
             state = {
                 ...state,
                 loading:false,
                 user:action.payload
             }
             break;
         case SIGNUPUSERERROR:
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


export default SignupReducer