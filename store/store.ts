import { createStore, applyMiddleware, AnyAction, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from 'store/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk as ThunkMiddleware<AppState, AnyAction>),
	)
);

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
