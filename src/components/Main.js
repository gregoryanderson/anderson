import React from 'react'
import './Main.css'


const Main = () => {
    return (
        <section className="Main">
            <img src={require('./man.png')} id='main__img'/>
            <h1>Gregory Anderson</h1>
            <h1>Software Engineer</h1>
        </section>
    )
}

export default Main;