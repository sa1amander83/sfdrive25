import  React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './js/script';

// import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import  rootReducer from './redux/reducers/regReducer';
import store from "../store";

const app = (
    <Provider store = {store}>
    <App/>
    </Provider>
)

ReactDOM.render (app, document.getElementById('root'));

