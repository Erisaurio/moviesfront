import './User.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import {useState, useRef, useEffect} from "react"

import {ObtenerUsuario, EditUser } from '../../Services/user.service';
import { useNavigate } from 'react-router-dom';

const User = () => {
    
    const navigate = useNavigate();
   
    const [dataUser, setDataUser] = useState([]);

    const [EditName, setEdName] = useState('');
    const [EditEmail, setEdEmail] = useState('');
    const [EditPass, setEdPass] = useState('');

    const setUser = async (id_user) => {
        try {
            ObtenerUsuario(id_user)
            .then((response) => {
                const data = response.data;
                setDataUser(response.data);
                console.log(response);    
                setEdName(response.data.name);
                setEdEmail(response.data.email);
                setEdPass(response.data.password);
                
            })
            .catch((error) => {
                console.log(error);
            });    
            console.log(dataUser);
        } catch (e) {
            console.log(e);
        }
    }

    const EditarUser = async (name,Email,Pass) => {
        
        try {
            EditUser(localStorage.getItem('UserId'),name,Email,Pass)
            .then((response) => {
                console.log(response);
                alert("User Editado"); 
                setUser(localStorage.getItem('UserId').toString());                          
                  
                
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
        
        setUser(localStorage.getItem('UserId').toString());
        //showUser();  
            
    }, []);

    return (

       

       <div className="Main">

            <Header/>

            <div className="div" id="main" class="container" >Main

                <br/>
                <div className="row">

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
                    {
                      <div className="col-6">
                               
                        <div class="card">
                          <div class="card-body">
                          <div className="col-auto text-center">
                            <input
                                
                                type="text"
                                className="input-login"
                                id="Name_Edit"
                                placeholder="Name"
                                onChange={e => setEdName(e.target.value)} value={EditName}
                            />
                            <input
                                
                                type="text"
                                className="input-login"
                                id="Email_Edit"
                                placeholder="Email"
                                onChange={e => setEdEmail(e.target.value)} value={EditEmail}
                            />
                            <input
                                
                                type="text"
                                className="input-login"
                                id="Pass_Edit"
                                placeholder="Password"
                                onChange={e => setEdPass(e.target.value)} value={EditPass}
                            />
                            </div>
                            
                            <p> role: {dataUser.role} </p>
                            <button onClick={() => {
                              
                              EditarUser(EditName,EditEmail,EditPass);
                             
                            }}>Editar User</button>
                          </div>
                        </div>
                    
                      </div>
                    }
                  </div>
                </div>   

                    
                </div>


            </div>

            <Footer/>

        </div>

       


    );
}

export default User;