import React, {useState } from "react";
import PropTypes from 'prop-types'

function Permiss(props) {
  const userRegData ={

   
    permissSerial: permissSerial,
    permissDate: permissDate
};
   
  const [permissSerial, setPermisSerial] = useState('');
  const [permissDate, setPermissDate] = useState('');
  const  onPermissSerialChange=(e)=> {
    setPermisSerial(e.target.value) 
  }

  const onPermissDateChange=(e)=> {
    setPermissDate(e.target.value) 
  };
    return (
        <div>
            
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

          </section>
        </div>
    )
}

Permiss.propTypes = {

}

export default Permiss

