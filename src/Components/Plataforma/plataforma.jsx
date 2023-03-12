import './plataforma.css'
import {useState, useRef, useEffect} from "react"

import {ObtenerPlataformas, CrearPlataforma} from '../../Services/plataforma.service';

const Plataforma = () => {
    
    const [plataformaName, setPlataformaName] = useState('');
    const [dataPlataformas, setDataPlataforma] = useState([]);
   
    
    useEffect(() => {
        
        ObtenerPlataformas()
            .then((response) => {
                const data = response.data;
                setDataPlataforma(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
            console.log(dataPlataformas);
            
                
    }, []);

    return (
        <div className='login container-fuid d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='row w-50 d-flex justify-content-center tarjeta-login m-0'>

                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                    <form className="row d-flex flex-column g-3">
                        <div className="col-auto text-center">
                            <label className='text-login'>Plataforma</label>
                        </div>
                        <div className="col-auto text-center">
                            
                            <input
                                
                                type="text"
                                className="input-login"
                                id="username"
                                placeholder="Nombre Plataforma"
                                onChange={e => setPlataformaName(e.target.value)} value={plataformaName}
                                 />

                        </div>
                       
                        <div className="col-12 d-flex flex-column">

                            <button  type="button" class="btn btn-primary" onClick={() => {
                              
                              CrearPlataforma(plataformaName)
                              .then(() => ObtenerPlataformas())
                              .then(response => {
                                setDataPlataforma(response.data);
                                console.log(response.data);
                              })
                              .catch(error => {
                                console.log(error);
                              });                                                 
                            }}>Crear</button>

                            {/*<Link to="/register">
                                ¿No tienes cuenta? Registrate
                            </Link> */}
                        </div>
                    </form>
                </div>

                
                <div class="col-md-12 mt-3">
                   <div className="row">
                   <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>

                            </tr>
                        </thead>
                        <tbody class="table">
                    {   
                        dataPlataformas.map((Plataforma, index) =>
                        <tr>
                            <td>{Plataforma._id}</td>
                            <td>{Plataforma.name}</td>
                      </tr>
                      ) 
                    }
                      </tbody>
                  </table>
                </div>
                                    

            </div>
        </div>
    </div>
    );
}


export default Plataforma;