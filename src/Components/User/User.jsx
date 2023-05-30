import './User.css'
//import Header from "../HeaderYFooter/Header";
import Header from "../Header2/Header";
import Footer from '../HeaderYFooter/Footer';
import Lock from '../Assets/lock.png';
import {useState, useRef, useEffect} from "react"
import lapizicon from '../Assets/lapiz.png';
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
                    
                    <div className="div" id="main" class="container" >

                        <br/>
                        <div className="rowUser">

                        <div class="col-md-12 mt-3">
                            <div className="row">
                            
                                {     
                                    <div className="col-4">
                                            
                                        <div class="cardUser">
                                            <div class="card-body">
                                                <div className="">
                                                    <div className="col-auto text-center">
                                                    <img class="profileuser" src={`http://localhost:3001/${dataUser.filename}`}/>
                                                        <br />
                                                        <p> </p>
                                                        <button  id='editpicUser' onClick={InputClick}>Cambiar Imagen</button>
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
                                                <ul className='DatosUser'  style={{listStyle: 'none'}}  >
                                                            <li>
                                                            <span >Nombre: {dataUser.name}</span>
                                                            </li>
                                                            <li>
                                                            <span> Email: {dataUser.email}</span>
                                                            </li>
                                                            <li>
                                                            <span> Contraseña: {dataUser.password}</span>
                                                                
                                                            </li>
                                                            <li>
                                                            <span>Rol: {dataUser.role}</span>
                                                            </li>
                                                           

                                                           </ul>
                                                {/* <h5 >Name: {dataUser.name}</h5>
                                                <h4 >email: {dataUser.email}</h4>
                                                <p> pass: {dataUser.password}</p>
                                                <p> role: {dataUser.role} </p> */}
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                }
                                
                                {
                            <div className="col-8">
                                    
                                <div class="cardUserEdit">
                                
                                    <h2 className='TituloUser'>Editar Información</h2>
                                    <img style={{ width: 38, height: 38 }} src={lapizicon}  className='Lapiz'/>
                                <div class="card-body">
                                    <div className="col-auto text-center detailUser">

                                        <label className='LabelUser'>Nuevo nombre:  </label>
                                        <input style={{'margin-left':'10px', 'width':'60%'}}
                                            
                                            type="text"
                                            className="input-login"
                                            id="Name_Edit"
                                            placeholder="Name"
                                            onChange={e => setEdName(e.target.value)} value={EditName}
                                        />
                                        <br />
                                        <label className='LabelUser'>Nuevo email:  </label>
                                        <input style={{'margin-left':'30px', 'width':'60%'}}
                                            
                                            type="text"
                                            className="input-login"
                                            id="Email_Edit"
                                            placeholder="Email"
                                            onChange={e => setEdEmail(e.target.value)} value={EditEmail}
                                        />
                                        <br />
                                        <label className='LabelUser'>Nueva contraseña:  </label>
                                        <input style={{'margin-left':'-15px', 'width':'60%'}}
                                            
                                            type="password"
                                            className="input-login"
                                            id="Pass_Edit"
                                            placeholder="Password"
                                            onChange={e => setEdPass(e.target.value)} value={EditPass}
                                        />
                                        <br />
                                        <p className='LabelUser'> Rol: {dataUser.role} </p>
                                        <br />
                                        </div>
                                            
                                            
                                            
                                            <button  id='edituserButton' onClick={() => {
                                            
                                            EditarUser(EditName,EditEmail,EditPass);
                                            
                                            }}>Editar User</button>
                                        </div>
                                </div>
                                
                            </div>
                            }
                        </div>   
                            </div>
                        

                            
                        </div>
                        <br />
                        
                        <h4 className='TituloComents'>Comentarios</h4>
                        
                        <div className="CriticasU">
                        {
                            dataCriticas != null  ?
                                <div className="row ">
                                    
                                    {
                                        dataCriticas.map((Critica, index) =>
                                        
                                        <div key={index}> 
                                        
                                            <div className="col-12 ">
                                                <div className="row">
                                                    <div className="col-3">
                                                    {Critica.UsuarioPic == "" ?
                                                    <img style={{height:"90px", width:"90px"}} src={poster} alt="" />
                                                    :
                                                    <img class="profileuser" src={  `http://localhost:3001/${Critica.UsuarioPic}`}/> 
                                                    }
                                                    <div className="col-12"> {Critica.name} </div>
                                                    </div>
                                                    <div className="col-6 comment" > "{Critica.Comentario}"
                                                    <div className="col-12">  {Critica.Calificacion}</div>
                                                    </div>
                                                    
                                                    <div className="col-2 fechacritica">{Critica.createdAt}</div>
                                                </div>
                                            </div>
                                            <br />
                                            <hr />
                                            
                                        </div>
                                                                        
                                        ) 
                                        
                                    }

                                </div>
                            :
                                <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                                </div>
                        }
                        </div>

                      <br />

                        <div className="comentariosU">
                            {
                                dataComentarios != null  ?
                                    <div >

                                        {
                                            dataComentarios.map((comentario, index) =>
                                            
                                            <div key={index}> 
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            {comentario.UsuarioPic == "" ?
                                                            <img style={{height:"90px", width:"90px"}} src={poster} alt="" />
                                                            :
                                                            <img class="profileuser" src={`http://localhost:3001/${comentario.UsuarioPic}`}/> 
                                                            }
                                                            <div className="col-12 ">{comentario.name}</div>
                                                        </div>

                                                        <div className="col-6 comment">
                                                        "{comentario.Comentario}"
                                                        
                                                        </div>
                                                        <div className="col-2 fechacritica">{comentario.createdAt}</div>
                                                        
                                                       
                                                    </div>
                                                </div>
                                                <br />
                                            <hr />
                                            </div>
                                                                            
                                            ) 
                                        }

                                    </div>
                                :
                                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                                    </div>
                            }
                        </div>

<br />
                    </div>

                :
                <div className="aviso">
                <img src={Lock} className="lock" />
               <p class="avisoT">Necesitas Iniciar Sesión</p>
           </div>
            }
            <Footer/>

        </div>

       


    );
}

export default User;