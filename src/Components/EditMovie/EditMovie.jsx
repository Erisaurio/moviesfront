import './EditMovie.css'
//import Header from "../HeaderYFooter/Header";
import Header from "../Header2/Header";
import Footer from '../HeaderYFooter/Footer';
import Lock from '../Assets/lock.png';
import {useState, useRef, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom';

import { GetMovie, UpdateMovie} from '../../Services/movies.service';
import CamaraIcon2 from '../Assets/camaraicon2.png';

import { EditMovieImg } from '../../Services/Storage';


import { ObtenerGeneros } from '../../Services/generos.service';
import { ObtenerCast } from '../../Services/Cast.service';

import poster from '../Assets/Poster.png';
import swal from 'sweetalert';

const EditMovie = () => {
    
    const navigate = useNavigate();
    let {Name} = useParams();
    
    const [dataMovie, setDataMovie] = useState([]);

    const [NameMovie, setNMovie] = useState('');
    const [FechaMovie, setFMovie] = useState('');
    const [Sinopsis, setSMovie] = useState('');
    const [Horas, setHour] = useState('');
    const [Minutos, setMin] = useState('');

    const [Portada, setSProtada] = useState('');

    const [DataGeneros, setDataGeneros] = useState([]);
    const [DataCasts, setDataCasts] = useState([]);

    /////
    const [GenerosAr, setGenerosAr] = useState([]);
    const [CastAr, setCastAr] = useState([]);
    const [Castshow, setCastshow] = useState([]);
    const [Generoshow, setshowG] = useState([]);

    const [generos, setGeneros] = useState([]);
    const [Casts, setCasts] = useState([]);
    ///
    const [selectedG, setselectedG] = useState('');
    const [selectedC, setselectedC] = useState('');

    const formData = new FormData();
    const [image, setImage] = useState(null)
    const InputClick = () => {
        // 👇️ open file input box on click of another element
        fileInputRef.current.click();
    };

    const fileInputRef =useRef(null);
    //#region UpdateImgProfile
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        
    
        const myfile = ev.target.files[0]
        formData.append("myfile", myfile)
        debugger
        //console.log(`myfyle = ${myfile}`);
        //console.log(`formData = ${formData.get("myfile")}`);
        //setImage(URL.createObjectURL(ev.target.files[0]));
        //formData.append("id", id);
        EditMovieImg(dataMovie._id,formData);
          
        UpdateView();
        
    }
    
    const UpdateView = () => {
        swal("exito!", "Cambio de informacion fue un exito!", "success"); 
        showMovie();  
    }
    
    const showMovie = async () => {
        try {
            GetMovie(Name)
            .then((response) => {
                const data = response.data;
                setDataMovie(response.data);
                console.log(response);   
                setNMovie(response.data.Name);
                setSMovie(response.data.Sinopsis);
                setHour(response.data.Horas);
                setMin(response.data.Minutos);  
                
                //debugger
                
                //console.log(response.data.Fecha)
                var date = new Date(response.data.Fecha);
                var year = date.toLocaleString("default", { year: "numeric" });
                var month = date.toLocaleString("default", { month: "2-digit" });
                var day = date.toLocaleString("default", { day: "2-digit" });

                // Generate yyyy-mm-dd date string
                var formattedDate = year + "-" + month + "-" + day;
                console.log(formattedDate);
                setFMovie(formattedDate);


                setDataCasts(response.data.Cast);
                setDataGeneros(response.data.Generos);
                console.log(DataGeneros)  
                console.log(DataCasts)

                setGenerosAr(response.data.Generos);    
                setCastAr(response.data.Cast);   
                setshowG(response.data.Generos);
                setCastshow(response.data.Cast);
                
                 
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
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

    useEffect(() => {
        
        
        showMovie();  
        showCast();
        showGenero();
                
    }, []);

    return (

       

       <div className="Main">

            <Header/>
           

            {
                localStorage.getItem('Token') != null && localStorage.getItem('UserId') != null ?
                    <div className="row text_aviso mt-4">
                        {
                        localStorage.getItem('Rol') != null && localStorage.getItem('Rol') == "Admin" ?
                        
                            <div className="div" id="main" class="container" >
                                <img style={{ width: 45, height: 45 }} src={CamaraIcon2}  className='Iconp2'/>
                        
                                <h1 className='TituloEdit'>Editar Pelicula</h1>
                                
                                
                                <div class="col-md-12 mt-3" className='containerCards'>
                                
                                    <div className="row">
                                        {   
                                            
                                            <div className="col-4">
                                                
                                                    <div class="cardMovieE">
                                                        <div class="card-body">
                        
                                                            <div className="">
                                                                <div className="col-auto text-center">
                                                                    {dataMovie.Portada == "" ?
                                                                    <img style={{height:"200px", width:"150px"}} src={poster} alt="" />
                                                                    :
                                                                    <img class="profileuser" src={`http://localhost:3001/${dataMovie.Portada}`}/>
                                                                    }
                                                                    
                        
                                                                    <br />
                                                                    <p> </p>
                                                                    <button onClick={InputClick} id='editpic'>Editar Imagen</button>
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
                                                            
                                                           <ul className='DatosEditar'  style={{listStyle: 'none'}}  >
                                                            <li>
                                                            <span >ID: {dataMovie._id}</span>
                                                            </li>
                                                            <li>
                                                            <span> Titulo: {dataMovie.Name}</span>
                                                            </li>
                                                            <li>
                                                            <span> Sinopsis: {dataMovie.Sinopsis}</span>
                                                                
                                                            </li>
                                                            <li>
                                                            <span>Fecha: {dataMovie.Fecha}</span>
                                                            </li>
                                                            <li>
                                                                <span> Duración: {dataMovie.Horas}:{dataMovie.Minutos}</span>
                                                            </li>

                                                           </ul>

                                                           
                                                            {/* <h5 >id: {dataMovie._id}</h5>
                                                            <h5 >Name: {dataMovie.Name}</h5>
                                                            <h4 >email: {dataMovie.Fecha}</h4>
                                                            <p> Sinopsis: {dataMovie.Sinopsis}</p>
                                                            <p> portada: {dataMovie.Portada}</p>
                                                            <p> tiempo: {dataMovie.Horas} : {dataMovie.Minutos}</p>
                                                         */}
                                                            <div className="DatosEditar" >
                                                        
                                                                    {   
                                                                    DataGeneros != null ?
                                                                    
                          
                                                                    <ul  style={{listStyle: 'none'}}>
                                                                        <span>Género: </span>
                                                                        {   
                                                                            
                                                                            DataGeneros.map((Generos, index) =>
                                                                                                                    
                                                                                <li className='listaeditar'>{Generos}</li>
                                                                            ) 
                                                                        }
                                                                        
                                                                        
                                                                    </ul>
                                                                    
                                                                    :
                                                                    
                                                                            
                                                                    <ul  style={{listStyle: 'none'}}>
                                                                        <li className='listaeditar'>Sin Género</li>
                                                                        
                                                                    </ul>
                                                                
                                                                    
                                                                    }

        {   
                                                                    DataCasts != null ?
                                                                    <ul  style={{listStyle: 'none'}}>
                                                                            <span>Cast: </span>
                                                                        {   
                                                                            
                                                                            DataCasts.map((Cast, index) =>
                                                                                                                    
                                                                                <li className='listaeditar'>{Cast}</li>
                                                                            ) 
                                                                        }
                                                                        
                                                                        
                                                                    </ul>
                                                                    
                                                                    :
                                                                    
                                                                            
                                                                    <ul style={{listStyle: 'none'}} >
                                                                        <li className='listaeditar'>Sin Cast</li>
                                                                        
                                                                    </ul>
                                                                
                                                                    
                                                                    }
                        
                                                            </div> 
                        
                        
                                                        </div>
                                                    </div>
                        
                                            </div>
                                        
                                        }
                                       

                                        {
                                            
                                            <div className="col-8">
                                                {/* <h2>{Name}</h2> */}
                                            <div class="card2">
                                            <div class="card-body">
                    
                                                <div className="col-auto text-center detailEdit" >
                                                        <label className='LabelEdit'>Título:  </label>
                                                        <input style={{'margin-left':'5px', 'width':'60%'}}
                                                            
                                                            type="text"
                                                            className="input-login"
                                                            id="Name_Edit"
                                                            placeholder="Name"
                                                            onChange={e => setNMovie(e.target.value)} value={NameMovie}
                                                        />
                                                        <br />

                                                        {/* AQUI PUSE LA SINOPSIS ERI*/}

                                                        <label className='LabelEdit'>Sinopsis:  </label>
                                                        <textarea className='textareaE' name="sinopsisE" id=" " cols="30" rows="3" placeholder="Añade una Sinopsis"
                                                         onChange={e => setSMovie(e.target.value)} value={Sinopsis}> 
                                                
                                                        </textarea> 
                                                        <br />


                                                        <label className='LabelEdit'>Fecha de estreno:</label>
                                                        <input style={{'margin-right':'110px', 'width':'60%'}}
                                            
                                                        type="date"
                                                        className="input-login"
                                                        id="Date"
                                                        placeholder="Fecha de pelicula"
                                                        onChange={e => setFMovie(e.target.value)} value={FechaMovie}
                                                        />
                                                        <br />
                                                        <label className='LabelEdit' >Duración: </label>
                                                        
                                                        <input style={{'margin-right':'60px', 'width':'25%'}}
                                                            
                                                            type="text"
                                                            className="input-login"
                                                            id="Pass_Edit"
                                                            placeholder="Password"
                                                            onChange={e => setHour(e.target.value)} value={Horas}
                                                        />
                                                         
                                                        <input style={{'margin-right':'50px' ,'width':'25%'}}
                                                            
                                                            type="text"
                                                            className="input-login"
                                                            id="Pass_Edit"
                                                            placeholder="Password"
                                                            onChange={e => setMin(e.target.value)} value={Minutos}
                                                        />
                                                        
                                                    </div>

                                                    <div className="col-auto text-center detail generoEditar">
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
                                                        
                                                    <div className="col-auto text-center detail CastEdit">
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

                                                    <div className="div">

                                                        {/* <label htmlFor="">Géneros:</label> */}

                                                        {/* <label htmlFor="">* despues de agregar genero seleciona y elige ortra opcion el combo y se muestran</label>
                                                        <label htmlFor="">* No se la razon</label> */}
                                                        {   
                                                            ///mostrar los generos agregados
                                                            Generoshow.map((Genero, index) =>
                                                                <div className="col-4 ">
                                                                    <ul  style={{listStyle: 'none'}}>
                                                                        <li>{Genero} 
                                                                            <a  className="a_eliminar" onClick={() => {
                                                                
                                                                            removeGenero(index)
                                                                                        
                                                                            }} > Eliminar</a> 
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            ) 

                                                            ///mostrar los generos agregados
                                                        }
                                                        {/* <hr />  */}
                                                        {/* <label htmlFor="">Cast:</label> */}
                                                        {   
                                                            ///mostrar los generos agregados
                                                            Castshow.map((Cast, index) =>
                                                                <div className="col-4 ">
                                                                    <ul  style={{listStyle: 'none'}}>
                                                                        <li>{Cast} 
                                                                            <a className="a_eliminar" onClick={() => {
                                                                
                                                                            removeCast(index)
                                                                                        
                                                                            }} > eliminar</a> 
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            ) 

                                                            ///mostrar los generos agregados
                                                        }

                                                        {/*boton add Movie*/}
                                                        <br />

                                                    </div>
                                                    <br />
                                                    <button id='editmovieButton' onClick={() => {
                                                    debugger
                                                    UpdateMovie(dataMovie._id,NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr,CastAr,localStorage.getItem('Token'));
                                                    UpdateView();
                                                    }}>Editar Pelicula</button>
                    
                    
                                            </div>
                                            </div>
                    
                                            </div>
                                        }
                    
                                    </div>
                                </div>   
                
                
                                <br/>
                               {/*  <div className="row">
                
                                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                                    </div>
                                    <div className="col-3" style={{backgroundColor: "Blue"}}>col-4
                                    </div>
                                    <div className="col-3" style={{backgroundColor: "Red"}}>col-4
                                                
                                    </div>
                                    <div className="col-3" style={{backgroundColor: "Green"}}>col-4
                                    </div>
                                </div> */}
                
                
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

export default EditMovie;