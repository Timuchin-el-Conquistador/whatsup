import { combineReducers } from "redux";

import Loginreducer from './Auth/login/reducer'
import SignupReducer from "./Auth/register/reducer";


const rootReducer = combineReducers({
    Loginreducer,
    SignupReducer
})

export default rootReducer