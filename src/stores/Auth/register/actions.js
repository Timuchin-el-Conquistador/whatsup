import {SIGNUPUSER, SIGNUPUSERSUCCESS, SIGNUPUSERERROR} from './actionTypes'


export const SignupUser = (user) => {
    return {
        type: SIGNUPUSER,
        payload: user
    }
}


export const SignupUserSuccess = (user) => {
    console.log(user)
    return {
        type:SIGNUPUSERSUCCESS,
        payload: user
    }
}

export const SignupUserError = (err) => {
   return{
       type: SIGNUPUSERERROR,
       payload: err
   }
}