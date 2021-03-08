import React, {Component} from "react";
import './style.scss';


export default class About  extends Component  {
       
    render () {
        return (
<div>
<div  className="about-section">
<img className="main-page-logo" src="img/undraw_team_spirit_hrr4_1.svg" alt="рисунок команды"/>
    <section>
        <div className="container-about">
        <h1>О нас</h1>
        <div className="description">
                Это учебный проект, созданный с целью
                получения боевого опыта в разработке
                настоящего живого веб-приложения. Этот
                сервис имитирует работу каршеринга,<br/>
                в котором можно не только арендовать
            автомобили, но и сдавать их в аренду.</div>
</div>
</section>
</div>
<section className="section-contacts">
<div className="contacts fullscreen" >
<div className="container">
<h2 className="h2-contact"> Контакты</h2>
<div className="index-columns">

<div className="email-section">
    <div className="email"> Электронная почта</div>
      <div>
        <a className="email-block" href="mailto:drive@skillfactory.com" target="_blank" rel="nofollow"> drive@skillfactory.com</a>
         </div>
      </div>

<div className="rectangle .is-mobile"></div>
    <div className="phone-section">
    <div className="phone">Телефон</div>
    <a className="phoneNumber" href="tel:+79121234567"> +7 912 123-45-67</a>
    </div>
</div>
</div>
</div>
</section>

<section className="team" >
<div className="container"/>
     <h2 className="h3-team">Команда</h2>
    <div className="team-wrapper">
         <div className="team-unit">
        <img src="img/ivanov.png" alt="Иван Иванов СЕО менеджер"/>
        <div className="unit__initials">Иван Иванов</div>
        <div className="unit__prof">СЕО</div>
    </div>

    <div className="team-unit">
        <img src="img/smirnov.png" alt="Алексей Смирнов фронтендразработчик"/>
        <div className="unit__initials">Алексей Смирнов</div>
        <div className="unit__prof">Frontend-разработчик</div>
    </div>

    <div className="team-unit">
        <img src="img/yarcev.png" alt="Денис Ярцев бэкенд разработчик"/>
        <div className="unit__initials">Денис Ярцев</div>
        <div className="unit__prof">Backend-разработчик</div>
    </div>

    <div className="team-unit">
        <img src="img/morozov.png" alt="Николай Морозов дизайнер"/>
        <div className="unit__initials">Николай Морозов</div>
        <div className="unit__prof">Дизайнер</div>
    </div>

    <div className="team-unit">
        <img src="img/deeva.png" alt="Ирина Деева копирайтер"/>
        <div className="unit__initials">Ирина Деева</div>
        <div className="unit__prof">Копирайтер</div>
    </div>

    <div className="team-unit">
        <img src="img/strelkova.png" alt="Мария Стрелкова СММ менеджер"/>
        <div className="unit__initials">Мария Стрелкова</div>
        <div className="unit__prof">SMM</div>
        </div>
      </div>
      </section>
      </div>
        );
}
        ;}

