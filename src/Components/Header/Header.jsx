import './Header.css'
import {useState, useRef, useEffect} from "react"

import {ObtenerUsuario} from '../../Services/user.service';

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

        <div className="Header">
           
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Expand at lg</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" >
                        <div className="col-12">
                            <div className="row">
                                <div className="col-5 mt-3" >
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
            </nav>

        </div>
    );
}

export default Header;