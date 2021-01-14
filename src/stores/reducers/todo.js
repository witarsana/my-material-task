const initialState = {
    todos: [],
    isLoading: false,
    isLoadingAdd: false,
    errors: null,
    todo: {},
}

const todoReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: payload
            }
        case "SET_LOADING_ADD":
            return {
                ...state,
                isLoadingAdd: payload
            }
        case "FETCH_TODOS":
            return {
                ...state,
                todos: payload
            }
        case "FETCH_NEW_TODO":
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case "SET_ERROR":
            return {
                ...state,
                errors: payload
            }
        case "UPDATE_TODOS":
            const idx = state.todos.findIndex(todo => todo._id === payload._id);
            const newTodos = [...state.todos];
            newTodos.splice(idx, 1, payload);
            return {
                ...state,
                todos: newTodos
            }

        case "DELETE_TODO":
            const idxDel = state.todos.findIndex(todo => todo._id === payload);
            const delTodos = [...state.todos];
            delTodos.splice(idxDel, 1);
            return {
                ...state,
                todos: delTodos
            }
        default:
            return state
    }
}

export default todoReducer;