import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";

// import the reducer functions
import reducers from './Reducers';

// import the redux saga functions
import Saga from "./Saga";

// import middleware functions
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(Saga);
    return store;
}
