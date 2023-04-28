import '../HeaderYFooter/NavYFooter.css'
import './Home.css'
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import pelis from '../Assets/pinocho.jpeg';
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
{/*import {Search, SearchIcon, SearchIconWrapper, StyledInputBase} from '@mui/icons-material/Search';*/}

const Home = () => {
    const navigate = useNavigate();

    return<>
        <Header/>

        <div className="box">
            {/*<div className='search'>
                <i class="fa-solid fa-i-cursor"></i>
            </div>*/}
            <div className='cards'>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
            </div>
        </div>

        <a onClick={() => {navigate('/NewMovie');}}>
            <div className='newMovie'>
                <i class="fa-solid fa-plus"></i>
            </div>
        </a>

        <Footer/>
    </>
}

export default Home;