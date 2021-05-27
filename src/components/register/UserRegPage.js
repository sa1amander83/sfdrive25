import React from "react";

import { Field, reduxForm } from "redux-form";

const UserRegData = (props) => {
  const {handleSubmit} = props

  const formData = (props) =>{ 
    const onSubmit = (data) => {
      console.log(data);
    }
  }
  return (



    <form onSubmit={handleSubmit}>
      <div>
        <section className="information-about-user   form-info ">
          <h2 className="information-about-you"> Информация о вас </h2>
          <div className="data">
            <label htmlFor="info-initials">ФИО</label>

            <Field 
              id="info-initials"
              name="userName"
              className="long-input"
              type="text"
              placeholder="ФИО полностью"
              component="input"
            />

            <label htmlFor="date-of-birthday"> Дата рождения</label>
            <Field
              id="date-of-birthday"
              name="birth"
              className="short-input  data"
              type="date"
              component="input"
            />

            <label htmlFor="emailData">Электронная почта</label>
            <Field
              id="emailData"
              name="email"
              component="input"
              className="long-input"
              type="email"
              placeholder="mail@example.com"
            />

            <label htmlFor="phone-number"> Телефон</label>
            <Field
              id="phone-number"
              className="short-input"
              name="phone"
              component="input"
              type="phone"
              placeholder="+7 900 000-00-00"
            />
          </div>
        </section>

        <section className="user-passport  form-passport container">
          <h2 className="information-about-you">Паспорт </h2>
          <div className="data">
            <label htmlFor="passport-serial">
              Серия и номер
            </label>
            <Field
              id="passport-serial"
              className="short-input"
              component="input"
              name="serialPass"
              type=""
              placeholder="0000 000000"
            />

            <label htmlFor="date-of-getting"> Дата выдачи</label>
            <Field
              id="date-of-getting"
              className="short-input data "
              component="input"
              name= "passIssueDate"
              type="date"
            />

            <label htmlFor="response-center">Кем выдан</label>
            <Field
              id="response-center"
              className="long-input"
              component="input"
              name="passIssuedBy"
              type="text"
              placeholder="Название органа выдавшего паспорт"
            />

            <label htmlFor="center-code"> Код подразделения</label>
            <Field
              id="center-code"
              className="short-input"
              component="input"
              name= "passIssuedByCode"
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
              <Field
                id="permiss-serial"
                className="short-input"
                type="text"
                component="input"
                name= "permissSerial"
                placeholder="0000 000000"
                autoComplete="username"
              />

              <label htmlFor="date-of-permiss-getting"> Дата выдачи</label>
              <Field
                id="date-of-permiss-getting"
                className="short-input data"
                type="date"
                component="input"
                name= "permissDate"
              />
           </div>
          </section>

        <section className="password container">
          <h2 className="information-about-you">Пароль</h2>
          <div className="dataPass">
            <label htmlFor="inputPassword"> Придумайте пароль</label>
            <Field
              id="inputPassword"
              className="short-input"
              type="password"
              component="input"
              name="password"
          
              placeholder="****************"
            />

            <label htmlFor="repeatPassword"> Повторите пароль</label>
            <Field
              id="repeatPassword"
              className="short-input data"
              type="password"
             component="input"
              name="repeatPassword"
            />
          </div>
        </section>

      </div>
    <div className="rectangle-info" />
      <button   className="continiueButton"> Продолжить</button>
    </form>

  );
};

export default reduxForm({form: 'userData'})(UserRegData)
  