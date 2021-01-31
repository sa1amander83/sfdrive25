import  React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import EntryForm from './components/EntryForm';

ReactDOM.render (<Header/>, document.getElementById('header'));
ReactDOM.render (<Footer/>, document.getElementById('footer'));
ReactDOM.render (<EntryForm/>, document.getElementById('entryForm'));
import './js/script.js';