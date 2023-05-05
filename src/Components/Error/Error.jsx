import '../HeaderYFooter/NavYFooter.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import * as React from "react";
import Spill from '../Assets/our spill2.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return<>
        <Header/>
        <div className="box" style={{'display': 'flex', 'align-items': 'center', 'justify-content': 'center'}}>
            <img src={Spill} 
                style={{ 
                    'width': '55%', 
                    'max-width': '680px' 
                }}
            />
            <div 
                style={{ 
                    'text-align': 'left', 
                    'color': '#191919', 
                    'display': 'flex',
                    'height':'100%', 
                    'align-items': 'center',
                    'margin-bottom':'100px'
                }}>
                <div>
                    <label style={{ 'font-size': '80px' }} >Error 404</label>
                    <div></div>
                    <label style={{ 'font-size': '30px' }} >Page not found</label>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default Error;