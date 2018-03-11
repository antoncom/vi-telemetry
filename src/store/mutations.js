import * as types from './mutation-types';

export default {
    [types.LOGIN]: (state, response) => {
        //state.token = response.data.Authorization
        state.token = response.data.token
        state.role = response.data.role
        state.accountInfo = response.data.accountInfo
        state.authenticated = true

        sessionStorage.setItem('token', state.token)
      //  sessionStorage.setItem('accountInfo', state.accountInfo)
        sessionStorage.setItem('role', state.role)
    },

    [types.VALIDATE_ERROR]: (state, errors) => {
        state.validate_errors = errors
    },

    [types.LOGOUT]: (state) => {
        console.log("LOGOUT")
        state.name = ''
        state.token = ''
        state.role = 0
      //  state.accountInfo = {}
        state.authenticated = false

        sessionStorage.clear()
    }
}
