import React from 'react'

import {NavLink} from 'react-router-dom'
import "./main.scss"

function Main() {
    return <div>
        <div className = "mainContainer">
            <img src="../img/main.svg"  className= "mainDriverImg1" alt=""/>
                <section className="mainFirstSection">

                     <h1 className="mainHeading"> Каршеринг в любой точке России  </h1>

                <p>Будьте всегда за рулём во время путешествий и командировок</p>
                <ul>
                    <li> <NavLink to="/register" className='mainBtnRegister'> Зарегистрироваться </NavLink> </li>
                </ul>
                </section>

        </div>

    </div>
}

// Main.propTypes = {

// }
export default Main

