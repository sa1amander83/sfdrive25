import React from "react";
import './register.scss';
import store from "../../store";
import UserRegPage from "./UserRegPage"
import { Provider } from "react-redux";
import regStep2 from "./regStep2";

const Register =() => {
  return (
    <Provider store={store}>
      <div className= "register-page">
      <div className= "step-above"> Шаг 1 из 3</div>
      <h1  className= "tell-about">Расскажите о себе</h1>
      <div className= "info-wrapper">
      <UserRegPage onSubmit={regStep2} />
      </div>
      </div>
   
    </Provider>)
}
  export default Register