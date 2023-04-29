import './login.css'
import Logo from '../Assets/Logo.png';
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"

import {ObtenerUsuarios, ObtenerUsuario, CrearUser, getLogin} from '../../Services/user.service';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPass, setUserPass] = useState('');
   
    const [LogEmail, setLogEmail] = useState('');
    const [LogPass, setLogPass] = useState('');

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

    const IniciarSesion = async (LogEmail,LogPass) => {
        
        try {
            getLogin(LogEmail,LogPass)
            .then((response) => {
                console.log(response);
                localStorage.setItem('UserName', response.data.name);
                localStorage.setItem('UserId', response.data._id);
                console.log(localStorage.getItem("UserName"));       
                console.log(localStorage.getItem('UserId').toString());     
                alert("Inicio de sesion exitoso");   
                navigate('/Main');  
            })
            .catch((error) => {
                console.log(error);
                //alert("Credenciales incorrectas");
            });    
        } catch (e) {
            console.log(e);
            //alert("Fallo de login");
        }
    }

    useEffect(() => {
        

        //showUsers();  
            //console.log(dataUsers);
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
        <>
        <header className="NavUnique">
        <a onClick={() => {navigate('/Landing');}}><img src={Logo} className="logo"/></a>
        </header>

        <div className='background'>
            <div className='loginbox'>
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
                                          IniciarSesion(UserEmail,UserPass);                                                   
                                    }}>Ingresar</button>
                                    <a onClick={() => {navigate('/Landing');}}> Landing </a>
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
            </div>
        </div>
        
        <Footer/>
        </>
    );
}

export default Login;