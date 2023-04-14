import './Movie.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

import {useState, useRef, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom';

import { ObtenerUsuario } from '../../Services/user.service';
import { GetMovie} from '../../Services/movies.service';
import { ObtenerComentaiosMovie } from '../../Services/Comentarios';
import { ObtenerCriticasMovie } from '../../Services/Criticas';

import poster from '../Assets/Poster.png';

const Movie = () => {
    
    const navigate = useNavigate();
   
    
    const [CriticaText, setCrititcaText] = useState('');
    const [ComentarioText, setComentariotext] = useState('');

    const [dataMovie, setDataMovie] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    
    const [dataComentarios, setComentarios] = useState([]);
    const [dataCriticas, setCriticas] = useState([]);

    let {Name} = useParams();
    
    const showMovie = async () => {
        try {
            GetMovie(Name)
            .then((response) => {
                const data = response.data;
                setDataMovie(response.data);
                // console.log(response);      
                // console.log(response.data._id);       
                setCriticasMovie(response.data._id);
                setComentariosMovie(response.data._id);   
                
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    const setUser = async (id_user) => {
        try {
            ObtenerUsuario(id_user)
            .then((response) => {
                const data = response.data;
                setDataUser(response.data);
  
                
            })
            .catch((error) => {
                console.log(error);
            });    
            console.log(dataUser);
        } catch (e) {
            console.log(e);
        }
    }

    const setComentariosMovie = async (id_movie) => {
        try {
            ObtenerComentaiosMovie(id_movie)
            .then((response) => {
                const data = response.data;
                setComentarios(response.data);

                
            })
            .catch((error) => {
                console.log(error);
            });    
            //console.log(dataUser);
        } catch (e) {
            console.log(e);
        }
    }

    const setCriticasMovie = async (id_movie) => {
        try {
            ObtenerCriticasMovie(id_movie)
            .then((response) => {
                const data = response.data;
                setCriticas(response.data);

                
            })
            .catch((error) => {
                console.log(error);
            });    
            //console.log(dataUser);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        
        
        showMovie();  
        setUser(localStorage.getItem('UserId').toString());
                
    }, []);

    return (

       

       <div className="Main">

            <Header/>

            <div className="div" id="main" class="container" >Movie
                 
                <h1>{Name}</h1>
                <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                         
                        <div className="col-6">
                               
                                <div class="card">
                                  <div class="card-body">
                                    {dataMovie.Portada == "" ?
                                    <img style={{height:"200px", width:"150px"}} src={poster} alt="" />
                                    :
                                    <img class="profileuser" src={`http://localhost:3001/${dataMovie.Portada}`}/>
                                    }
                                    <h5 >Name: {dataMovie.name}</h5>
                                    <h4 >Fecha: {dataMovie.Fecha}</h4>
                                    <p> portada: {dataMovie.Portada}</p>
                                    <p> tiempo: {dataMovie.Horas} : {dataMovie.Minutos}</p>
                                    <p> sipnosis: {dataMovie.Sinopsis}</p>
                                    <p> promedio: {dataMovie.Promedio}</p>
                                    <div className="row">
                                    
                                        {   
                                         dataMovie.Generos =! 0 ?
                                          <ul>
                                              <li>{dataMovie.Generos}</li>
                                             
                                          </ul>
                                          ///navigate(`/topic/${props.id}`)
                                            // dataMovie.Generos.map((Genero) =>
                                            //     <div className="col-4 ">
                                                    
                                            //         <ul>
                                            //             <li>{Genero}</li>
                                            //         </ul>
                                                    
                                            //     </div>
                                            
                                            // ) 
                                        :
                                          <div className="col-4 ">
                                                
                                          <ul>
                                              <li>sin generos</li>
                                              
                                          </ul>
                                      
                                          </div>
                                        }

                                    </div>


                                  </div>
                                </div>
       
                        </div>
                      
                    }
                  </div>
                </div>   

                {/* critica */}
                <br/>
                {
                    
                    dataUser != null && localStorage.getItem('UserId') != null ?
                        <div className="row text_aviso mt-4">
                            <div class="input-group mb-3">
                                <div className="col-2">Envia Critica</div>
                                <div className="col-7 p-0 d-flex align-items-center">
                                        <input onChange={e => setCrititcaText(e.target.value)} value={CriticaText} type="text" className="form-control" placeholder="Message..."
                                            aria-label="Message" aria-describedby="basic-addon1" />
                                </div>
                                <div className="col-2">
                                    <div class="buttonml input-group-append">
                                        <a onClick={() => {
                                            
                                    
                                    //InsertarAviso(localStorage.getItem("UserId"),idSubGrupo,AvisoText);
                                                                                    
                                    }} class="btn btn-primary" >Button</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    :
                        <div className="col-12" style={{backgroundColor: "lightblue"}}>Inicia Session para hacer una critica</div>
                }
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
                
                {/* comantarios */}
                <br/>
                {

                    dataUser != null && localStorage.getItem('UserId') != null ?
                        <div className="row text_aviso mt-4">
                            <div class="input-group mb-3">
                                <div className="col-2">Envia Comentario</div>
                                <div className="col-7 p-0 d-flex align-items-center">
                                        <input onChange={e => setComentariotext(e.target.value)} value={ComentarioText} type="text" className="form-control" placeholder="Message..."
                                            aria-label="Message" aria-describedby="basic-addon1" />
                                </div>
                                <div className="col-2">
                                    <div class="buttonml input-group-append">
                                        <a onClick={() => {
                                            
                                    
                                    //InsertarAviso(localStorage.getItem("UserId"),idSubGrupo,AvisoText);
                                                                                    
                                    }} class="btn btn-primary" >Button</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    :
                        <div className="col-12" style={{backgroundColor: "lightblue"}}>Inicia Session para hacer una critica</div>
                }
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
                <br />

            </div>

            <Footer/>

        </div>

       


    );
}

export default Movie;