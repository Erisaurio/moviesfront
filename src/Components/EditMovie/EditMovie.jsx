import './EditMovie.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom';

import { GetMovie, UpdateMovie} from '../../Services/movies.service';

import { EditMovieImg } from '../../Services/Storage';

import poster from '../Assets/Poster.png';

const EditMovie = () => {
    
    const navigate = useNavigate();
    let {Name} = useParams();
    
    const [dataMovie, setDataMovie] = useState([]);

    const [NameMovie, setNMovie] = useState('');
    const [FechaMovie, setFMovie] = useState('');
    const [Sinopsis, setSMovie] = useState('');
    const [Horas, setHour] = useState('');
    const [Minutos, setMin] = useState('');
    const [GenerosAr, setArtists] = useState([]);
    const [Portada, setSProtada] = useState('');

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
        alert("informacion cambiada");
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
                //setFMovie(response.data.Fecha);
                setSMovie(response.data.Sinopsis);
                setHour(response.data.Horas);
                setMin(response.data.Minutos);           
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        
        
        showMovie();  
            
                
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

                                    <div className="">
                                        <div className="col-auto text-center">
                                            {dataMovie.Portada == "" ?
                                            <img style={{height:"200px", width:"150px"}} src={poster} alt="" />
                                            :
                                            <img class="profileuser" src={`http://localhost:3001/${dataMovie.Portada}`}/>
                                            }
                                            

                                            <br />
                                            <p> imagen</p>
                                            <button onClick={InputClick}>Editar imagen</button>
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
                                    <h5 >id: {dataMovie._id}</h5>
                                    <h5 >Name: {dataMovie.Name}</h5>
                                    <h4 >email: {dataMovie.Fecha}</h4>
                                    <p> Sinopsis: {dataMovie.Sinopsis}</p>
                                    <p> portada: {dataMovie.Portada}</p>
                                    <p> tiempo: {dataMovie.Horas} : {dataMovie.Minutos}</p>
                                
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
                                        onChange={e => setNMovie(e.target.value)} value={NameMovie}
                                    />
                                    <input
                        
                                    type="date"
                                    className="input-login"
                                    id="Date"
                                    placeholder="Fecha de pelicula"
                                    onChange={e => setFMovie(e.target.value)} value={FechaMovie}
                                    />
                                    <input
                                        
                                        type="text"
                                        className="input-login"
                                        id="Pass_Edit"
                                        placeholder="Password"
                                        onChange={e => setSMovie(e.target.value)} value={Sinopsis}
                                    />
                                    <input
                                        
                                        type="text"
                                        className="input-login"
                                        id="Pass_Edit"
                                        placeholder="Password"
                                        onChange={e => setHour(e.target.value)} value={Horas}
                                    />
                                    <input
                                        
                                        type="text"
                                        className="input-login"
                                        id="Pass_Edit"
                                        placeholder="Password"
                                        onChange={e => setMin(e.target.value)} value={Minutos}
                                    />
                                    
                                </div>
                                    
                                
                                <button onClick={() => {
                                debugger
                                UpdateMovie(dataMovie._id,NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr);
                                UpdateView();
                                }}>Editar User</button>


                           </div>
                         </div>

                        </div>
                    }

                  </div>
                </div>   


                <br/>
                <div className="row">

                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                    </div>
                    <div className="col-3" style={{backgroundColor: "Blue"}}>col-4
                    </div>
                    <div className="col-3" style={{backgroundColor: "Red"}}>col-4
                                 
                    </div>
                    <div className="col-3" style={{backgroundColor: "Green"}}>col-4
                    </div>
                </div>


            </div>

            <Footer/>

        </div>

       


    );
}

export default EditMovie;