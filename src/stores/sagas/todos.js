import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const baseUrl = `https://my-udemy-api.herokuapp.com/api/v1/todo`;
const headerConfig = {
    "Content-Type": "application/json",
    "Authorization": `${localStorage.getItem('token')}`
}

function setLoading(data) {
    return {
        type: 'SET_LOADING',
        payload: data
    }
}

function setError(data) {
    return {
        type: 'SET_ERROR',
        payload: data
    }
}

function fetchTodos(data) {
    return {
        type: 'FETCH_TODOS',
        payload: data
    }
}

function setLoadingAdd(data) {
    return {
        type: 'SET_LOADING_ADD',
        payload: data
    }
}

function* getList() {
    yield put(setLoading(true));
    try {
        const res = yield axios.get(`${baseUrl}`, { headers: headerConfig });
        yield put(fetchTodos(res.data.todos))
    } catch (err) {
        yield put(setError(err.response.data.errors));
    } finally {
        yield put(setLoading(false));
    }
}

function* editTodo(actions) {
    const { payload } = actions;
    try {
        const res = yield axios.put(`${baseUrl}/${payload.id}`, payload.data, { headers: { ...headerConfig, token: localStorage.getItem('token') } });
        yield put({ type: "UPDATE_TODOS", payload: res.data.todo })
    } catch (err) {
        yield put(setError(err.response.data.errors));
    }

}

function* addTodo(actions) {
    const { payload } = actions;
    yield put(setLoadingAdd(true));
    try {
        const res = yield axios.post(`${baseUrl}`, payload, { headers: { ...headerConfig, token: localStorage.getItem('token') } });
        yield put({ type: "FETCH_NEW_TODO", payload: res.data.todo });
    } catch (err) {
        yield put(setError(err.response.data.errors));
    } finally {
        yield put(setLoadingAdd(false));
    }
}

function* deleteTodo(actions) {
    const { payload } = actions;
    //console.log(payload);
    yield put(setLoadingAdd(true));
    try {
        const res = yield axios.delete(`${baseUrl}/${payload}`, { headers: { ...headerConfig, token: localStorage.getItem('token') } })
        yield put({ type: "DELETE_TODO", payload: payload });
    } catch (err) {
        yield put(setError(err.response.data.errors));
    } finally {
        yield put(setLoadingAdd(false));
    }

}

export function* watchGetTodos() {
    yield takeEvery("GET_LIST", getList);
}

export function* watchEditTodos() {
    yield takeEvery("EDIT", editTodo);
}

export function* watchAddTodos() {
    yield takeEvery('ADD', addTodo);
}

export function* watchDeleteTodos() {
    yield takeEvery('DELETE', deleteTodo)
}