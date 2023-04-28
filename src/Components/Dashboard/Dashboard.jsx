import './Dashboard.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import {ObtenerUsuarios} from '../../Services/user.service';

import avatar from '../Assets/watching.png';

const Dashboard = () => {
    
    const navigate = useNavigate();

    const [dataUsers, setDataUsers] = useState([]);
     
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
        
        showUsers()
                
    }, []);

    return (

       

       <div className="Dashboard">

            <Header/>

            <div className="main">

                <div className="row">
                    <div className="col-3">

                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                        <div class="position-sticky">
                            <div className="h3">Dashboard</div>
                            <div class="list-group list-group-flush mx-3 mt-4">
                                <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                    Informes</a>
                                <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                    Admin usuarios</a>
                                <a class="nav-link" id="nav-Cusro-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="nav-Cusro" aria-selected="false">
                                    Admin categorias</a>
                                <a class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                    Admin Pelis</a>
                                <a class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                    Casts</a>
                                <a class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#tab6" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                    Plataformas</a>
                            </div>
                        </div>
                    </nav>

                    </div>
                    <div className="col-8">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab1">
                                <h3>Info de las tablas</h3>
                                <a class="btn btn-primary btnNext" >Next</a>
                            </div>
                            <div class="tab-pane" id="tab2">
                                <h3>Admin Usuarios</h3>
                                <br />
                                <p>crear usuario: Admin</p>
                                <div class="title">
                                    <h4>Usuarios</h4>
                                </div>
                                <div className='tabla'>
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
                                                alert(Users.name);     
                                                //EliminarTareas();
                                                //setMessage('');                                                    
                                                }} >Eliminar</button></td>
                                                
                                            </tr>
                                            
                                        ) 
                                            
                                    }
                                    </tbody>
                                </table>
                                </div>

                            </div>
                            <div class="tab-pane" id="tab3">
                                <h3>Agregar, Editar y eliminar Categorias</h3>
                                <a class="btn btn-primary btnPrevious" >Previous</a>
                            </div>
                            <div class="tab-pane" id="tab4">
                                <h3>Agregar, Editar y eliminar Pelis</h3>
                                <a class="btn btn-primary btnPrevious" >Previous</a>
                                {/* <a class="btn btn-primary btnPrevious" onClick={() => {
                                        
                                        InputClick()
                                                
                                }} >Previous</a> */}
                            </div>
                            <div class="tab-pane" id="tab5">
                                <h3>Agregar, Editar y eliminar Cast</h3>
                                <a class="btn btn-primary btnNext" >Next</a>
                            </div>
                            <div class="tab-pane" id="tab6">
                                <h3>Agregar, Editar y eliminar plataforma</h3>
                                <a class="btn btn-primary btnNext" >Next</a>
                                <a class="btn btn-primary btnPrevious" >Previous</a>
                            </div>
                            
                        </div>
                    </div>
                </div> 
           
            </div>   

            <Footer/>

        </div>

       


    );
}

export default Dashboard;