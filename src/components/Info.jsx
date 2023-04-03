import React from 'react'
import Headshot from '../images/headshot.png'

export default function Info() {
    return (
        <div className="container info--container">
            <img src={Headshot} />
            <h1 className="info--name">Josh Merrill</h1>
            <p className="info--title">Frontend Developer</p>
            <a href="https://www.josh-merrill.com" target="_blank" className="info--portfolio">josh-merrill.com</a>
            <div className="info--buttons">
                <button className="info--email"><a href="mailto:joshmmerrill@outlook.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i> Email</a></button>
                <button className="info--linkedin"><a href="https://www.linkedin.com/in/joshmmerrill" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></button>
            </div>
        </div>
    )
}
