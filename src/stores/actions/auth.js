export const login = (data) => {
    return {
        type: "LOGIN",
        payload: data
    }
}

export const signUp = (data) => {
    return {
        type: "REGISTER",
        payload: data
    }
}