import React, { Component } from "react";

import {NavLink} from 'react-router-dom';
import "./header.scss";
import "./mobile-menu.scss"


export default class Header  extends Component {
       
    render () {
        return (
    <header className="main-header">
    <div className="main-navigation-wrapper">
        <div className="container-header">
             <div className="main-header-logo">
                   <p> <NavLink to="main" className="main-link"><img src="img/Logo.svg" alt=" логотип сайта" className="img-logo"/></NavLink>
                   </p>
             </div>

            <div className="menu-navigation">
                <nav className="main-navigation">
                        <ul className="site-navigation">
                            <li><NavLink to="/about" className="is-active" >О нас</NavLink></li>
                            <li><NavLink to="/register">Условия</NavLink></li>
                            <li><NavLink to="/faq">Частые вопросы</NavLink> </li>
                         </ul>
                </nav>

                <div className="user-navigation-wrapper" >
                    <ul className="user-navigation">
                        <li>
                            <NavLink to   ="/LoginForm"className="login-link" >Войти </NavLink>
                        </li>
                    </ul>
                </div>
              </div>
           <div className="menu__button icon-menu is-mobile"></div>
        </div>

        <div className="menu__mobile is-mobile is-animated">

            <div className="menu__mobile-wrapper">
                <a href="#"  className="menu__mobile-link enter__autorize  is-animated">Войти</a>
                     <a href="index.html" className="menu__mobile-link is-animated">О нас</a>
                    <a href="#"  className="menu__mobile-link is-animated">Условия</a>
                    <a href="faq.html" className="menu__mobile-link is-animated">Частые вопросы</a>

                <div className="menu__mobile-close icon-close is-mobile"></div>
            </div>

        </div>

    </div>

</header>
        )
    }
}