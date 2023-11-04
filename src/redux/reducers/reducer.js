const intialState = {
  authToken: null,
  isAuthenticated: false,
}

const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
const SET_AUTH_STATUS = 'SET_AUTH_STATUS'

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload }
    case SET_AUTH_STATUS:
      return { ...state, isAuthenticated: action.payload }
    default:
      return state
  }
}

export default authReducer
