import React from "react";
import {NavLink} from 'react-router-dom';
import "./form.scss";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    const {handleSubmit} = props
  
    const loginData = (props) =>{ 
      const onSubmit = (data) => {
        console.log(data);
      }
    }

          return (
 <div className="modal__form is-animated">
    <div className="modal__form-wrapper is-animated">
            <form onSubmit={handleSubmit} className="modal__form-form">
  
           <div className="modal__form-close icon-close"></div>
            <img src="img/sign_in.svg" alt="" className="sign__in__img"/>
                   <h3 className="autorize">Авторизация</h3>
            <Field
             id="emailData"
             name="email"
             component="input"
             className="long-input"
             type="email"
             placeholder="mail@example.com"
             />


              <Field
              id="inputPassword"
              className="long-input"
              type="password"
              component="input"
              name="password"
          
              placeholder="****************"
            />
                    <NavLink to ="#"  className="forgot__password">Забыли?</NavLink>
              <button className="modal__form-send">Войти</button>
            <div className="modal__form_rectangle"/>
            <NavLink to ="/Register" className="register-link">Зарегистрироваться</NavLink>
    
    </form>
          </div>
    </div>

        )
    }

    export default reduxForm({form: 'dataEntry'})(LoginForm)