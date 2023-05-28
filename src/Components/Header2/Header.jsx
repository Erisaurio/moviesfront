import './Header.css'
import {useState, useRef, useEffect} from "react"

import {ObtenerUsuario} from '../../Services/user.service';

import { useNavigate } from 'react-router-dom';
import user from '../Assets/watching.png';
import Logo from '../Assets/Logo.png';

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

        <div className="Header">

           {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Expand at lg</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" >
                        <div className="col-12">
                            <div className="row">
                                <div className="col-5 mt-4" >
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                        <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-4" >
                                    <div className="col-8">
                                        <form role="search">
                                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                        </form>
                                    </div>

                                </div>
                                <div className="col-3" >
                                   {

                                    dataUser != null && localStorage.getItem('UserId') != null ?
                                   <div className="row">
                                    <div className="col-4">
                                       <div className="col-12">
                                           <h5 style={{color: "white"}} >{localStorage.getItem("UserName")}</h5>
                                       </div>
                                       <div className="col-12">
                                            <button onClick={() => {
                                                localStorage.removeItem("UserName");
                                                localStorage.removeItem("UserId");
                                                navigate('/');  

                                                }}>Log Out</button>
                                       </div>
                                    </div>
                                    <div className="col-6">
                                        {dataUser.filename == "" ?
                                          <img style={{height:"62px", width:"62px"}} src={user} alt="" />
                                          :
                                          <img class="profileuser" src={`http://localhost:3001/${dataUser.filename}`}/> 
                                        }
                                    </div>
                                   </div>
                                   :
                                   <div className="div">

                                      <button onClick={() => {

                                        navigate('/');  

                                        }}>Login</button>
                                   </div>
                                   }
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </nav> */}

            <header class="navheader2 text-white">
                <div class="container2">
                    <div class="d-flex container3">
                        <div class="d-flex">
                        <div className="d-flex text-start align-items-center">
                            <a onClick={() => {navigate('/Main');}} class="d-flex align-items-center text-white text-decoration-none">
                            <img src={Logo} className="logo"/>
                            </a>
                        </div>
                        
                        {
                            localStorage.getItem('Rol') ==  "Admin" ?
                                <ul class="nav col-12 col-lg-auto me-lg-5 mb-2 justify-content-center mb-md-0">
                                    <a onClick={() => {navigate('/Main');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-house"></i><p>Home</p></li></a>
                                    <a onClick={() => {navigate('/Movies');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-clapperboard"></i><p>Movies</p></li></a>
                                    <a onClick={() => {navigate('/*');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-bug"></i><p>Error</p></li></a>
                                    <a onClick={() => {navigate('/Dashboard');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-chart-line"></i><p>Dashboard</p></li></a>
                                    
                                </ul>
                            :
                                <ul class="nav col-12 col-lg-auto me-lg-5  mb-2 justify-content-center mb-md-0">
                                    <a onClick={() => {navigate('/Main');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-house"></i><p>Home</p></li></a>
                                    <a onClick={() => {navigate('/Movies');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-clapperboard"></i><p>Movies</p></li></a>
                                    <a onClick={() => {navigate('/*');}} class="nav-link nav-menu px-2"><li className='eachIcon'><i className="fa-solid fa-bug"></i><p>Error</p></li></a>
                                </ul>
                                
                        }
                        </div>

                        {
                            dataUser != null && localStorage.getItem('UserId') != null ?
                            <div className="text-end">
                                
                                <div className="five">
                                    <label style={{color: "white"}} > {localStorage.getItem("UserName")}</label><br></br>
                                    <label>Rol: </label><br></br>
                                    <label style={{color: "white"}} > {localStorage.getItem("Rol")}</label>
                                </div>
                            
                                <div className="five">
                                    <a onClick={() => { navigate('/User'); }}>
                                    {dataUser.filename == "" ?
                                        <img style={{height:"62px", width:"62px"}} src={user} alt="" />
                                    :
                                        <img class="profileuser" src={`http://localhost:3001/${dataUser.filename}`}/> 
                                    }
                                    </a>
                                </div>

                                <div className="2">
                                    <a onClick={() => {
                                        localStorage.removeItem("UserName");
                                        localStorage.removeItem("UserId");
                                        localStorage.removeItem("Token");
                                        localStorage.removeItem("Rol");
                                        navigate('/');  
                                    }} class="nav-link nav-menu px-2"><i className="fa-solid fa-power-off"></i><p>Log Out</p></a>
                                        
                                </div>

                            </div>
                            :
                            <div className="div">

                            <button onClick={() => {

                                navigate('/');  

                                }}>Login&Register</button>
                            </div>
                        }
                    </div>
                </div>
            </header>

            {/* end */}

        </div>
    );
}

export default Header;