import './Dashboard.css'
//import Header from "../HeaderYFooter/Header";
import Header from "../Header2/Header";
import Footer from '../HeaderYFooter/Footer';
import Lock from '../Assets/lock.png';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import {ObtenerUsuarios, ObtenerUsuario, EditUser, CrearUser, ObtenerAdmins, DeleteUsuario} from '../../Services/user.service';
import {ObtenerGeneros, CrearGenero, EditGenero, DeleteGenero} from '../../Services/generos.service';
import {GetMovies, DeleteMovie} from '../../Services/movies.service';
import {ObtenerPlataformas, CrearPlataforma, EditPlataforma, DeletePlataforma} from '../../Services/plataforma.service';
import {ObtenerCast, CrearCast, EditCast, DeleteCast} from '../../Services/Cast.service';
import {EditCastImg} from '../../Services/Storage';

import avatar from '../Assets/watching.png';
import poster from '../Assets/Poster.png';

const Dashboard = () => {
    
    const navigate = useNavigate();
    ///para cerar user
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPass, setUserPass] = useState('');
    ///para editar user
    const [EUserid, setEUserid] = useState('');
    const [EUserName, setEUserName] = useState('');
    const [EUserEmail, setEUserEmail] = useState('');
    const [EUserPass, setEUserPass] = useState('');
    ///para cerar categoria
    const [CatName, setCatName] = useState('');
    const [ECatName, setECatName] = useState('');
    const [EidCatName, setEidCatName] = useState('');
    //plataformas
    const [plataformaName, setPlataformaName] = useState('');
    const [editPlataformaName, seteditPlataformaName] = useState('');
    const [EidPlataforma, setEidPlataforma] = useState('');
    //cast
    const [CastName, setCastName] = useState('');
    const [Castphoto, setCastphoto] = useState('');
    const [editCastName, seteditCastName] = useState('');
    const [editCastid, seteditCastid] = useState('');
    const [Castimg, setCastimg] = useState('');
    const [ECastimg, setECastimg] = useState('');
    //auz id img
    const [auxCastid, setauxCastid] = useState('');
    //datos 
    const [dataUsers, setDataUsers] = useState([]);
    const [dataAdmins, setDataAdmins] = useState([]);
    const [dataGeneros, setDataGeneros] = useState([]);
    const [dataPlataformas, setDataPlataforma] = useState([]);
    const [dataCast, setdataCast] = useState([]);
    const [dataMovies, setMovies] = useState([]);
    //img 
    const InputClick = () => {
        // 👇️ open file input box on click of another element
        fileInputRef.current.click();
    };

    const formData = new FormData();
    const fileInputRef = useRef(null);
    //#region UpdateImgProfile
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        
        debugger
        const myfile = ev.target.files[0];
        const myfilename = ev.target.files[0].name;
        
        formData.append("myfile", myfile);
        
        //console.log(`myfyle = ${myfile}`);
        //console.log(`formData = ${formData.get("myfile")}`);
        //setImage(URL.createObjectURL(ev.target.files[0]));
        //formData.append("id", id);
        console.log(formData);
        console.log(formData.name);
        setCastimg(URL.createObjectURL(ev.target.files[0]));
        
        //EditMovieImg(dataMovie._id,formData);
        
        
        
    }

    const InputClickEcast = () => {
        // 👇️ open file input box on click of another element
        fileInputRef2.current.click();
    };

    const formData2 = new FormData();
    const fileInputRef2 = useRef(null);
    //#region UpdateImgProfile
    const handleSubmitECast=(ev)=>{
        ev.preventDefault();
        
        debugger
        const myfile = ev.target.files[0];
        const myfilename = ev.target.files[0].name;
        
        formData2.append("myfile", myfile);
        
        //console.log(`myfyle = ${myfile}`);
        //console.log(`formData = ${formData.get("myfile")}`);
        //setImage(URL.createObjectURL(ev.target.files[0]));
        //formData.append("id", id);
        //console.log(formData2);

        console.log(formData2.name);
        setECastimg(URL.createObjectURL(ev.target.files[0]));
        setCastphoto(formData2.name);
        
        EditCastImg(editCastid,formData2);
        showCast();
        seteditCastid("");
        seteditCastName("");
        showCast();
        showCast();
    }

  /////

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

    const showAdmins = async () => {
        try {
            ObtenerAdmins()
            .then((response) => {
                const data = response.data;
                setDataAdmins(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    const showGeneros = async () => {
        try {
            ObtenerGeneros()
            .then((response) => {
                const data = response.data;
                setDataGeneros(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    

    const showMovies = async () => {
        try {
            GetMovies()
            .then((response) => {
                const data = response.data;
                setMovies(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    const showPlataformas = async () => {
        try {
            ObtenerPlataformas()
            .then((response) => {
                const data = response.data;
                setDataPlataforma(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
            //console.log(dataPlataformas);  
        } catch (e) {
            console.log(e);
        }
    }
    
    const showCast = async () => {
        try {
            ObtenerCast()
            .then((response) => {
                const data = response.data;
                setdataCast(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
            //console.log(dataPlataformas);  
        } catch (e) {
            console.log(e);
        }
    }
    

    useEffect(() => {
        
        showUsers();
        showAdmins();
        showGeneros();
        showMovies();
        showPlataformas();
        showCast();
    }, []);

    return (

       

       <div className="Dashboard">

            <Header/>
           
            

            {
                localStorage.getItem('Token') != null && localStorage.getItem('UserId') != null ?
                    <div className="row text_aviso mt-4">
                        {
                        localStorage.getItem('Rol') != null && localStorage.getItem('Rol') == "Admin" ?
                        
                        <div className="main">

                                <div className="row">
                                    <div class="dashnav col-3">

                                    {/* st */}

                                        <nav id="" class="d-lg-block sidebar  bg-white">
                                            <div class="position-sticky">
                                                <div className="h3">Dashboard</div>
                                                <div class="list-group list-group-flush mx-3 mt-4">
                                                    <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                                        Informes</a>
                                                    <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                        Admin usuarios</a>
                                                    <a class="nav-link" id="nav-Cusro-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="nav-Cusro" aria-selected="false">
                                                        Admin Generos</a>
                                                    <a class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                                        Admin Pelis</a>
                                                    <a class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                                        Casts</a>
                                                    <a class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#tab6" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                                        Plataformas</a>
                                                </div>
                                            </div>
                                        </nav>

                                        

                                      {/*ebd*/}

                                    </div>
                                    <div className="col-8">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab1">
                                                {/* tab1 */}
                                                <h3>Info de las tablas</h3>
                                               
                                            </div>
                                            <div class="tab-pane" id="tab2">
                                                {/* tab2 Admin users */}
                                                <h3>Admin Usuarios</h3>
                                                <br />
                                                <p>crear usuarios rol: Admin</p>
                                                
                                                <div className="row justify-content-center">
                                                
                                                    <div className="col-4">
                                                        <div className="col-12 mb-3"><input className="form-control" type="text" name="username" placeholder="Username" onChange={e => setUserName(e.target.value)} value={UserName}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="email" name="email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} value={UserEmail}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="password" name="password" placeholder="Password" onChange={e => setUserPass(e.target.value)} value={UserPass}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)" /></div>
                                                        <div className="col-12 mb-3"></div>
                                                        <div className="col-12 mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                            CrearUser(UserName,UserEmail,UserPass,"Admin",localStorage.getItem('Token'));
                                                            showAdmins();
                                                            setUserName("");        
                                                            setUserEmail("");               
                                                            setUserPass("");  
                                                            swal("exito!", "Se Creo un Admin!", "success"); 
                                                            showAdmins(); 
                                                        }}>Registrar Admin</button></div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="col-12 mb-3"><input className="form-control" type="text" name="username" placeholder="id" readonly onChange={e => setEUserid(e.target.value)} value={EUserid} readOnly={true}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="text" name="username" placeholder="Username" onChange={e => setEUserName(e.target.value)} value={EUserName}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="email" name="email" placeholder="Email" onChange={e => setEUserEmail(e.target.value)} value={EUserEmail}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="password" name="password" placeholder="Password" onChange={e => setEUserPass(e.target.value)} value={EUserPass}/></div>
                                                        <div className="col-12 mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                            EditUser(EUserid,UserName,UserEmail,UserPass,localStorage.getItem('Token'));
                                                            showAdmins();
                                                            setEUserid("");
                                                            setEUserName("");        
                                                            setEUserEmail("");               
                                                            setEUserPass("");        
                                                            swal("exito!", "Cambio de informacion fue un exito!", "success");  
                                                            showAdmins();
                                                        }}>Editar Usuario</button></div>
                                                    </div>
                                                
                                                </div> 
                                                    
                                                    
                                                    

                                                
                                                <hr />
                                                    <div class="title">
                                                        <h4>Usuarios Admin</h4>
                                                    </div>
                                                    
                                                    <div className='tabla'>
                                                        <div className="pre-scrollable">
                                                            <table class="table table-hover mt-1 content-table">
                                                                <thead className='thead'>
                                                                <tr className='columna'>
                                                                    <th class="table-secondary one" scope="col">nombre</th>
                                                                    <th class="table-secondary one" scope="col">Usuario</th>
                                                                    <th class="table-secondary one" scope="col">Rol</th>
                                                                    <th class="table-secondary one" scope="col">Fecha</th>    
                                                                    <th class="table-secondary one" scope="col">Editar</th>      
                                                                    <th class="table-secondary one" scope="col">Eliminar</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody class="overflow-auto table-light">
                                                                {
                                                                    dataAdmins.map((Admins, index) =>
                                                                        <tr className='columna' key={index}
                                                                            onClick={() => {   
                                                                        }}>
                                                                            {Admins.filename == "" ?
                                                                            <th className='one' scope="col"><img style={{height:"62px", width:"62px"}} src={avatar} alt="" /></th>
                                                                            : 
                                                                            <th className='one' scope="col"><img class="profileuser" src={`http://localhost:3001/${Admins.filename}`}/></th>
                                                                            }
                                                                            
                                                                            <th className='one' scope="col">{Admins.name}</th>
                                                                            <td className='one' scope="col">{Admins.role}</td>
                                                                            <td className='one' scope="col">{Admins.createdAt}</td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                                //alert(`alert: ${Admins._id}`);
                                                                                setEUserid(Admins._id);
                                                                                setEUserName(Admins.name);        
                                                                                setEUserEmail(Admins.email);               
                                                                                setEUserPass(Admins.password);       
                                                                            //                                                   
                                                                            }} >Editar</button></td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Admins._id}`);   

                                                                            swal({
                                                                                title: "Esta seguro?",
                                                                                text: "una vez eliminado, no se podera recuperar!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                              })
                                                                              .then((willDelete) => {
                                                                                if (willDelete) {
                                                                                      
                                                                                  swal("Poof! la pelicula fue eliminada!", {
                                                                                    icon: "success",
                                                                                  });
                                                                                  DeleteUsuario(Admins._id,localStorage.getItem('Token')); 
                                                                                  showAdmins();
                                                                                } else {
                                                                                  swal("Peticion de eliminar pelicual canelada");
                                                                                }
                                                                              });
                                                                              showAdmins();
                                                                                                                              
                                                                            }} >Eliminar</button></td>
                                                                            
                                                                        </tr>
                                                                        
                                                                    ) 
                                                                        
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                
                                                    
                                                <hr />
                                                    <div class="title">
                                                        <h4>Usuarios</h4>
                                                    </div>
                                                    
                                                    <div className='tabla'>
                                                        <div className="pre-scrollable">
                                                            <table class="table table-hover mt-1 content-table">
                                                                <thead className='thead'>
                                                                <tr className='columna'>
                                                                    <th class="table-secondary one" scope="col">Icono</th>
                                                                    <th class="table-secondary one" scope="col">Usuario</th>
                                                                    <th class="table-secondary one" scope="col">Rol</th>
                                                                    <th class="table-secondary one" scope="col">Fecha</th>     
                                                                    <th class="table-secondary one" scope="col">Eliminar</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody class="overflow-auto table-light">
                                                                {
                                                                    dataUsers.map((Users, index) =>
                                                                        <tr className='columna' key={index}
                                                                            onClick={() => {   
                                                                        }}>
                                                                            {Users.filename == "" ?
                                                                            <th className='one' scope="col"><img style={{height:"62px", width:"62px"}} src={avatar} alt="" /></th>
                                                                            : 
                                                                            <th className='one' scope="col"><img class="profileuser" src={`http://localhost:3001/${Users.filename}`}/></th>
                                                                            }
                                                                            
                                                                            <th className='one' scope="col">{Users.name}</th>
                                                                            <td className='one' scope="col">{Users.role}</td>
                                                                            <td className='one' scope="col">{Users.createdAt}</td>
                                                                            
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Users._id}`); 

                                                                            swal({
                                                                                title: "Esta seguro?",
                                                                                text: "una vez eliminado, no se podera recuperar!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                              })
                                                                              .then((willDelete) => {
                                                                                if (willDelete) {
                                                                                          
                                                                                  swal("Poof! la pelicula fue eliminada!", {
                                                                                    icon: "success",
                                                                                  });
                                                                                  DeleteUsuario(Users._id,localStorage.getItem('Token'));   
                                                                                  showUsers();
                                                                                } else {
                                                                                  swal("Peticion de eliminar pelicual canelada");
                                                                                }
                                                                              });
                                                                              showUsers();
                                                                                                                          
                                                                            }} >Eliminar</button></td>
                                                                            
                                                                        </tr>
                                                                        
                                                                    ) 
                                                                        
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                            </div>
                                            <div class="tab-pane" id="tab3">
                                                <h3>Agregar, Editar y eliminar Generos</h3>
                                                <p>crear usuarios rol: Admin</p>
                                                
                                                    <div className="row justify-content-center">
                                                        <div className="col-4">
                                                            <div className="col-12 mb-3"><input className="form-control" type="text" name="Categoria" placeholder="Categoria" onChange={e => setCatName(e.target.value)} value={CatName}/></div>
                                                            <div className="col-12 mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                                CrearGenero(CatName,localStorage.getItem('Token'));
                                                                showGeneros();
                                                                setCatName("");   
                                                                swal("exito!", "Se Creo un Genero!", "success"); 
                                                                showGeneros();   
                                                            }}>Registrar Genero</button></div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="col-12 mb-3"><input readonly className="form-control" type="text" name="id" placeholder="id" onChange={e => setEidCatName(e.target.value)} value={EidCatName} readOnly={true}/></div>
                                                            <div className="col-12 mb-3"><input className="form-control" type="text" name="Categoria" placeholder="Categoria" onChange={e => setECatName(e.target.value)} value={ECatName}/></div>
                                                            <div className="col-12 mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                                EditGenero(EidCatName,ECatName,localStorage.getItem('Token'));
                                                                showGeneros();
                                                                setECatName("");        
                                                                setEidCatName("");  
                                                                swal("exito!", "Cambio de informacion fue un exito!", "success"); 
                                                                showGeneros();         
                                                            }}>Editar Genero</button></div>
                                                        </div>
                                                    </div>
                                                    
                                                
                                                <hr />
                                                    <div class="title">
                                                        <h4>Generos</h4>
                                                    </div>
                                                    
                                                    <div className='tabla'>
                                                        <div className="pre-scrollable">
                                                            <table class="table table-hover mt-1 content-table">
                                                                <thead className='thead'>
                                                                <tr className='columna'>
                                                                    <th class="table-secondary one" scope="col">Genero</th>
                                                                    <th class="table-secondary one" scope="col">Editar</th>     
                                                                    <th class="table-secondary one" scope="col">Eliminar</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody class="overflow-auto table-light">
                                                                {
                                                                    dataGeneros.map((Generos, index) =>
                                                                        <tr className='columna' key={index}
                                                                            onClick={() => {   
                                                                        }}>

                                                                            <td className='one' scope="col">{Generos.Genero}</td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Generos._id}`);    
                                                                            setEidCatName(Generos._id); 
                                                                            setECatName(Generos.Genero); 
                                                                                                                            
                                                                            }} >Editar</button></td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Generos._id}`);  

                                                                            swal({
                                                                                title: "Esta seguro?",
                                                                                text: "una vez eliminado, no se podera recuperar!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                              })
                                                                              .then((willDelete) => {
                                                                                if (willDelete) {
                                                                                    
                                                                                  swal("Poof! la pelicula fue eliminada!", {
                                                                                    icon: "success",
                                                                                  });
                                                                                  DeleteGenero(Generos._id,localStorage.getItem('Token'));   
                                                                                  showGeneros();  
                                                                                } else {
                                                                                  swal("Peticion de eliminar pelicual canelada");
                                                                                }
                                                                              });

                                                                              showGeneros();        
                                                                            }} >Eliminar</button></td>
                                                                            
                                                                        </tr>
                                                                        
                                                                    ) 
                                                                        
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                            </div>
                                            <div class="tab-pane" id="tab4">
                                                <h3>Pelis</h3>
                                                <div className="row justify-content-center">
                                                    <div className="col-7">
                                                        <button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                    
                                                        navigate('/NewMovie');  
                                                                                                        
                                                        }}>crear Pelis</button>
                                                    </div>
                                                </div>
                                                
                                                    <div class="col-md-12 mt-3">
                                                        <div className="row">
                                                            {   
                                                                dataMovies.map((Movie, index) =>
                                                                <div key={index}
                                                                    
                                                                    className="col-4 ">
                                                                    
                                                                        <div class="card">
                                                                            <div class="card-body">
                                                                                {Movie.Portada == "" ?
                                                                                <img onClick={() => {
                                                                                    alert(Movie.Name);
                                                                                    navigate(`/EditPelicula/${Movie.Name}`)
                                                                                }} style={{height:"200px", width:"150px"}} src={poster} alt="" />
                                                                                :
                                                                                <img onClick={() => {
                                                                                    alert(Movie.Name);
                                                                                    navigate(`/EditPelicula/${Movie.Name}`)
                                                                                }} class="profileuser" src={`http://localhost:3001/${Movie.Portada}`}/>
                                                                                }
                                                                                <h5 >Name: {Movie.Name}</h5>
                                                                                <h4 >email: {Movie.Fecha}</h4>
                                                                                <p> pass: {Movie.Portada}</p>
                                                                                <button className='btn-eliminar' onClick={() => {
                                                                                //alert(`alert: ${Admins._id}`);   

                                                                                swal({
                                                                                    title: "Esta seguro?",
                                                                                    text: "una vez eliminado, no se podera recuperar!",
                                                                                    icon: "warning",
                                                                                    buttons: true,
                                                                                    dangerMode: true,
                                                                                })
                                                                                .then((willDelete) => {
                                                                                    if (willDelete) {
                                                                                        
                                                                                    swal("Poof! la pelicula fue eliminada!", {
                                                                                        icon: "success",
                                                                                    });
                                                                                    DeleteMovie(Movie._id,localStorage.getItem('Token')); 
                                                                                    showMovies(); 
                                                                                    } else {
                                                                                    swal("Peticion de eliminar pelicual canelada");
                                                                                    }
                                                                                });
                                                                                showMovies(); 
                                                                                                                                
                                                                                }} >Eliminar</button>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                </div>
                                                            ) 
                                                            }
                                                        </div>

                                                    </div>
                                            </div>
                                            <div class="tab-pane" id="tab5">
                                                <h3>Agregar, Editar y eliminar Cast</h3>
                                                
                                                <h3>Admin Cast</h3>
                                                <br />
                                                
                                                
                                                <div className="row justify-content-center">
                                                
                                                    <div className="col-4">
                                                    <p>crear Cast</p>
                                                        <div className="col-12 mb-3"><input className="form-control" type="text" name="username" placeholder="Username" onChange={e => setCastName(e.target.value)} value={CastName}/></div>
                                                        <div className="col-12 mb-3"><p> imagen</p>
                                                                <button onClick={InputClick}>Elegir imagen</button>
                                                                {
                                                                Castimg == "" ?
                                                                 <div className="div">

                                                                 </div>
                                                                :
                                                                <img class="profileuser" src={`${Castimg}`}/>
                                                                }
                                                                <input
                                                            
                                                                    type="file"
                                                                    accept="image/png, image/gif, image/jpeg"
                                                                    className="input-login"
                                                                    id="pic-edit"
                                                                    style={{display: 'none'}}
                                                                    ref={fileInputRef} 
                                                                    onChange={handleSubmit}
                                                                /></div>
                                                        
                                                        <div className="col-12 mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                            debugger
                                                            CrearCast(CastName,Castphoto,localStorage.getItem('Token')).then((response) => {
                                                                const data = response.data;
                                                                showCast();
                                                                EditCastImg(response.data._id,formData);
                                                                swal("exito!", "Se Creo un cast!", "success"); 
                                                                showCast();
                                                                console.log(response);              
                                                            })
                                                            .catch((error) => {
                                                                console.log(error);
                                                            }); 

                                                            // showAdmins();
                                                            // setUserName("");        
                                                            // setUserEmail("");               
                                                            // setUserPass("");         
                                                            // showAdmins(); 
                                                        }}>Registrar Admin</button></div>
                                                    </div>
                                                    <div className="col-4">
                                                    <p>editar Cast</p>
                                                        <div className="col-12 mb-3"><input className="form-control" type="text" name="username" placeholder="id" readonly onChange={e => seteditCastid(e.target.value)} value={editCastid} readOnly={true}/></div>
                                                        <div className="col-12 mb-3"><input className="form-control" type="text" name="username" placeholder="Username" onChange={e => seteditCastName(e.target.value)} value={editCastName}/></div>
                                                        
                                                        <div className="col-12 mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                            EditCast(editCastid,editCastName,localStorage.getItem('Token'));
                                                            showCast();
                                                            seteditCastid("");
                                                            seteditCastName("");
                                                            swal("exito!", "Cambio de informacion fue un exito!", "success"); 
                                                            showCast();
                                                        }}>Editar Nombre cast</button></div>

                                                        {
                                                           editCastid == "" ?
                                                            <div className="div">
                                                            
                                                            </div>
                                                            
                                                            :
                                                            <div className="col-12 mb-3"><p> imagen</p>
                                                                <button onClick={InputClickEcast}>Editar imagen</button>
       
                                                                <img class="profileuser" src={`${ECastimg}`}/>
                                                                
                                                                <input
                                                            
                                                                    type="file"
                                                                    accept="image/png, image/gif, image/jpeg"
                                                                    className="input-login"
                                                                    id="pic-edit"
                                                                    style={{display: 'none'}}
                                                                    ref={fileInputRef2} 
                                                                    onChange={
                                                                        handleSubmitECast
                                                                    }
                                                            /></div>
                                                        }
                                                        
                                                        
                                                    </div>
                                                
                                                </div> 
                                                    
                                                    
                                                    

                                                
                                                <hr />
                                                    <div class="title">
                                                        <h4>Usuarios Admin</h4>
                                                    </div>
                                                    
                                                    <div className='tabla'>
                                                        <div className="pre-scrollable">
                                                            <table class="table table-hover mt-1 content-table">
                                                                <thead className='thead'>
                                                                <tr className='columna'>
                                                                    <th class="table-secondary one" scope="col">img</th>   
                                                                    <th class="table-secondary one" scope="col">name</th>
                                                                    
                                                                    <th class="table-secondary one" scope="col">Editar</th>      
                                                                    <th class="table-secondary one" scope="col">Eliminar</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody class="overflow-auto table-light">
                                                                {
                                                                    dataCast.map((Cast, index) =>
                                                                        <tr className='columna' key={index}
                                                                            onClick={() => {   
                                                                        }}>
                                                                            {Cast.photo == "" ?
                                                                            <th className='one' scope="col"><img style={{height:"62px", width:"62px"}} src={avatar} alt="" /></th>
                                                                            : 
                                                                            <th className='one' scope="col"><img class="profileuser" src={`http://localhost:3001/${Cast.photo}`}/></th>
                                                                            }
                                                                            
                                                                            <th className='one' scope="col">{Cast.name}</th>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                                //alert(`alert: ${Admins._id}`);
                                                                                seteditCastid(Cast._id);
                                                                                seteditCastName(Cast.name);        
                                                                                setECastimg(Cast.photo);

                                                                            //                                                   
                                                                            }} >Editar</button></td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Admins._id}`);   

                                                                            swal({
                                                                                title: "Esta seguro?",
                                                                                text: "una vez eliminado, no se podera recuperar!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                              })
                                                                              .then((willDelete) => {
                                                                                if (willDelete) {
                                                                                      
                                                                                  swal("Poof! la pelicula fue eliminada!", {
                                                                                    icon: "success",
                                                                                  });
                                                                                  DeleteCast(Cast._id,localStorage.getItem('Token')); 
                                                                                  showCast();
                                                                                } else {
                                                                                  swal("Peticion de eliminar pelicual canelada");
                                                                                }
                                                                              });
                                                                              showCast();
                                                                                                                              
                                                                            }} >Eliminar</button></td>
                                                                            
                                                                        </tr>
                                                                        
                                                                    ) 
                                                                        
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>


                                            </div>
                                            <div class="tab-pane" id="tab6">
                                                <h3>Agregar, Editar y eliminar plataforma</h3>
                                                <label className='text-login'>Plataforma</label>
                                                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                                                    
                                                        
                                                        <div className="row justify-content-center">
                                                            <div className="col-6">
                                                                <div className="col-12 text-center">
                                                                    
                                                                    <input
                                                                        
                                                                        type="text"
                                                                        className="input-login"
                                                                        id="username"
                                                                        placeholder="Nombre Plataforma"
                                                                        onChange={e => setPlataformaName(e.target.value)} value={plataformaName}
                                                                        />

                                                                </div>
                                                                <div className="col-12 d-flex flex-column">

                                                                    <button  className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                                    
                                                                    CrearPlataforma(plataformaName,localStorage.getItem('Token'))
                                                                    showPlataformas(); 
                                                                    setPlataformaName("");
                                                                    swal("exito!", "Se Creo una plataforma!", "success"); 
                                                                    showPlataformas();                                       
                                                                    }}>Crear</button>

                                                                    {/*<Link to="/register">
                                                                        ¿No tienes cuenta? Registrate
                                                                    </Link> */}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="col-12 text-center">
                                                                        <input
                                                                            
                                                                            type="text"
                                                                            className="input-login"
                                                                            id="username"
                                                                            placeholder="Nombre Plataforma"
                                                                            readOnly={true}
                                                                            onChange={e => setEidPlataforma(e.target.value)} value={EidPlataforma}
                                                                            />
                                                                        <input
                                                                            
                                                                            type="text"
                                                                            className="input-login"
                                                                            id="username"
                                                                            placeholder="Nombre Plataforma"
                                                                            onChange={e => seteditPlataformaName(e.target.value)} value={editPlataformaName}
                                                                            />

                                                                </div>
                                                                <div className="col-12 d-flex flex-column">

                                                                    <button  className="btn btn-primary d-block w-100" type="submit" style={{background: '#d15855'}} onClick={() => {
                                                                   
                                                                    EditPlataforma(EidPlataforma,editPlataformaName,localStorage.getItem('Token'));
                                                                    showPlataformas();  
                                                                    setEidPlataforma("");
                                                                    seteditPlataformaName("");
                                                                    swal("exito!", "Cambio de informacion fue un exito!", "success"); 
                                                                    showPlataformas();  
                                                                    }}>Editar</button>

                                                                    {/*<Link to="/register">
                                                                        ¿No tienes cuenta? Registrate
                                                                    </Link> */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                        
                                                        
                                                    
                                                        
                                                    
                                                </div>
                                                
                                                 <hr />
                                                    <div class="title">
                                                        <h4>Generos</h4>
                                                    </div>
                                                    
                                                    <div className='tabla'>
                                                        <div className="pre-scrollable">
                                                            <table class="table table-hover mt-1 content-table">
                                                                <thead className='thead'>
                                                                <tr className='columna'>
                                                                    <th class="table-secondary one" scope="col">Genero</th>
                                                                    <th class="table-secondary one" scope="col">Editar</th>     
                                                                    <th class="table-secondary one" scope="col">Eliminar</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody class="overflow-auto table-light">
                                                                {
                                                                    dataPlataformas.map((Plataformas, index) =>
                                                                        <tr className='columna' key={index}
                                                                            onClick={() => {   
                                                                        }}>

                                                                            <td className='one' scope="col">{Plataformas.name}</td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Generos._id}`);    
                                                                            setEidPlataforma(Plataformas._id); 
                                                                            seteditPlataformaName(Plataformas.name); 
                                                                                                                            
                                                                            }} >Editar</button></td>
                                                                            <td className='one' scope="col"> <button className='btn-eliminar' onClick={() => {
                                                                            //alert(`alert: ${Generos._id}`);  

                                                                            swal({
                                                                                title: "Esta seguro?",
                                                                                text: "una vez eliminado, no se podera recuperar!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                              })
                                                                              .then((willDelete) => {
                                                                                if (willDelete) {
                                                                                    
                                                                                  swal("Poof! la pelicula fue eliminada!", {
                                                                                    icon: "success",
                                                                                  });
                                                                                  DeletePlataforma(Plataformas._id,localStorage.getItem('Token'));   
                                                                                  showPlataformas();
                                                                                } else {
                                                                                  swal("Peticion de eliminar pelicual canelada");
                                                                                }
                                                                              });
        
                                                                              showPlataformas();                   
                                                                            }} >Eliminar</button></td>
                                                                            
                                                                        </tr>
                                                                        
                                                                    ) 
                                                                        
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 

                        </div>   
                        
                        :
                        <div className="aviso">
                         <img src={Lock} className="lock" />
                        
                        <p class="avisoT">No tienes Acceso Disponible</p>
                    </div>
                        }
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

export default Dashboard;