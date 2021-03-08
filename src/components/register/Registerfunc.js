import React, {useEffect, useState } from "react";
import './register.scss';
import axios from 'axios';


export default function Registerfunc (props)  {
 

  const [name, setName] = useState("");
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serialPass, setSerialPass] = useState('');
  const [passIssueDate, setPassIssueDate] = useState('');
  const [passIssuedBy, setPassIssuedBy] = useState('');
  const [passIssuedByCode, setPassIssuedByCode] = useState('');
  const [permissSerial, setPermisSerial] = useState('');
  const [permissDate, setPermissDate] = useState('');

  const userRegData ={
    name: name,
    birth: birth,
    email: email,
    phone: phone,
    serialPass: serialPass,
    passIssueDate: passIssueDate,
    passIssuedBy: passIssuedBy,
    passIssuedByCode: passIssuedByCode,
    permissSerial: permissSerial,
    permissDate: permissDate
};

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

      const onSerialPassChange=(e)=> {
        setSerialPass(e.target.value) 
      }

      const onPassIssueDateChange=(e)=> {
        setPassIssueDate(e.target.value) 
      }

      const  onPassIssuedByChange=(e)=> {
        setPassIssuedBy(e.target.value) 
      }

      const onPassIssuedByCodeChange=(e)=> {
        setPassIssuedByCode(e.target.value) 
      }

      const  onPermissSerialChange=(e)=> {
        setPermisSerial(e.target.value) 
      }

      const onPermissDateChange=(e)=> {
        setPermissDate(e.target.value) 
      };

  // const [users, setUsers]= useState([]);

  // useEffect(()=> {
  //     fetch ('/users')
  //     .then (res =>res.json())
  //     .then (json => setUsers(json));
  // }, []);

  function onSubmit(e) {
      e.preventDefault();
      // props.sendData(userRegData);
      // console.log(userRegData)

     axios.post('/register', {userRegData})
      .then (res => res.data)
      .then (data => setUsers(data))
  }

 
  // useEffect (()=>{},[]);
  // const onSubmit = (e)=> {
  //     e.preventDefault();
  //   let data = useState;
     
  //      console.log(useState)
  //      return data;
  //      }



  // render() {
  
    return (
      
      <div className="register-page">
        <div className="step-above"> Шаг 1 из 3</div>
        <h1 className="tell-about">Расскажите о себе</h1>

        <div className="info-wrapper">
              <form onSubmit={onSubmit} className="form-info">
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

          <section className="user-passport  form-passport container">
            <h2 className="information-about-you">Паспорт </h2>
          <div className="data">
              <label htmlFor="passport-serial" required>
                Серия и номер
              </label>
              <input
                id="passport-serial"
                className="short-input"
                onChange={onSerialPassChange}
                value= {serialPass}
                type=""
                placeholder="0000 000000"
              />

              <label htmlFor="date-of-getting"> Дата выдачи</label>
              <input
                id="date-of-getting"
                className="short-input data "
                onChange={onPassIssueDateChange}
                value= {passIssueDate}
                type="date"
              />

              <label htmlFor="response-center">Кем выдан</label>
              <input
                id="response-center"
                className="long-input"
                onChange={onPassIssuedByChange}
                value= {passIssuedBy}
                type="text"
                placeholder="Название органа выдавшего паспорт"
              />

              <label htmlFor="center-code"> Код подразделения</label>
              <input
                id="center-code"
                className="short-input"
                onChange={onPassIssuedByCodeChange}
                value= {passIssuedByCode}
                type=""
                placeholder="000-000"
              />
     </div>
          </section>

          <section className="permiss-de-condure form-permiss container">
            <h2 className="information-about-you">Водительское удостоверение
            </h2>
       <div className="dataPass">
              <label htmlFor="permiss-serial"> Серия и номер</label>
              <input
                id="permiss-serial"
                className="short-input"
                type="text"
                onChange={onPermissSerialChange}
                value= {permissSerial}
                placeholder="0000 000000"
              />

              <label htmlFor="date-of-permiss-getting"> Дата выдачи</label>
              <input
                id="date-of-permiss-getting"
                className="short-input data"
                type="date"
                onChange={onPermissDateChange}
                value= {permissDate}
              />

                                      </div>
<div className="rectangle-info" />

            <button type="submit"  className="continiue-button"> Продолжить</button>
          </section>

    </form>
        </div>
        </div>
    );
  }


