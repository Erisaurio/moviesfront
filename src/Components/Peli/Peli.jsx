import '../HeaderYFooter/NavYFooter.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import './peli.css'
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import LogoW from '../Assets/Logow.png';
import pelis from '../Assets/pinocho.jpeg';
import avatar from '../Assets/avatar.png';
import avatar2 from '../Assets/avatar2.png';
import avatar3 from '../Assets/avatar3.png';
import avatar4 from '../Assets/avatar4.png';
import avatar5 from '../Assets/avatar5.png';
import popcorn from '../Assets/palomitas.png';

const Peli = () => {
    const navigate = useNavigate();

    return<>
        <Header/>

        <div className="box">
            <div className='info'>
                <img className='card' src={pelis}/>
                <div className='texto'>
                    <h1>Nombre de la película</h1>
                    <div className='categories'>
                        <div className='pill'>Categoría1</div>
                        <div className='pill'>Categoría2</div>
                        <div className='pill'>Categoría3</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste aliquam a unde placeat perferendis rerum. Quibusdam mollitia, velit, corporis eligendi veniam quam, consectetur deleniti sed debitis accusantium alias adipisci.</p>
                    <hr style={{'width': '100%', 'border': '1px solid'}}></hr>
                    <div className='info'>
                        <div className='cast'>
                            <h3>Cast</h3>
                            <div className='member'>
                                <img src={avatar} className='avatar'/>
                                <label>Talia Denisse Gutiérrez Alvarez</label>
                            </div>
                            <div className='member'>
                                <img src={avatar2} className='avatar'/>
                                <label>Nombre</label>
                            </div>
                            <div className='member'>
                                <img src={avatar3} className='avatar'/>
                                <label>Nombre</label>
                            </div>
                            <div className='member'>
                                <img src={avatar4} className='avatar'/>
                                <label>Nombre</label>
                            </div>
                            <div className='member'>
                                <img src={avatar5} className='avatar'/>
                                <label>Nombre</label>
                            </div>
                        </div>
                        <hr style={{'width': '2px', 'height': '45vh', 'margin':'20px'}}></hr>
                        <div>
                            <h3>Calificación</h3>
                            <div className='calif'>
                                <img src={popcorn}  style={{'margin-top':'25px', width: '300px'}}/>
                                <div className='reactions'>
                                    <i class="fa-regular fa-face-grin-stars"></i>
                                    <i class="fa-regular fa-face-smile"></i>
                                    <i class="fa-regular fa-face-meh"></i>
                                    <i class="fa-regular fa-face-frown"></i>
                                    <i class="fa-regular fa-face-sad-cry"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <Footer/>
    </>
}

export default Peli;