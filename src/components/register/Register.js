import React, {useState } from "react";
import './register.scss';
// import axios from 'axios';
import Password from './Password'
import Passport from './Passport'
import Maininfo from './Maininfo'
import Permiss from './Permiss'

export default function Register (props)  {
  

      // const onNameChange=(e)=> {
      //       setName(e.target.value) 
      //   ;
      // }

      // const onBirthChange=(e)=> {
      //   setBirth(e.target.value) 
      // }

      // const onEmailChange=(e)=> {
      //   setEmail(e.target.value) 
      // }
      // const onPhoneChange=(e)=> {
      //   setPhone(e.target.value) 
      // }

      // const onSerialPassChange=(e)=> {
      //   setSerialPass(e.target.value) 
      // }

      // const onPassIssueDateChange=(e)=> {
      //   setPassIssueDate(e.target.value) 
      // }

      // const  onPassIssuedByChange=(e)=> {
      //   setPassIssuedBy(e.target.value) 
      // }

      // const onPassIssuedByCodeChange=(e)=> {
      //   setPassIssuedByCode(e.target.value) 
      // }

      // const  onPermissSerialChange=(e)=> {
      //   setPermisSerial(e.target.value) 
      // }

      // const onPermissDateChange=(e)=> {
      //   setPermissDate(e.target.value) 
      // };


  function onSubmit(e) {
      e.preventDefault();
console.log ('hello')

    //  axios.post('/register', {userRegData})
    //   .then (res => res.data)
    //   .then (data => setUsers(data))
  }




  // render() {
  
    return (
      <div>
    <div className="register-page">
              <div className="step-above"> Шаг 1 из 3</div>
          <h1 className="tell-about">Расскажите о себе</h1>

          <div className="info-wrapper">
            <form className="form-info">

              <Maininfo/>
              <Passport/>
              <Permiss/>
              <Password/>

            <div className="rectangle-info" />  

          <button onSubmit={onSubmit}   className="continiueButton"> Продолжить</button>


          </form>
        </div>
    </div>
    </div>
    );
  }


