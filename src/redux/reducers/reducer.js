const initialState = {
  authToken: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, authToken: action.payload }
    default:
      return state
  }
}

export default rootReducer
