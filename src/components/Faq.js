import React from "react";
import '../js/collapse';
import "./styles/faq.scss";

const Faq = () => {

    return (
        <div  className="faq-section">
        <img className="main-page-logo" src="img/FAQ.svg" alt="рисунок команды"/>
                <h1>Частые вопросы</h1>
                <div className="description">
                    Отвечаем на вопросы, которые у вас могут возникнуть.</div>
<section className="question-section">

    <button className="collapse is-animated">Могу ли я отменить бронь? </button>
    <div className="content is-animated"> Можете, если оплатили в полном объеме, деньги вам все равно не вернутся</div>

    <button className="collapse is-animated">Могу ли я вернуть деньги, если не подошёл автомобиль?</button>
        <div className="content">Не можете, ваши деньги ушли в фонд поддержки мемчиков с котиками </div>

    <button className="collapse is-animated">Что делать, если случилось ДТП?</button>
        <div className="content"> Не оставлять свидетелей, сьесть карту с видеорегистратора</div>

    <button className="collapse is-animated">Могу ли я оставить автомобиль в удобном для меня месте?    </button>
        <div className="content">Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</div>

    <button className="collapse is-animated">Что делать, если собственник просит заплатить ему напрямую?   </button>
        <div className="content">Напрямую платить низзя, иначе 100 китайских программистов
            сидящих в подвале не получат свой дошик :( </div>

    <button className="collapse is-animated">Должен ли я заправлять автомобиль? </button>
        <div className="content"> если это Тесла, то можно не надо? и желательно не лить соляру в бензиновую машину</div>

         </section>
        </div>
 );
 }

 export default Faq;