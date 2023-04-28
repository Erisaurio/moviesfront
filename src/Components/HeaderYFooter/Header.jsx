import {useState, useRef, useEffect} from "react"
import './NavYFooter.css'

import {ObtenerUsuario} from '../../Services/user.service';
import Logo from '../Assets/Logo.png';

import { useNavigate } from 'react-router-dom';
import user from '../Assets/watching.png';

const Header = () => {
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([]);

    const setUser = async (id_user) => {
        try {
            ObtenerUsuario(id_user)
            .then((response) => {
                const data = response.data;
                setDataUser(response.data);
                console.log(response);    
                
            })
            .catch((error) => {
                console.log(error);
            });    
            console.log(dataUser);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
                        
        if(localStorage.getItem('UserId') != null){
            setUser(localStorage.getItem('UserId').toString());
        } 

    }, []);

    return (

        <header className="Nav">
            
            <div className='Buscar'>
                <a onClick={() => {navigate('/Main');}}><img src={Logo} className="logo"/></a>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
            <div className='icons'>
                {/*dataUser.filename == "" ?
                  <img style={{height:"62px", width:"62px"}} src={user} alt="" />
                  :
                  <img class="profileuser" src={`http://localhost:3001/${dataUser.filename}`}/> 
                */}
                <a onClick={() => {navigate('/Landing');}}><i class="fa-solid fa-power-off"></i></a>
                <a onClick={() => {navigate('/User');}}><i className="fa-solid fa-user"></i></a>
                <a onClick={() => {navigate('/Dashboard');}}><i className="fa-solid fa-clapperboard"></i></a>
                <a onClick={() => {navigate('/Home');}}><i className="fa-solid fa-house"></i></a>
                <a onClick={() => {navigate('/OurSpill');}}><i class="fa-solid fa-bug"></i></a>
            </div>
        </header>


    );
}

export default Header;