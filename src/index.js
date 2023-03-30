import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

//Reducers:
const cart= (state = [], action)=>{
    if(action.type=== 'SET_PIZZA'){
        return action.payload
    }
    return state
}

//This is our Redux store.
const storeInstance = createStore(
    combineReducers({
        cart

    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance} >
        <App />
        </Provider>
    </React.StrictMode>
);
