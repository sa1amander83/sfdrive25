import React, {useEffect, Component } from "react";
import './register.scss';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birth: "",
      email: "",
      phone: "",
      serialpass: "",
      passdate: "",
      passby: "",
      passcode: "",
      permissserial: "",
      permisdate: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onBirthChange = this.onBirthChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onSerialPassChange = this.onSerialPassChange.bind(this);
    this.onPassIssueDateChange = this.onPassIssueDateChange.bind(this);
    this.onPassIssuedByChange = this.onPassIssuedByChange.bind(this);
    this.onPassIssuedByCodeChange = this.onPassIssuedByCodeChange.bind(this);
    this.onPermissSerialChange = this.onPermissSerialChange.bind(this);
    this.onPermissDateChange = this.onPermissDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [serialPass, setSerialPass] = useState('');
  // const [passIssueDate, setPassIssueDate] = useState('');
  // const [passIssuedBy, setPassIssuedBy] = useState('');
  // const [passIssuedByCode, setPassIssuedByCode] = useState('');
  // const [permissSerial, setPermisSerial] = useState('');
  // const [permissDate, setPermissDate] = useState('');

//    sendForm () {
//     // handleErrors();
//     // props.registrationSendData(getData())
//     console.log(this.state)
// }

  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onBirthChange(e) {
    this.setState({
      birth: e.target.value,
    });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onPhoneChange(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onSerialPassChange(e) {
    this.setState({
      serialpass: e.target.value,
    });
  }

  onPassIssueDateChange(e) {
    this.setState({
      passdate: e.target.value,
    });
  }

  onPassIssuedByChange(e) {
    this.setState({
      passby: e.target.value,
    });
  }

  onPassIssuedByCodeChange(e) {
    this.setState({
      passcode: e.target.value,
    });
  }

  onPermissSerialChange(e) {
    this.setState({
      permissserial: e.target.value,
    });
  }

  onPermissDateChange(e) {
    this.setState({
      permisdate: e.target.value,
    });
  };

  // const [users, setUsers]= useState([]);

  // useEffect(()=> {
  //     fetch ('/register')
  //     .then (res =>res.json())
  //     .then (json => setUsers(json));
  // }, []);

  // function onSubmit(e) {
  //     e.preventDefault();
  //    axios.post('/register', {name})
  //     .then (res => res.data)
  //     .then (data => setUsers(data))
  // }

 

  onSubmit(e) {
    let data = this.state;
       e.preventDefault();
       console.log(data)
       return data;
       }



  render() {
  
    return (
      <div className="register-page">
        <div className="step-above"> Шаг 1 из 3</div>
        <h1 className="tell-about">Расскажите о себе</h1>

        <div className="info-wrapper">
              <form onSubmit={this.onSubmit} className="form-info">
          <section className="information-about-user   form-info ">
            <h2 className="information-about-you"> Информация о вас </h2>
          <div className="data">
              <label htmlFor="info-initials">ФИО</label>
              <input
                id="info-initials"
                onChange={this.onNameChange}
                value= {this.state.name}
                className="long-input"
                type="text"
                placeholder="ФИО полностью"
              />

              <label htmlFor="date-of-birthday"> Дата рождения</label>
              <input
                id="date-of-birthday"
                onChange={this.onBirthChange}
                value= {this.state.birth}
                className="short-input  data"
                type="date"
              />

              <label htmlFor="email">Электронная почта</label>
              <input
                id="email"
                className="long-input"
                type="email"
                onChange={this.onEmailChange}
                value= {this.state.email}
                placeholder="mail@example.com"
              />

              <label htmlFor="phone-number"> Телефон</label>
              <input
                id="phone-number"
                className="short-input"
                onChange={this.onPhoneChange}
                value= {this.state.phone}
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
                onChange={this.onSerialPassChange}
                value= {this.state.serialpass}
                type=""
                placeholder="0000 000000"
              />

              <label htmlFor="date-of-getting"> Дата выдачи</label>
              <input
                id="date-of-getting"
                className="short-input data "
                onChange={this.onPassIssueDateChange}
                value= {this.state.passdate}
                type="date"
              />

              <label htmlFor="response-center">Кем выдан</label>
              <input
                id="response-center"
                className="long-input"
                onChange={this.onPassIssuedByChange}
                value= {this.state.passby}
                type="text"
                placeholder="Название органа выдавшего паспорт"
              />

              <label htmlFor="center-code"> Код подразделения</label>
              <input
                id="center-code"
                className="short-input"
                onChange={this.onPassIssuedByCodeChange}
                value= {this.state.passcode}
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
                onChange={this.onPermissSerialChange}
                value= {this.state.permissserial}
                placeholder="0000 000000"
              />

              <label htmlFor="date-of-permiss-getting"> Дата выдачи</label>
              <input
                id="date-of-permiss-getting"
                className="short-input data"
                type="date"
                onChange={this.onPermissDateChange}
                value= {this.state.permisdate}
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
}

