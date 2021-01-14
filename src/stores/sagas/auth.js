import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const baseUrl = `https://my-udemy-api.herokuapp.com/api/v1/user`;

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

function setAuth(data) {
    return {
        type: 'SET_AUTHENTICATED',
        payload: data
    }
}

function* login(actions) {
    const { payload } = actions;
    yield put(setLoading(true));
    try {
        const res = yield axios.post(`${baseUrl}/signin`, payload, { headers: { "Content-Type": "application/json" } })
        localStorage.setItem('token', res.data.token);
        yield put(setAuth(true));
    } catch (err) {
        const { errors } = err.response.data;
        yield put(setError(errors));
    } finally {
        yield put(setLoading(false));
    }
}

function* register(actions) {
    const { payload } = actions;
    yield put(setLoading(true));
    try {
        const res = yield axios.post(
            `${baseUrl}/signup`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                    "token": `${localStorage.getItem('token')}`
                }
            })
        localStorage.setItem('token', res.data.token);
        yield put(setAuth(true));
    } catch (err) {
        const { errors } = err.response.data;
        yield put(setError(errors));
    } finally {
        yield put(setLoading(false));
    }
}

export function* watchLogin() {
    yield takeEvery("LOGIN", login);
}

export function* watchRegister() {
    yield takeEvery("REGISTER", register);
}
