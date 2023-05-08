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

            <header class="p-3 navheader2 text-white">
                <div class="container2">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="text-start">
                            <a onClick={() => {navigate('/Main');}} class="d-flex align-items-center mb-2  text-white text-decoration-none">
                            <img src={Logo} className="logo"/>
                            </a>
                        </div>
                        
                        {
                            localStorage.getItem('Rol') ==  "Admin" ?
                                <ul class="nav col-12 col-lg-auto me-lg-5 ms-lg-2 mb-2 justify-content-center mb-md-0">
                                    <li><a onClick={() => {navigate('/Main');}} class="nav-link px-2 text-white">Home</a></li>
                                    <li><i className="fa-solid fa-clapperboard"></i><a onClick={() => {navigate('/Movies');}} class="nav-link px-2 text-white">Movies</a></li>
                                    <li><a onClick={() => {navigate('/Login');}} class="nav-link px-2 text-white">Login</a></li>
                                    <li><a onClick={() => {navigate('/Register');}} class="nav-link px-2 text-white">Register</a></li>
                                    <li><a onClick={() => {navigate('/Landing');}} class="nav-link px-2 text-white">Landing</a></li>
                                    <li><a onClick={() => {navigate('/*');}} class="nav-link px-2 text-white">Error</a></li>
                                    <li><a onClick={() => {navigate('/Dashboard');}} class="nav-link px-2 text-white">Dashboard</a></li>
                                    
                                </ul>
                            :
                                <ul class="nav col-12 col-lg-auto me-lg-5 ms-lg-2 mb-2 justify-content-center mb-md-0">
                                    <li><a onClick={() => {navigate('/Main');}} class="nav-link px-2 text-white">Home</a></li>
                                    <li><a onClick={() => {navigate('/Movies');}} class="nav-link px-2 text-white"><br />Movies</a></li>
                                    <li><a onClick={() => {navigate('/Login');}} class="nav-link px-2 text-white">Login</a></li>
                                    <li><a onClick={() => {navigate('/Register');}} class="nav-link px-2 text-white">Register</a></li>
                                    <li><a onClick={() => {navigate('/Landing');}} class="nav-link px-2 text-white">Landing</a></li>
                                    <li><a onClick={() => {navigate('/*');}} class="nav-link px-2 text-white">Error</a></li>
                                    
                                    
                                    
                                </ul>
                                
                        }

                        <br />

                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 ms-lg-4 me-lg-auto ml-2">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </form>

                        <div class="text-end ">
                        {

                            dataUser != null && localStorage.getItem('UserId') != null ?
                            <div className="row  align-items-center">
                                
                                <div className="col-5">
                                    
                                    <h6 style={{color: "white"}} >UserName: {localStorage.getItem("UserName")}</h6>
                                    <h6 style={{color: "white"}} >Rol: {localStorage.getItem("Rol")}</h6>
                                    <button onClick={() => {
                                            
                                            navigate('/User');  

                                            }}>Ver Perfil</button>
                                </div>
                            
                            
                                <div className="col-5">
                                    {dataUser.filename == "" ?
                                    <img style={{height:"62px", width:"62px"}} src={user} alt="" />
                                    :
                                    <img class="profileuser" src={`http://localhost:3001/${dataUser.filename}`}/> 
                                    }
                                </div>

                                <div className="col-2">
                                    <div className="col-12">
                                        <button onClick={() => {
                                            localStorage.removeItem("UserName");
                                            localStorage.removeItem("UserId");
                                            localStorage.removeItem("Token");
                                            localStorage.removeItem("Rol");
                                            navigate('/');  

                                            }}>Log Out</button>
                                    </div>
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
                </div>
            </header>


            {/* end */}

        </div>
    );
}

export default Header;