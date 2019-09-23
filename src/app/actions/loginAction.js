import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginAction = (credentials, history) => dispatch => {

    dispatch({ type: LOGIN_START })

    axios
        //post with login backend
        .post()
        .then(res => {
            console.log(res)

            //dispatch the login success with an action.payload 
        })
}