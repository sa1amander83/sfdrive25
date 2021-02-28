import { hot } from 'react-hot-loader/root';
import  React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './js/script.js';
import Header from "./components/Header"
import Footer from "./components/Footer"
import EntryForm from './components/EntryForm';
import About from './components/About';
import Faq from './components/Faq';
import Register from './components/Register';


const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header/>
              <EntryForm/>
              <Route path ='/about' component= {About}/>
              <Route path = '/faq' component = {Faq}/>
              <Route path = '/register' component = {Register}/>
            <Footer/>
         </div>
         </BrowserRouter>
    )}

    export default  hot(App);