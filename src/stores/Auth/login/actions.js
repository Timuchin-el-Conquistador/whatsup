import {LOGINUSER, LOGINUSERSUCCESS, LOGINUSERERROR} from './actionTypes'

export const LoginUser = (user) => {
    return {
        type: LOGINUSER,
        payload: user
    }
}


export const LoginUserSuccess = (user) => {
    return {
        type:LOGINUSERSUCCESS,
        payload: user
    }
}

export const LoginUserError = (err) => {
   return{
       type: LOGINUSERERROR,
       payload: err
   }
}