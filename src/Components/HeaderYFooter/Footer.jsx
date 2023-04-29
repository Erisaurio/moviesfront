import './NavYFooter.css'
import LogoW from '../Assets/Logow.png';
import {useState, useRef, useEffect} from "react"

import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    useEffect(() => {
                        
    }, []);

    return (

        <footer className="end">
            <img src={LogoW} className="logow"/>
            <label>Copyright</label>
            <i className="fa-regular fa-copyright"></i>
            <label>2023 FilmBox | Todos los derechos reservados.</label>
        </footer>

    );
}

export default Footer;