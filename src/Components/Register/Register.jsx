import './Register.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import {useState, useRef, useEffect} from "react"

import {ObtenerUsuarios, ObtenerUsuario, CrearUser, getLogin} from '../../Services/user.service';

const Register = () => {
    
    const navigate = useNavigate();

    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPass, setUserPass] = useState('');
   
    const [dataUsers, setDataUsers] = useState([]);
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
    


    const showUsers = async () => {
        try {
            ObtenerUsuarios()
            .then((response) => {
                const data = response.data;
                setDataUsers(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

 

    useEffect(() => {
        

        showUsers();  
            //console.log(dataUsers);
            
                
    }, []);

    return (

        <div className='login container-fuid d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='row w-50 d-flex justify-content-center tarjeta-login m-0'>

                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                    <form className="row d-flex flex-column g-3">
                        <div className="col-auto text-center">
                            <label className='text-login'>Register</label>
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
                              showUsers();                                                   
                            }}>Sigin</button>
                            
                            {/*<Link to="/register">
                                ¿No tienes cuenta? Registrate
                            </Link> */}
                        </div>
                    </form>
                </div>
                <a onClick={() => {navigate('/');}}> Login </a>

                <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                        dataUsers.map((User, index) =>
                        <div key={index}
                            onClick={() => {
                                alert(User._id);
                                setUser(User._id);
                              }}
                            className="col-4 ">
                               
                                <div class="card">
                                  <div class="card-body">
                                    <h5 >Name: {User.name}</h5>
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

                <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                         
                        <div className="col-6">
                               
                                <div class="card">
                                  <div class="card-body">
                                    <h5 >Name: {dataUser.name}</h5>
                                    <h4 >email: {dataUser.email}</h4>
                                    <p> pass: {dataUser.password}</p>
                                    <p> role: {dataUser.role} </p>
                                  </div>
                                </div>
                            
                        </div>
                      
                    }
                  </div>
                </div>   

            </div>
        </div>
    );
}

export default Register;