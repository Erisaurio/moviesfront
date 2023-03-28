import './Landing.css'
import * as React from "react";
import { Link } from "react-router-dom";
import Movie from '../Assets/Movie2.png';
import { useNavigate } from 'react-router-dom';
{/*navegate("/login");*/}
const Landing = () => {
    const navigate = useNavigate();
    return<>
    <div className='bodyBox'>
        <div className="hero" style={{height: "150px", overflow: "hidden"}} >
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                <path d="M-3.94,128.80 C202.03,185.05 259.02,34.05 503.94,132.73 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#191919"}}></path>
            </svg>
        </div>
  
        <header className="hero">
            <div className="textos-hero">
                <h1>Bienvenido a FilmBox</h1>
                <p>Todas las opiniones relevantes de la industria del cine, en un
                  solo lugar</p>
                <div>
                    <a onClick={() => {navigate('/Home');}}>LogIn</a>
                    <a onClick={() => {navigate('/Register');}}> Registrarme </a>
                </div>
                {/*<Link to="/src/LogIn.js">rfw</Link>../../public/LogIn.html*/}
            </div>

            <div style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C216.70,147.55 303.61,0.52 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#191919"}}></path>
                </svg>
            </div>
        </header>
  
        <img src={Movie} className="movie" alt="logo"/>
</div>
    </>
}

export default Landing;