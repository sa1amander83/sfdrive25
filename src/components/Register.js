import React, {useEffect, useState } from "react";
import './styles/register.scss';
import axios from 'axios';



const Register = () => {
const [users, setUsers]= useState([]);

useEffect( ()=> {
    fetch ('/users')
    .then (res =>res.json())
    .then (json => setUsers(json));
}, [])


const [name, setName] = useState('');
const [birth, setBirth] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [serialPass, setSerialPass] = useState('');
const [passIssueDate, setPassIssueDate] = useState('');
const [passIssuedBy, setPassIssuedBy] = useState('');
const [passIssuedByCode, setPassIssuedByCode] = useState('');
const [permissSerial, setPermisSerial] = useState('');
const [permissDate, setPermissDate] = useState('');


function onNameChange(e) {
    setName(e.target.value)
}

function onBirthChange(e) {
    setBirth(e.target.value)
}

function onEmailChange(e) {
    setEmail(e.target.value)
}

function onPhoneChange(e) {
    setPhone(e.target.value)
}

function onSerialPassChange(e) {
    setSerialPass(e.target.value)
}

function onPassIssueDateChange(e) {
    setPassIssueDate(e.target.value)
}

function onPassIssuedByChange(e) {
    setPassIssuedBy(e.target.value)
}

function onPassIssuedByCodeChange(e) {
    setPassIssuedByCode(e.target.value)
}

function onPermissSerialChange(e) {
    setPermisSerial(e.target.value)
}

function onPermissDateChange(e) {
    setPermissDate(e.target.value)
}


function onSubmit(e) {
    e.preventDefault();
   axios.post('/users', {name})
    .then (res => res.data)
    .then (data => setUsers(data))
}

        return (<div className="register-page">
<div className= "step-above">   Шаг 1 из 3</div>
<h1 className="tell-about">Расскажите о себе</h1>
<div className = "info-wrapper">
<section className="information-about-user ">

<h2 className= "information-about-you"> Информация о вас </h2>
<form action= "" className= "form-info">

<label htmlFor= "info-initials" >ФИО</label>
<input id ="info-initials" value ={name} onChange={onNameChange} className="long-input"type="text"placeholder="ФИО полностью"/>

<label htmlFor= "date-of-birthday" > Дата рождения</label>
<input id ="date-of-birthday" value= {birth}   onChange={onBirthChange} className="short-input  data" type="date" />

<label htmlFor= "email" >Электронная почта</label>
<input id ="email" value ={email}className="long-input"type="mail" onChange={onEmailChange}placeholder="mail@example.com"/>

<label htmlFor= "phone-number" > Телефон</label>
<input id ="phone-number"value ={phone}className="short-input" onChange={onPhoneChange} type="phone"placeholder="+7 900 000-00-00"/>

</form>

</section>


<section className="user-passport container">
<h2 className= "information-about-you" >Паспорт </h2>
<form action= "" className="form-passport">

<label htmlFor= "passport-serial" required >Серия и номер</label>
<input id ="passport-serial" value ={serialPass} className="short-input" onChange={onSerialPassChange}type=""placeholder="0000 000000"/>

<label htmlFor= "date-of-getting" > Дата выдачи</label>
<input id ="date-of-getting" value ={passIssueDate}className="short-input data " onChange={onPassIssueDateChange}type="date"/>

<label htmlFor= "response-center" >Кем выдан</label>
<input id ="response-center" value ={passIssuedBy}className="long-input" onChange={onPassIssuedByChange} type="text"placeholder="Название органа выдавшего паспорт"/>


<label htmlFor= "center-code" > Код подразделения</label>
<input id ="center-code" value ={passIssuedByCode} className="short-input" onChange={onPassIssuedByCodeChange}type="" placeholder="000-000"/>

</form>

</section>

<section className="permiss-de-condure container">
<h2 className= "information-about-you"> Водительское удостоверение </h2>
<form action= "" className="form-permiss">

<label htmlFor= "permiss-serial" > Серия и номер</label>
<input id ="permiss-serial" value ={permissSerial} className="short-input"type="text"onChange={onPermissSerialChange}placeholder="0000 000000"/>

<label htmlFor= "date-of-permiss-getting" > Дата выдачи</label>
<input id ="date-of-permiss-getting"value ={permissDate} className="short-input data"type="date"onChange={onPermissDateChange} />

</form>

</section>

<div className= "rectangle-info"/>
<div>
<button type="submit"  onClick ={onSubmit} className="continiue-button" > Продолжить
</button>

</div>
</div>
</div>
)}

 export default Register;