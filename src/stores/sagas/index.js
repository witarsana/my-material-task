import { all } from 'redux-saga/effects';
import { watchLogin, watchRegister } from './auth';
import { watchGetTodos, watchEditTodos, watchAddTodos, watchDeleteTodos } from './todos';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),
        watchGetTodos(),
        watchEditTodos(),
        watchAddTodos(),
        watchDeleteTodos()
    ])
}