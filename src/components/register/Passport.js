import React, {useState } from "react";
import PropTypes from 'prop-types'

function Passport(props) {
  const userRegData ={

    serialPass: serialPass,
    passIssueDate: passIssueDate,
    passIssuedBy: passIssuedBy,
    passIssuedByCode: passIssuedByCode}
    
  const [serialPass, setSerialPass] = useState('');
  const [passIssueDate, setPassIssueDate] = useState('');
  const [passIssuedBy, setPassIssuedBy] = useState('');
  const [passIssuedByCode, setPassIssuedByCode] = useState('');
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
    return (
        <div>
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
        </div>
    )
}

Passport.propTypes = {

}

export default Passport

