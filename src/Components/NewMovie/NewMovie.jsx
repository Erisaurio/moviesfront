import './NewMovie.css'
//import Header from "../HeaderYFooter/Header";
import Header from "../Header2/Header";
import Footer from '../HeaderYFooter/Footer';
import pelis from '../Assets/pinocho.jpeg';
import Lock from '../Assets/lock.png';
import CamaraIcon from '../Assets/camaraicon.png';


import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import { ObtenerGeneros } from '../../Services/generos.service';
import { ObtenerCast } from '../../Services/Cast.service';

import { CrearMovie } from '../../Services/movies.service';
import { EditMovieImg } from '../../Services/Storage';
import swal from 'sweetalert';

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
    const [selectedG, setselectedG] = useState('');
    const [GenerosAr, setArtists] = useState([]);
    const [Generoshow, setshowG] = useState([]);

    const [Casts, setCasts] = useState([]);
    const [selectedC, setselectedC] = useState('');
    const [Castshow, setCastshow] = useState([]);
    const [CastAr, setCastAr] = useState([]);
    const [CastArid, setCastArid] = useState([]);

    ///id storage
    const [Moviestorageid, setMoviestorageid] = useState('');
    const [Moviesnameaux, setMoviesnameaux] = useState('');
    const [MovieIMGaux, setMovieIMGaux] = useState('');
    ///
    const [CastSelected, setCastSelected] = useState([]);
    // const InputClick = () => {
    //     // 👇️ open file input box on click of another element
    //     document.getElementById("nav-home-tab").click();
    // };

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
        setMovieIMGaux(URL.createObjectURL(ev.target.files[0]));
        
        EditMovieImg(Moviestorageid,formData);
        swal("Pelicula agregada", "La portada ya fue actualizada!", "success");
        navigate(`/EditPelicula/${Moviesnameaux}`)
        
        
    }


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

    const showCast = async () => {
        try {
            ObtenerCast()
            .then((response) => {
                const data = response.data;
                setCasts(response.data);
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
                console.log(GenerosAr);
                setshowG(GenerosAr);
            }
            
        }
        
    }

    const removeGenero = async (index) => {
        
        if(index != null){
            
                debugger
                // ✅ only runs if value not in array
                //console.log(name);
                GenerosAr.splice(index,1);
                setshowG(GenerosAr);
                console.log(GenerosAr + "remove");
                setshowG(GenerosAr);
            
        }
        
    }

    const AddCast = async (id) => {
        
        if(id != ""){
            
            if (!CastAr.includes(id)) {
                // ✅ only runs if value not in array
                //console.log(name);
                CastAr.push(id);
                setCastshow(CastAr);
                console.log(CastAr + "add");
                setCastshow(CastAr);
            }
            
        }
        
    }

    const removeCast = async (index) => {
        
        if(index != null){
            
                debugger
                // ✅ only runs if value not in array
                //console.log(name);
                CastAr.splice(index,1);
                setCastshow(CastAr);
                console.log(CastAr + "remove");
                setCastshow(CastAr);
            
        }
        
    }

    const showCastSelected = async () => {
        
        debugger
        // for(let i = 0; i < CastAr; i++ )
        // {
            
        //     for(let j = 0; j < Casts; j++)
        //     {
                
        //         if(CastAr[i] == Casts[j]){
        //             console.log(CastAr[i] + "-" + Casts[j]);
        //         }
                
        //         setCastSelected()
        //     }
        // }
    
        

    }

   

    useEffect(() => {
        
        showGenero();
        showCast();
        //showCastSelected();

    }, []);

    return (

       

        <div className="Main">
            <Header/>
            
            


            {
                localStorage.getItem('Token') != null && localStorage.getItem('UserId') != null ?
                    <div className="row text_aviso mt-4">
                        {
                        localStorage.getItem('Rol') != null && localStorage.getItem('Rol') == "Admin" ?
                        
                            <div className="contenido" id="main">
                    
                                <br/>
                                {/* <div className="row">
                
                                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                                    </div>
                                    <div className="col-3" style={{backgroundColor: "Blue"}}>col-4
                                    </div>
                                    <div className="col-3" style={{backgroundColor: "Red"}}>col-4
                                                
                                    </div>
                                    <div className="col-3" style={{backgroundColor: "Green"}}>col-4
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-8">
                                    <img style={{ width: 45, height: 45 }} src={CamaraIcon}  className='Iconp'/>
                                    <h1 className='TituloAdd'>  Agrega una Pelicula</h1>

                                  
                                    
                                        <div className='formulario'>
                                        
                                            <div className='bloque-datos'>
                                                <hr />
                                                <div className="col-auto text-center detail">
                                                <label>Título:  </label>
                                                <input style={{'margin-left':'5px', 'width':'87%'}}
                                                        type="text"
                                                        className="input-login"
                                                        id="Moviename"
                                                        placeholder ="Titulo de la Película"
                                                        onChange={e => setNMovie(e.target.value)} value={NameMovie}
                                                    />
                        
                                                </div>
                                                <div className="col-auto text-center detail genero">
                                                    <select placeholder='Generos' name="Generos" onChange={e => setselectedG(e.target.value)}>
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
                                                            
                                                    }}>Guardar</button>
                                                </div>
                                                
                                                
                                                <div className="col-auto text-center detail">
                                                <label>Sinopsis: </label > 
                                               
                                                 <textarea name="sinopsisT" id="Moviename" cols="30" rows="3" placeholder="Añade una Sinopsis"
                                                 onChange={e => setSMovie(e.target.value)} value={Sinopsis}> 
                                                
                                                </textarea> 
                                                  {/* <input style={{'margin-left':'5px', 'width':'83%'}}
                                                        type="text"
                                                        className="input-sinopsis"
                                                        id="Moviename"
                                                        placeholder="Sinopsis de la película"
                                                        onChange={e => setSMovie(e.target.value)} value={Sinopsis}
                                                    />  */}
                                                     
                                                    
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

                                                <div className="col-auto text-center detail Cast">
                                                    <select placeholder='Cast' name="Cast" onChange={e => setselectedC(e.target.value)}>
                                                        <option value="">Cast</option>
                                                        {   
                                                            ///navigate(`/topic/${props.id}`)
                                                            Casts.map((Casts, index) =>
                                                                                                
                                                            <option value={Casts._id}>{Casts.name}</option>
                                                        ) 
                                                        }
                                                    </select>
                                                
                                                    <button onClick={() => {
                                                            
                                                            AddCast(selectedC);
                                                            setCastshow(CastAr);
                                                            //showCastSelected();
                                                    }}>Guardar</button>
                                                </div>

                                                <div className="d">
                                                    {/* <label htmlFor="">generos:</label> */}

                                                    {/* <label htmlFor="">* despues de agregar genero seleciona y elige ortra opcion el combo y se muestran</label>
                                                    <label htmlFor="">* No se la razon</label> */}
                                                    {   
                                                        ///mostrar los generos agregados
                                                        
                                                        Generoshow.map((Genero, index) =>
                                                            <div className="col-4 ">
                                                                <ul>
                                                                    <li>{Genero} 
                                                                        <a  className="a_eliminar" onClick={() => {
                                                            
                                                                        removeGenero(index)
                                                                                    
                                                                        }} > eliminar</a> 
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        ) 
                                                
                                                        ///mostrar los generos agregados
                                                    }
                                                    <hr /> 
                                                     {/* <label htmlFor="">Cast:</label>  */}
                                                    {   
                                                        ///mostrar los generos agregados
                                                        Castshow.map((Cast, index) =>
                                                            <div className="col-4 ">
                                                                <ul>
                                                                    <li>{Cast} 
                                                                        <a  className="a_eliminar" onClick={() => {
                                                            
                                                                        removeCast(index)
                                                                                    
                                                                        }} > Eliminar </a> 
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
                                                        CrearMovie(NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr,CastAr,localStorage.getItem('Token')).then((response) => {
                                                            //navigate(`/EditPelicula/${NameMovie}`); 
                                                            swal("Información Agregada Correctamente", "Selecciona una imagen de portada", "success");
                                                            setMoviestorageid(response.data._id);
                                                            setMoviesnameaux(response.data.Name);              
                                                        })
                                                        .catch((error) => {
                                                            console.log(error);
                                                        }); 
                                                                
                                                    }}>Crear Pelicula</button>
                                                </div>
                                            </div>
                                            
                                    
                                        
                                        </div>   
                                    </div>
                                    <div className="col-4" >

                                        {
                                            Moviestorageid != "" ?
                                                <div className='bloque-foto'>
                                                    
                                                    <div className="col-auto text-center detail">
                                                        <div className='portada-peli'>
                                                            <div className='imagen-portada'>
                                                            
                                                                <img id='imagenPortada' src={pelis}/>
                                                                
                                                                <div className='blank'> {/*no-visible*/}
                                                                    <i onClick={InputClick} class="fa-solid fa-plus cruz"></i>
                                                                </div>
                                                            
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="col-12 md-3">
                                                             {/* <p> imagen</p> */}
                                                             
                                                             <p></p>
                                                                <button   onClick={InputClick} style={{ width: "180px", height: "50px",}} >Elegir imagen</button>
                                                                
                                                               <input
                                                            
                                                                    type="file"
                                                                    accept="image/png, image/gif, image/jpeg"
                                                                    className="input-login"
                                                                    id="pic-edit"
                                                                    style={{display: 'none'}}
                                                                    ref={fileInputRef} 
                                                                    onChange={handleSubmit}
                                                        /></div>
                                                        
                                                    </div>


                                                    
                                                </div>
                                            :
                                            <div className='bloque-foto'>
                                                    
                                                

                                            </div>
                                        }

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

export default NewMovie;