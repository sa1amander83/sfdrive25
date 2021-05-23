import { hot } from 'react-hot-loader/root';
import  React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './js/script.js';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import EntryForm from './components/entryform/EntryForm';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Register from './components/register/Register';
import Main from './components/main/Main'

// export default class App  extends Component  {
       
//   render () {

  const App = () => {
    
    return (
        <BrowserRouter>
        <div>
            <Header/>
              <EntryForm/>
              <Route path ='/main' component ={Main}/>
              <Route path ='/about' component= {About}/>
              <Route path = '/faq' component = {Faq}/> 
             <Route path = '/register' component = {Register}/>
            <Footer/>
         </div>
         </BrowserRouter>
        );
          }
  // } 
  export default  hot(App);