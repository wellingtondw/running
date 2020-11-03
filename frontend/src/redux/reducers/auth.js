import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSignIn: false,
    user: {},
    error: false,
    errorMessage: ''
}

export const signInRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSignIn: true,
        error: false,
        errorMessage: ''
    }
} 

export const signInSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSignIn: false,
        user: action.user,
        isAuth: true
    }
} 

export const signInFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSignIn: false,
        error: true,
        errorMessage: action.error
    }
} 

export const HANDLERS = {
    [Types.SIGN_IN_REQUEST]: signInRequest,
    [Types.SIGN_IN_SUCCESS]: signInSuccess,
    [Types.SIGN_IN_FAILURE]: signInFailure
}


export default createReducer(INITIAL_STATE, HANDLERS)