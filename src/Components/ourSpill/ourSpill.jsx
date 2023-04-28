import '../HeaderYFooter/NavYFooter.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import * as React from "react";
import Spill from '../Assets/our spill2.png';
import { useNavigate } from 'react-router-dom';

const Errror = () => {
    const navigate = useNavigate();
    return<>
        <Header/>
        <div className="box" >
            <img src={Spill} style={{ 'width': '55%', 'float': 'left', 'max-width': '680px' }}/>
            <div style={{ 'text-align': 'left', 'transform': 'translate(0, 30%)', 'top': '50%', 'color': '#191919', 'display': 'block', 'align-items': 'center'}}>
                <label style={{ 'font-size': '80px' }} >Error 404</label>
                <div></div>
                <label style={{ 'font-size': '30px' }} >Page not found</label>
            </div>
        </div>
        <Footer/>
    </>
}

export default Errror;