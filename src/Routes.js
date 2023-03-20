import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Main from './Components/Main/Main'
import Pais from './Components/Paises/Paises';

export default function Router(){
    return(
       <Routes>
            <Route path='/' element={ <Pais />}/>
            <Route path='/' element={ <Login />}/>
            <Route path='/Main' element={ <Main />}/>
           
           
       </Routes>
    );
}

