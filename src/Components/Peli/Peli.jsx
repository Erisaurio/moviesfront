import '../HeaderYFooter/NavYFooter.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import './peli.css'
import * as React from "react";
import {useState, useRef, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { ObtenerUsuario } from '../../Services/user.service';
import { GetMovie} from '../../Services/movies.service';
import { ObtenerComentaiosMovie ,CrearComentario} from '../../Services/Comentarios';
import {ObtenerCriticasUsuarioMovie ,ObtenerCriticasMovie, CrearCritica, UpdateCritica } from '../../Services/Criticas';
import Logo from '../Assets/Logo.png';
import LogoW from '../Assets/Logow.png';
import pelis from '../Assets/pinocho.jpeg';
import avatar from '../Assets/avatar.png';
import avatar2 from '../Assets/avatar2.png';
import avatar3 from '../Assets/avatar3.png';
import avatar4 from '../Assets/avatar4.png';
import avatar5 from '../Assets/avatar5.png';
import popcorn from '../Assets/palomitas.png';
import poster from '../Assets/Poster.png';

const Peli = () => {
     
    const navigate = useNavigate();
   
    
    const [CriticaText, setCrititcaText] = useState('');
    const [ComentarioText, setComentariotext] = useState('');
    const [CriticaStar, setCrititcaStar] = useState('');

    const [dataMovie, setDataMovie] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [criticaUser, setCriticaUser] = useState([]);

    const [calificacion, setCalificacion] = useState([]);
    
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
          const response = await ObtenerUsuario(id_user);
          const data = response.data;
          setDataUser(response.data);
          
          const responserMovie = await GetMovie(Name);
          await setCriticaU(response.data._id, responserMovie.data._id);
          
          console.log(dataUser);
        } catch (error) {
          console.log(error);
        }
      };
      
      const setCriticaU = async (id_user, id_movie) => {
        try {
          const response = await ObtenerCriticasUsuarioMovie(id_user, id_movie);
          const data = response.data;
          setCriticaUser(response.data);
          
          console.log("critica", criticaUser);
        } catch (error) {
          console.log(error);
        }
      };

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

    const addNewComment = async () => {
        try {
          const newComment = await CrearComentario(
            dataUser.name,
            ComentarioText,
            dataMovie._id,
            dataUser._id,
            dataUser.filename
          );
      
          setComentarios([...dataComentarios, newComment]);
          setComentariotext('');
        } catch (error) {
          // Handle any errors that occur during the process
          console.log(error);
        }
      };

      const updateCritica = async (id_user, id_movie) => {
        try {

            const response = await ObtenerCriticasUsuarioMovie(id_user, id_movie);
            const data = response.data;

            if(data.length < 1){
                const newCritica = await CrearCritica(
                    dataUser.name,
                    "test",
                    dataMovie._id,
                    dataUser._id,
                    dataUser.filename,
                    quantity
                  );
                  
                // Create a copy of the criticaUser state array
                const updatedCriticaUser = [...criticaUser, newCritica.data];

                setCriticaUser(updatedCriticaUser);
            }
            else{
                const newCritica = await UpdateCritica(
                    quantity,
                    criticaUser[0]._id
                  );
                  
                // Create a copy of the criticaUser state array
                const updatedCriticaUser = [...criticaUser];
                // Update the Calificacion property of the first element in the array
                updatedCriticaUser[0].Calificacion = newCritica.data.Calificacion;

                // Update the criticaUser state with the updated array
                setCriticaUser(updatedCriticaUser);
            }


        } catch (error) {
          // Handle any errors that occur during the process
          console.log(error);
        }
      };


    function Generos(array) {
    
        if (array != undefined) {
          return  array.map(genero => (<div className='pill'>{genero}</div>));
        }
        else{
            return <p>hola</p>;
        }
        
    }   

    function Cast(array) {
        if (array != undefined) {
          return  array.map(cast => (<div className='member'><img src={`http://localhost:3001/${cast.photo}`} className='avatar'/><label>{cast.name}</label></div>));
        }
    }

    const [quantity, setQuantity] = useState(0);

    const handleQuantityDecrease = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 0.5, 0));
    };

    const handleQuantityIncrease = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 0.5, 5));
    };


    const getDate = (date) => {
        const index = date.indexOf('T');
        const content = date.substring(0, index);
        return content;
      };


    useEffect(() => {  
        showMovie();
        
        console.log(dataMovie)
        if(localStorage.getItem('UserId') != null){
            setUser(localStorage.getItem('UserId').toString());
            console.log(criticaUser)
        }
    }, []);


    return(

        <div className="Main">
            <Header/>

            <div className="box">
                <div className='info'>
                    {dataMovie.Portada == "" ?
                        <img style={{height:"700px", width:"520px"}} src={poster} alt="" />
                        :
                        <img style={{height:"700px", width:"520px"}} className="card" src={`http://localhost:3001/${dataMovie.Portada}`}/>
                    }
                    <div className='texto'>
                        <h1>{dataMovie.Name}</h1>

                        
                    
                        <p>{dataMovie.Sinopsis}</p>


                        <div className='categories'>
                            {Generos(dataMovie.Generos)}
                        </div>

                        <hr style={{'width': '100%', 'border': '1px solid'}}></hr>
                        <div className='info'>
                            <div className='cast vitals'>
                                <h3 className='sectionTitle'>Cast</h3>
                                {Cast(dataMovie.Cast)}
                            </div>
                            <hr style={{'width': '2px', 'height': '45vh', 'margin':'20px'}}></hr>
                            <div className='vitals'>
                                <h3 className='sectionTitle'>Calificación General</h3>
                                <div className='calif'>
                                    <p className='calif_general'>{dataMovie.Promedio !== undefined ? dataMovie.Promedio.toFixed(2) : 1}</p>
                                </div>
                            </div>
                            <hr style={{'width': '2px', 'height': '45vh', 'margin':'20px'}}></hr>
                            <div className='vitals'>
                                <h3 className='sectionTitle'>Tu calificacion</h3>
                                <div className='calif calif_personal'>
                                    <p className='calif_general'>{criticaUser.length !== 0 ? criticaUser[0].Calificacion : 0}</p>

                                    <div className="number-input">
                                        <button onClick={handleQuantityDecrease}></button>
                                        <input className="quantity" onChange={e => setCalificacion(quantity)} min="0" max="5" name="quantity" value={quantity} type="number" />
                                        {
                                            console.log("calificacion" + quantity)
                                        }
                                        <button onClick={handleQuantityIncrease} className="plus"></button>
                                    </div>
                                    <button className='save_button btn' onClick={() => updateCritica(dataUser._id, dataMovie._id)}>
                                        Guardar
                                    </button>

                                    

                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>


                <div>

                    {/* comantarios */}
                    <br/>
                    {

                        dataUser != null && localStorage.getItem('UserId') != null ?
                            <div className="row text_aviso mt-4">
                                <div class="comment_sender">   
                                    <div className="p-0 d-flex align-items-center comment_box">
                                            <input onChange={e => setComentariotext(e.target.value)} value={ComentarioText} type="text" className="form-control" placeholder="Message..."
                                                aria-label="Message" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="comment_button">
                                        <div class="buttonml input-group-append">
                                            <a onClick={() => {
                                                addNewComment()
                                        }} class="btn btn-primary" >Enviar</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        :
                            <div className="col-12" style={{backgroundColor: "lightblue"}}>Inicia Session para hacer una critica</div>
                    }
                    {
                        dataComentarios != null  ?
                            <div className='comment_col'>

                                {
                                    dataComentarios.slice().reverse().map((comentario, index) =>
                                    
                                    <div className="mt-2 mb-2" key={index}> 
                                        <div className="col-12">
                                            <div className="row">
                                                <div className='comment'>
                                                    <div className='comment_user'>
                                                        <div className="col-12">
                                                            {comentario.UsuarioPic == "" ?
                                                                <img style={{height:"62px", width:"62px"}} src={poster} alt="" />
                                                                :
                                                                <img class="profileuser" src={`http://localhost:3001/${comentario.UsuarioPic}`}/> 
                                                            }
                                                        </div>  
                                                        <div className="col-12">{comentario.name}</div>
                                                    </div>
                                                    <div className='comment_content'>
                                                        <div className="">
                                                        {comentario.Comentario}
                                                        </div>
                                                        <div className="">{getDate(comentario.createdAt)}</div>
                                                    </div>
                                                </div>
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
                
            </div>
            
            <Footer/>

        </div>

    );
}


export default Peli;