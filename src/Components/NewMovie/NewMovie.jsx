import './NewMovie.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import pelis from '../Assets/pinocho.jpeg';

import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import { ObtenerGeneros } from '../../Services/generos.service';

import {CrearMovie} from '../../Services/movies.service';

const NewMovie = () => {
    
    const tabelement1 = document.getElementById("tab1");

    const navigate = useNavigate();
   
    const [NameMovie, setNMovie] = useState('');
    const [FechaMovie, setFMovie] = useState('');
    const [Sinopsis, setSMovie] = useState('');
    const [Portada, setSProtada] = useState('');
    const [Horas, setHour] = useState('');
    const [Minutos, setMin] = useState('');
    
    const [Moviegeneros, setMG] = useState([]);

    const [generos, setGeneros] = useState([]);
    const [selectedG, setName] = useState('');
    const [GenerosAr, setArtists] = useState([]);
    const [Generoshow, setshowG] = useState([]);

    // const InputClick = () => {
    //     // 👇️ open file input box on click of another element
    //     document.getElementById("nav-home-tab").click();
    // };


    const showGenero = async () => {
        try {
            ObtenerGeneros()
            .then((response) => {
                const data = response.data;
                setGeneros(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }
    
    const AddGenero = async (name) => {
        
        if(name != ""){
            
            if (!GenerosAr.includes(name)) {
                // ✅ only runs if value not in array
                //console.log(name);
                GenerosAr.push(name);
                setshowG(GenerosAr);
                console.log(GenerosAr + "add");
            }
            
        }
        
    }

    const removeGenero = async (index) => {
        
        if(index != null){
            
                debugger
                // ✅ only runs if value not in array
                //console.log(name);
                GenerosAr.splice(index,1);
                //setshowG(GenerosAr);
                console.log(GenerosAr + "add");
        
            
        }
        
    }

    
    useEffect(() => {
        
        showGenero();
       
            
                
    }, []);

    return (

       

        <div className="Main">
            <Header/>
            
            <div className="contenido" id="main">
                
                <br/>
                {/*<div className="row">

                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                    </div>
                    <div className="col-3" style={{backgroundColor: "Blue"}}>col-4
                    </div>
                    <div className="col-3" style={{backgroundColor: "Red"}}>col-4
                                 
                    </div>
                    <div className="col-3" style={{backgroundColor: "Green"}}>col-4
                    </div>
                </div>*/}
                
                <div className='formulario'>
                    <div className='bloque-datos'>
                        <h1>Agrega una Película</h1>
                        <div className="col-auto text-center detail">
                            
                            <input style={{'width':'100%'}}
                                type="text"
                                className="input-login"
                                id="Moviename"
                                placeholder="Nombre de la película"
                                onChange={e => setNMovie(e.target.value)} value={NameMovie}
                            />

                        </div>
                        <div className="col-auto text-center detail genero">
                            <select placeholder='Generos' name="Generos" onChange={e => setName(e.target.value)}>
                                <option value="">Género</option>
                                {   
                                    ///navigate(`/topic/${props.id}`)
                                    generos.map((Generos, index) =>
                                                                        
                                    <option value={Generos.Genero}>{Generos.Genero}</option>
                                ) 
                                }
                            </select>
                        
                            <button onClick={() => {
                                    
                                    AddGenero(selectedG);
                                    setshowG(GenerosAr);
                                    
                            }}>Agregar</button>
                        </div>
                        {/*<div className="col-auto text-center detail">

                            <input
                                
                                type="text"
                                className="input-login"
                                id="sinopsis"
                                placeholder="sinopsis"
                                onChange={e => setSMovie(e.target.value)} value={Sinopsis}
                            />

                        </div>*/}
                        <div id="publicacion" className='col-auto text-center detail'>
                            <div id="commentBoxP" contenteditable="true" dir="auto" class="commentBoxP" placeholder="Sinopsis"></div>
                        </div>
                        <div className="col-auto text-center detail tiempo">
                            <label>Duración: </label>
                            <input
                                
                                type="number"
                                className="input-login"
                                id="Horas"
                                placeholder="00"
                                onChange={e => setHour(e.target.value)} value={Horas}
                            />
                            <label> : </label>
                            <input
                                
                                type="number"
                                className="input-login"
                                id="Minutos"
                                placeholder="00"
                                onChange={e => setMin(e.target.value)} value={Minutos}
                            />
                            
                        </div>
                        <div className="col-auto text-center detail">
                            <label>Fecha de estreno:</label>
                            <input style={{'margin-left':'5px', 'width':'calc(100% - 153px)'}}
                                
                                type="date"
                                className="input-login"
                                id="Date"
                                placeholder="Fecha de pelicula"
                                onChange={e => setFMovie(e.target.value)} value={FechaMovie}
                            />

                        </div>
                    </div>
                    <div className='bloque-foto'>

                        <div className="col-auto text-center detail">
                            <div className='portada-peli'>
                                <div className='imagen-portada'>
                                    <img id='imagenPortada' src={pelis}/>
                                    <div className='blank'> {/*no-visible*/}
                                        <i class="fa-solid fa-plus cruz"></i>
                                    </div>
                                </div>
                                
                            </div>
                            <input
                                
                                type="file"
                                className="input-image"
                                id="btn-portada"
                                accept="image/*"
                                onChange={e => setSProtada(e.target.value)} value={Portada}
                            />

                        </div>
                    </div>
                </div>    

                <label htmlFor="">generos:</label>
                <label htmlFor="">* despues de agregar genero seleciona y elige ortra opcion el combo y se muestran</label>
                <label htmlFor="">* No se la razon</label>
                {   
                    ///mostrar los generos agregados
                    Generoshow.map((Genero, index) =>
                        <div className="col-4 ">
                            <ul>
                                <li>{Genero} 
                                    <a onClick={() => {
                        
                                    removeGenero(index)
                                                
                                    }} href="" > x</a> 
                                </li>
                            </ul>
                        </div>
                    ) 
            
                    ///mostrar los generos agregados
                }
                
                {/*boton add Movie*/}
                <br />
                <button id='addMovie'
                onClick={() => {      
                    debugger  
                    CrearMovie(NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr).then(() => {
                        navigate(`/EditPelicula/${NameMovie}`);              
                    })
                    .catch((error) => {
                        console.log(error);
                    }); 
                            
                }}>Añadir Pelicual</button>
                
            </div>

          {/* ds */}
          
          {/* 
            <div class="nav nav-tabs flex-column flex-sm-row navSubGrup" id="nav-tab" role="tablist">
                <button class="nav-link active" style={{display: 'none'}} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    1</button>
                <button class="nav-link" style={{display: 'none'}} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    2</button> 
            </div>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                    <p>1</p>
                    <a class="btn btn-primary btnNext" >Next</a>
                </div>
                <div class="tab-pane" id="tab2">
                <p>2</p>
                    <a class="btn btn-primary btnNext" >Next</a>
                    <a class="btn btn-primary btnPrevious" >Previous</a>
                </div>
                <div class="tab-pane" id="tab3">
                <p>3</p>
                    <a class="btn btn-primary btnPrevious" onClick={() => {
                              
                              InputClick()
                                       
                    }} >Previous</a>
                </div>
            </div> */}


            <Footer/>

        </div>

       


    );
}

export default NewMovie;