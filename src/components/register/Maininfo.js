import React, {useState } from "react";
import PropTypes from 'prop-types'


// function Maininfo({name, setName},{birth, setBirth},{email, setEmail},{phone, setPhone}) {
function Maininfo({name, setName,birth, setBirth,email, setEmail, phone, setPhone}) {

  const userRegData ={
    name: name,
    birth: birth,
    email: email,
    phone: phone}
    

  const onNameChange=(e)=> {
    setName(e.target.value) }

const onBirthChange=(e)=> {
setBirth(e.target.value) 
}

const onEmailChange=(e)=> {
setEmail(e.target.value) 
}
const onPhoneChange=(e)=> {
setPhone(e.target.value) 
}
    return (
        <div>
            <section className="information-about-user   form-info ">
            <h2 className="information-about-you"> Информация о вас </h2>
          <div className="data">
              <label htmlFor="info-initials">ФИО</label>
              <input
                id="info-initials"

                value= {name}
                onChange={onNameChange}
                className="long-input"
                type="text"
                placeholder="ФИО полностью"
              />

              <label htmlFor="date-of-birthday"> Дата рождения</label>
              <input
                id="date-of-birthday"

                value= {birth}
                onChange={onBirthChange}
                className="short-input  data"
                type="date"
              />

              <label htmlFor="email">Электронная почта</label>
              <input
                id="email"
                className="long-input"
                type="email"
                value= {email}
                onChange={onEmailChange}
                placeholder="mail@example.com"
              />

              <label htmlFor="phone-number"> Телефон</label>
              <input
                id="phone-number"
                className="short-input"
                value= {phone}
                onChange={onPhoneChange}

                type="phone"
                placeholder="+7 900 000-00-00"
              />
        </div>
          </section>
        </div>
    )
}

Maininfo.propTypes = {

}

export default Maininfo

