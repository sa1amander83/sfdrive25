import { hot } from 'react-hot-loader/root';
import  React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './js/script.js';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import LoginForm from './components/Login/LoginForm';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Main from './components/main/Main'
import Register from './components/register/Register'
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./components/login/showResults";


  let App = () => {
        return (
          <Provider store={store}>
        <BrowserRouter>
        <div>
            <Header/>
              <LoginForm onSubmit= {showResults}/>
              <Route path ='/main' component ={Main}/>
              <Route path ='/about' component= {About}/>
              <Route path = '/faq' component = {Faq}/> 
              <Route path = '/register' component = {Register}/>
            <Footer/>
         </div>
         </BrowserRouter>
         </Provider>
        );
          }

  export default  hot(App);