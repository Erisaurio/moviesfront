import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Main from './Components/Main/Main'
import Pais from './Components/Paises/Paises';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import ourSpills from './Components/ourSpill/ourSpill';

export default function Router(){
    return(
       <Routes>
        <Route path='/' element={ <Home />}/>
            <Route path='/login' element={ <Login />}/>
            <Route path='/Main' element={ <Main />}/>
            <Route path='/' element={ <Pais />}/>
            <Route path='/' element={ <Landing />}/>
            
            <Route path='/' element={ <ourSpills />}/>
       </Routes>
    );
}

