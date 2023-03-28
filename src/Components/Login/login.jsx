import './login.css'
import {useState, useRef, useEffect} from "react"

import {ObtenerUsuarios, CrearUser} from '../../Services/user.service';

import * as React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPass, setUserPass] = useState('');
   
    const [dataUsers, setDataUser] = useState([]);

    
    useEffect(() => {
        

            ObtenerUsuarios()
            .then((response) => {
                const data = response.data;
                setDataUser(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
            console.log(dataUsers);
            
                
    }, []);

    return (
        <div className='login container-fuid d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='row w-50 d-flex justify-content-center tarjeta-login m-0'>

                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                    <form className="row d-flex flex-column g-3">
                        <div className="col-auto text-center">
                            <label className='text-login'>Login</label>
                        </div>
                        <div className="col-auto text-center">
                            
                            <input
                                
                                type="text"
                                className="input-login"
                                id="username"
                                placeholder="Username"
                                onChange={e => setUserName(e.target.value)} value={UserName}
                                 />

                        </div>
                        <div className="col-auto text-center">

                            <input
                                
                                type="text"
                                className="input-login"
                                id="Email"
                                placeholder="Email"
                                onChange={e => setUserEmail(e.target.value)} value={UserEmail}
                                />

                        </div>
                        <div className="col-auto text-center">

                            <input
                                
                                type="password"
                                className="input-login"
                                id="password"
                                placeholder="Password"
                                onChange={e => setUserPass(e.target.value)} value={UserPass}
                                 />

                        </div>
                       
                        <div className="col-12 d-flex flex-column">

                            <button  type="button" class="btn btn-primary" onClick={() => {
                              
                              CrearUser(UserName,UserEmail,UserPass);
                                                                                 
                            }}>Sigin</button>

                            <Link to="../Paises/Paises.jsx">Países</Link>

                            {/*<Link to="/register">
                                ¿No tienes cuenta? Registrate
                            </Link> */}
                        </div>
                    </form>
                </div>

                
                <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                        dataUsers.map((User, index) =>
                        <div key={index}
                            onClick={() => {
                                alert(User._id);
                              
                              }}
                            className="col-4 ">
                               
                                <div class="card">
                                  <div class="card-body">
                                    <h5 >Name: {User.nombre}</h5>
                                    <h4 >email: {User.email}</h4>
                                    <p> pass: {User.password}</p>
                                    <p> role: {User.role} </p>
                                  </div>
                                </div>
                            
                        </div>
                      ) 
                    }
                  </div>
                </div>
                                    

            </div>
        </div>
    );
}

export default Login;