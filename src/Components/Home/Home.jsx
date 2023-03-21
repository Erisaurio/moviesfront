import './Home.css'
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.png';
import LogoW from '../Assets/Logow.png';

const Home = () => {
    return<>
        <header className="Nav">
            <img src={Logo} className="logo"/>
            <div className='icons'>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-clapperboard"></i>
                <i class="fa-solid fa-house"></i>
            </div>
        </header>
        <div className="box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste aliquam a unde placeat perferendis rerum. Quibusdam mollitia, velit, corporis eligendi veniam quam, consectetur deleniti sed debitis accusantium alias adipisci.</p>
            
        </div>
        <footer className="end">
            <img src={LogoW} className="logow"/>
            <label>Copyright</label>
            <i class="fa-regular fa-copyright" style={{"margin-left": "7px", "margin-right": "7px"}}></i>
            <label>2023 Todos los derechos reservados.</label>
            
        </footer>
    </>
}

export default Home;