import './User.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"

import { ObtenerUsuario, EditUser } from '../../Services/user.service';
import { ObtenerComentaiosUsuario } from '../../Services/Comentarios';
import { ObtenerCriticasUsuario } from '../../Services/Criticas';

import { EditUserImg } from '../../Services/Storage';
import { useNavigate } from 'react-router-dom';

import poster from '../Assets/Poster.png';
import swal from 'sweetalert';


const FormData = require('form-data');

const User = () => {
    
    const handleFileInput = () => {}

    const navigate = useNavigate();
   
    const [dataUser, setDataUser] = useState([]);

    const [EditName, setEdName] = useState('');
    const [EditEmail, setEdEmail] = useState('');
    const [EditPass, setEdPass] = useState('');
    const [EditImg, setimgUser] = useState('');

    const formData = new FormData();
    const [image, setImage] = useState(null)

    const [dataComentarios, setComentarios] = useState([]);
    const [dataCriticas, setCriticas] = useState([]);

    const InputClick = () => {
        // 👇️ open file input box on click of another element
        fileInputRef.current.click();
    };

    const fileInputRef =useRef(null);
    //#region UpdateImgProfile
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        
        const id = localStorage.getItem('UserId').toString()
        const myfile = ev.target.files[0]
        formData.append("myfile", myfile)
        
        console.log(`myfyle = ${myfile}`);
        console.log(`formData = ${formData.get("myfile")}`);
        //setImage(URL.createObjectURL(ev.target.files[0]));
        //formData.append("id", id);
        EditUserImg (id,formData);
        
        UpdateView();
        
    }

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
            EditUser(localStorage.getItem('UserId'),name,Email,Pass,localStorage.getItem('Token'))
            .then((response) => {
                console.log(response);
                //alert("User Editado"); 
                UpdateView();                
                  
                
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

    const UpdateView = () => {
        swal("exito!", "Cambio de informacion fue un exito!", "success"); 
        setUser(localStorage.getItem('UserId').toString());
    }

    const setComentariosUsuario = async (id_user) => {
        try {
            ObtenerCriticasUsuario(id_user)
            .then((response) => {
                const data = response.data;
                setComentarios(response.data);
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

    const setCriticasUsuario = async (id_user) => {
        try {
            ObtenerComentaiosUsuario(id_user)
            .then((response) => {
                const data = response.data;
                setCriticas(response.data);
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
            //showUser();  
            setComentariosUsuario(localStorage.getItem('UserId').toString());
            setCriticasUsuario(localStorage.getItem('UserId').toString());
        }
            
    }, []);

    return (

       

       <div className="Main">

            <Header/>
                 

            {
                localStorage.getItem('Token') != null && localStorage.getItem('UserId') != null ?
                    
                    <div className="div" id="main" class="container" >Main

                        <br/>
                        <div className="row">

                        <div class="col-md-12 mt-3">
                            <div className="row">
                            
                                {     
                                    <div className="col-6">
                                            
                                        <div class="card">
                                            <div class="card-body">
                                                <div className="">
                                                    <div className="col-auto text-center">
                                                    <img class="profileuser" src={`http://localhost:3001/${dataUser.filename}`}/>
                                                        <br />
                                                        <p> imagen</p>
                                                        <button onClick={InputClick}>cambiar imagen</button>
                                                        <input
                                                    
                                                            type="file"
                                                            accept="image/png, image/gif, image/jpeg"
                                                            className="input-login"
                                                            id="pic-edit"
                                                            style={{display: 'none'}}
                                                            ref={fileInputRef} 
                                                            onChange={handleSubmit}
                                                        />
                                                        
                                                    </div>
                                                </div>
                                                
                                                <br />
                                                <h5 >Name: {dataUser.name}</h5>
                                                <h4 >email: {dataUser.email}</h4>
                                                <p> pass: {dataUser.password}</p>
                                                <p> role: {dataUser.role} </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                }
                                
                            </div>
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

                        <div className="Criticas">
                        {
                            dataCriticas != null  ?
                                <div className="row">
                                    
                                    {
                                        dataCriticas.map((Critica, index) =>
                                        
                                        <div key={index}> 
                                        
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-6">
                                                    {Critica.UsuarioPic == "" ?
                                                    <img style={{height:"62px", width:"62px"}} src={poster} alt="" />
                                                    :
                                                    <img class="profileuser" src={  `http://localhost:3001/${Critica.UsuarioPic}`}/> 
                                                    }
                                                    </div>
                                                    <div className="col-3">{Critica.name}</div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12">{Critica.Comentario}</div>
                                                            <div className="col-12">{Critica.Calificacion}</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">{Critica.createdAt}</div>
                                                </div>
                                            </div>
                                        </div>
                                                                        
                                        ) 
                                    }

                                </div>
                            :
                                <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                                </div>
                        }
                        </div>
                        <hr />
                        <div className="cometarios">
                            {
                                dataComentarios != null  ?
                                    <div >

                                        {
                                            dataComentarios.map((comentario, index) =>
                                            
                                            <div key={index}> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            {comentario.UsuarioPic == "" ?
                                                            <img style={{height:"62px", width:"62px"}} src={poster} alt="" />
                                                            :
                                                            <img class="profileuser" src={`http://localhost:3001/${comentario.UsuarioPic}`}/> 
                                                            }
                                                        </div>
                                                        <div className="col-3">{comentario.name}</div>
                                                        <div className="col-6">
                                                        {comentario.Comentario}
                                                        </div>
                                                        <div className="col-3">{comentario.createdAt}</div>
                                                    </div>
                                                </div>
                                            </div>
                                                                            
                                            ) 
                                        }

                                    </div>
                                :
                                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                                    </div>
                            }
                        </div>


                    </div>

                :
                    <div className="col-12" style={{backgroundColor: "lightblue"}}>
                        <h3>No Inicio Session</h3>
                    </div>
            }
            <Footer/>

        </div>

       


    );
}

export default User;