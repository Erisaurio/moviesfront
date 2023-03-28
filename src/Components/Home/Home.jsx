import '../Assets/NavYFooter.css'
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.png';
import LogoW from '../Assets/Logow.png';
{/*import {Search, SearchIcon, SearchIconWrapper, StyledInputBase} from '@mui/icons-material/Search';*/}

const Home = () => {
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
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-clapperboard"></i>
                <i className="fa-solid fa-house"></i>
            </div>
        </header>
        <div className="box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste aliquam a unde placeat perferendis rerum. Quibusdam mollitia, velit, corporis eligendi veniam quam, consectetur deleniti sed debitis accusantium alias adipisci.</p>
            
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