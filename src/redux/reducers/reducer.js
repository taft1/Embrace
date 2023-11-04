const initialState = {
    user: {
      // Information about the user
        id: null,
        username: '',
        email: '',
        isLoggedIn: false,
    },
    todos: {
      // An array to hold todo items
        list: [],
    },
    // Other slices of your state
    };

    const rootReducer = (state = initialState, action) => {
    // Implement your reducers here
    return state;
    };

export default rootReducer;