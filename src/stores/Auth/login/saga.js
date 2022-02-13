import {takeEvery, all,call, fork} from 'redux-saga/effects'

import {LOGINUSER, LOGINUSERSUCCESS, LOGINUSERERROR} from './actionTypes'
import { LoginUserSuccess, LoginUserError } from "./actions";
import { Login_User } from "../../../helper/fake_backend";


function* Log_in({payload}) {
      console.log('login')
      const response = yield call(Login_User, 'http://localhost:4000/users/login', payload)

}

export function* watchLoginUser(){
   yield takeEvery(LOGINUSER, Log_in)
}

function* LoginSaga(){
    yield all([fork(watchLoginUser)])
}

export default LoginSaga

