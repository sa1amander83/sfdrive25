import  React from 'react';
import './js/script.js';

import Header from "./components/Header"
import Footer from "./components/Footer"
import EntryForm from './components/EntryForm';
import About from './components/About';
import Faq from './components/Faq';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header/>
              <EntryForm/>
              <Route path ='/about' component= {About}/>
              <Route path = '/faq' component = {Faq}/>
            <Footer/>
         </div>
         </BrowserRouter>
    )}

    export default App;