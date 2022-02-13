import {all} from 'redux-saga/effects'

import LoginSaga from './Auth/login/saga'
import SignupSaga from './Auth/register/saga'


export default  function* rootSaga() {
    
     yield all([
        LoginSaga(),
        SignupSaga()
     ])
}

