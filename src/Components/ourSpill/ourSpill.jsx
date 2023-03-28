import '../Assets/NavYFooter.css'
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.png';
import LogoW from '../Assets/Logow.png';
import Spill from '../Assets/our spill2.png';
import { useNavigate } from 'react-router-dom';

const Errror = () => {
    const navigate = useNavigate();
    return<>
        <header className="Nav">
            <img src={Logo} className="logo"/>
            <div className='icons'>
                <a onClick={() => {navigate('/Landing');}}><i class="fa-solid fa-power-off"></i></a>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-clapperboard"></i>
                <a onClick={() => {navigate('/Home');}}><i className="fa-solid fa-house"></i></a>
            </div>
        </header>
        <div className="box" >
            <img src={Spill} style={{ 'width': '55%', 'float': 'left', 'max-width': '680px' }}/>
            <div style={{ 'text-align': 'left', 'transform': 'translate(0, 90%)', 'top': '50%'}}>
                <label style={{ 'font-size': '80px' }} >Error 404</label>
                <div></div>
                <label style={{ 'font-size': '30px' }} >Page not found</label>
            </div>
        </div>
        <footer className="end">
            <img src={LogoW} className="logow"/>
            <label>Copyright</label>
            <i className="fa-regular fa-copyright" style={{marginLeft: "7px", marginRight: "7px"}}></i>
            <label>2023 Todos los derechos reservados.</label>
            
        </footer>
    </>
}

export default Errror;