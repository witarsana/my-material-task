import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;