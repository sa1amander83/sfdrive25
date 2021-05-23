import React, {useState } from "react";
import PropTypes from 'prop-types'

function Password(props) {

    const userRegData ={

   
        password: password,
        repatPassword: repeatPassword
    };
       
      const [password, setPassword] = useState('');
      const [repeatPassword, setRepeatPassword] = useState('');

      const onPasswrodChange=(e)=> {
        setPassword(e.target.value) 
      }
    
      const onRepeatPassword=(e)=> {
        setRepeatPassword(e.target.value) 
      };
    return (
        <div>
                        <section className="password container">
                      <h2 className="information-about-you">Пароль
                      </h2>
                      <div className="dataPass">
                          <label htmlFor="inputPassword"> Придумайте пароль</label>
                          <input
                              id="inputPassword"
                              className="short-input"
                              type="password"
                              onChange={onPasswrodChange}
                              value= {password}
                              autoComplete="new-password"
                              placeholder="0000 000000"
                          />

                          <label htmlFor="repeatPassword"> Повторите пароль</label>
                          <input
                              id="repeatPassword"
                              className="short-input data"
                              type="password"
                              autoComplete="new-password"
                              onChange={onRepeatPassword}
                              value= {repeatPassword}
                          />

                      </div>

                  </section>
        </div>
    )
    
}

Password.propTypes = {

}

export default Password

