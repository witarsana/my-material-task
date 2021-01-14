const initialState = {
    isAuthenticated: false,
    isLoading: false,
    errors: null
}

const authReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: payload,
            }
        case "SET_ERROR":
            return {
                ...state,
                errors: payload
            }
        case "SET_AUTHENTICATED":
            return {
                ...state,
                isAuthenticated: payload
            }
        default:
            return state;
    }
}

export default authReducer;