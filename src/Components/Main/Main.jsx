import './main.css'
//import Header from "../HeaderYFooter/Header";
import Header from "../Header2/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import {Get6Movies} from '../../Services/movies.service';
import {Obtener10Cast} from '../../Services/Cast.service';

import poster from '../Assets/Poster.png';
import avatar from '../Assets/watching.png';

import c1 from '../../img/moviesCollage.jpg';
import c2 from '../../img/chicago.jpg';
import c3 from '../../img/ny.jpg';

const Main = () => {
    
    const navigate = useNavigate();
   
    
    const [dataMovies, setdataMovies] = useState([]);
    const [dataCast, setdataCast] = useState([]);

    const showMovies = async () => {
        try {
            Get6Movies()
            .then((response) => {
                const data = response.data;
                setdataMovies(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    const showCast = async () => {
        try {
            Obtener10Cast()
            .then((response) => {
                const data = response.data;
                setdataCast(response.data);
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
        
        showMovies();
        showCast();

    }, []);

    return (

       

       <div className="Main">

            <Header/>

            <div className="div" id="main" class="container" >

                    <br/>
                   

                    {/* <div className="row mt-3">

                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >Register </h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 90% </li>
                                        <ol>
                                            <li>Falta usar tikets</li>
                                        </ol>
                                    <li> Estilo 0% </li>
                                        <ol>
                                            <li>Falta Estilo</li>
                                        </ol>
                                </ul>
                                <button onClick={() => {
                                
                                navigate('/Register');  
                                                                                
                                }}>Register</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >Login </h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 90% </li>
                                        <ol>
                                            <li>al registar direcionar a login</li>
                                        </ol>
                                    <li> Estilo 0% </li>
                                        <ol>
                                            <li>Falta Estilo</li>
                                        </ol>
                                </ul>
                                <button onClick={() => {
                                
                                navigate('/');  
                                                                                
                                }}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >Admin </h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 0%, componente no creado </li>

                                </ul>
                                <button onClick={() => {
                                
                                navigate('/Dashboard');  
                                                                                
                                }}>Dashboard</button>
                                </div>
                            </div>             
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >User </h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 50% </li>
                                        <ol>
                                            <li>poisible mostrar mas datos</li>
                                            <li>usar imgenes</li>
                                            <li>usar y editar editorial</li>
                                        </ol>
                                    <li> Estilo 0% </li>
                                        <ol>
                                            <li>Falta Estilo</li>
                                        </ol>
                                </ul>
                                <button onClick={() => {
                                
                                navigate('/User');  
                                                                                
                                }}>User</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >crear Pelis </h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 30% </li>
                                        <ol>
                                            <li>Flata imganes</li>
                                            <li>Flata otros campos</li>
                                        </ol>
                                    <li> Estilo 0% </li>
                                        <ol>
                                            <li>Falta Estilo</li>
                                        </ol>
                                </ul>
                                <button onClick={() => {
                                
                                navigate('/NewMovie');  
                                                                                
                                }}>crear Pelis</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >Peliculas </h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 25%, componente creado </li>
                                    <li> Conflicto en generos </li>
                                    <li> para mostrar rn url http://localhost:3000/DetallePelicula/"Movie" </li>
                                </ul>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >Busqueda</h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> Funcionalidad 0%, componente no creado </li>

                                </ul>
                                <button onClick={() => {
                                
                                navigate('/Movies');  
                                                                                
                                }}>Movies</button>
                                </div>
                            </div>             
                        </div>
                        <div className="col-4" >
                            <div class="card">
                                <div class="card-body">
                                <h5 >Error</h5>
                                <h4 > Progreso </h4>
                                <ul> 
                                    <li> falta estilo de error no found </li>
                                    <li> Para verlo usa cualquier url con /? que no exista vea rutas </li>
                                    <li> http://localhost:3000/"?"" </li>
                                </ul>
                                
                                </div>
                            </div>             
                        </div>
                        
                    </div> */}
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carrus carousel-inner">
                            <div class="carousel-item active"> 
                                <img src={c1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={c2} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={c3} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                     {/* separacion */}
                     <hr />
                     <h4>Movies</h4>
                    <div class="col-md-12 mt-3">
                        <div className="row">
                            {   
                                dataMovies.map((Movie, index) =>
                                <div key={index}
                                    onClick={() => {
                                        //alert(Movie.Name);
                                        navigate(`/DetallePelicula/${Movie.Name}`)
                                    }}
                                    className="col-3 ">
                                    
                                    <div class="card-DB">
                                        <div class="card-body-DB">
                                            {Movie.Portada == "" ?
                                            <img className='MainImg' src={poster} alt="" />
                                            :
                                            <img className='MainImg' src={`http://localhost:3001/${Movie.Portada}`}/>
                                            }
                                            <h5> {Movie.Name}</h5>
                                            <p> Calificación: {Movie.Promedio}</p>
                                            <p> Tiempo: {Movie.Horas}:{Movie.Minutos} hrs.</p>
                                            {/*<p> sipn: {Movie.Sinopsis}</p>
                                            <h4 >email: {Movie.Fecha}</h4>
                                            <p> img: {Movie.Portada}</p>*/}

                                            
                                        </div>
                                    </div>
                                
                                </div>
                                ) 
                            }
                        </div>

                        <hr />
                        <div className="row">
                            <h4>Cast</h4>
                            {   
                                dataCast.map((Cast, index) =>
                                <div key={index}
                                    onClick={() => {
                                        //alert(Cast.Name);
                                        swal("Eligio a", `${Cast.name}`, "success");   
                                        //navigate(`/DetallePelicula/${Movie.Name}`)
                                    }}
                                    className="col-4 ">
                                    
                                    <div class="card">
                                        <div class="card-body">
                                            {Cast.photo == "" ?
                                            <img class="profileuser" src={avatar} alt="" />
                                            :
                                            <img class="profileuser" src={`http://localhost:3001/${Cast.photo}`}/>
                                            }
                                            <h5 >Name: {Cast.name}</h5>
                                            {/*<p> img: {Cast.photo}</p>*/}
                                            <p> Película: {Cast.Movie}</p>
                                        </div>
                                    </div>
                                
                                </div>
                                ) 
                            }
                        </div>

                    </div>

            </div>

                

          


            <Footer/>

        </div>

       


    );
}

export default Main;