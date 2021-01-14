export const getList = () => {
    return {
        type: "GET_LIST"
    }
}

export const editTodo = (id, data) => {
    return {
        type: 'EDIT',
        payload: {
            id, data
        }
    }
}

export const addTodo = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}