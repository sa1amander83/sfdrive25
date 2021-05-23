import React, {useState } from "react";
import PropTypes from 'prop-types'


function Maininfo(props) {

  const userRegData ={
    name: name,
    birth: birth,
    email: email,
    phone: phone}
    
  const [name, setName] = useState("");
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const onNameChange=(e)=> {
    setName(e.target.value) 
;
}

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
                onChange={onNameChange}
                value= {name}
                className="long-input"
                type="text"
                placeholder="ФИО полностью"
              />

              <label htmlFor="date-of-birthday"> Дата рождения</label>
              <input
                id="date-of-birthday"
                onChange={onBirthChange}
                value= {birth}
                className="short-input  data"
                type="date"
              />

              <label htmlFor="email">Электронная почта</label>
              <input
                id="email"
                className="long-input"
                type="email"
                onChange={onEmailChange}
                value= {email}
                placeholder="mail@example.com"
              />

              <label htmlFor="phone-number"> Телефон</label>
              <input
                id="phone-number"
                className="short-input"
                onChange={onPhoneChange}
                value= {phone}
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

