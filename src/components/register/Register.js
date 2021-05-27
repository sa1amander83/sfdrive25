import React from "react";
import './register.scss';
import store from "../../../store";
import UserRegPage from "./UserRegPage"
import { Provider } from "react-redux";
import showResults from "./showResults";

const Register =() => {
  return (
    <Provider store={store}>
      <div className= "register-page">
      <div className= "step-above"> Шаг 1 из 3</div>
      <h1  className= "tell-about">Расскажите о себе</h1>
      <div className= "info-wrapper">
      <UserRegPage onSubmit={showResults} />
      </div>
      </div>
   
    </Provider>)
}
  export default Register