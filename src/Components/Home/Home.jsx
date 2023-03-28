import '../Assets/NavYFooter.css'
import './Home.css'
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.png';
import LogoW from '../Assets/Logow.png';
import pelis from '../Assets/pinocho.jpeg';
{/*import {Search, SearchIcon, SearchIconWrapper, StyledInputBase} from '@mui/icons-material/Search';*/}

const Home = () => {
    const navigate = useNavigate();

    return<>
        <header className="Nav">
            <img src={Logo} className="logo"/>
            {/*<Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>*/}
            <div className='icons'>
                <a onClick={() => {navigate('/Landing');}}><i class="fa-solid fa-power-off"></i></a>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-clapperboard"></i>
                <a onClick={() => {navigate('/Home');}}><i className="fa-solid fa-house"></i></a>
                <a onClick={() => {navigate('/OurSpill');}}><i class="fa-solid fa-bug"></i></a>
            </div>
        </header>
        <div className="box">
            <div className='search'>
                <i class="fa-solid fa-i-cursor"></i>
            </div>
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
        <footer className="end">
            <img src={LogoW} className="logow"/>
            <label>Copyright</label>
            <i className="fa-regular fa-copyright" style={{marginLeft: "7px", marginRight: "7px"}}></i>
            <label>2023 Todos los derechos reservados.</label>
            
        </footer>
    </>
}

export default Home;