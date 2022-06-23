import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Register } from './components/Registro';
import { Login } from './components/Login';
import { Perfil } from './components/Perfil';
import { GlobalStyles } from './components/styles/Global';

function App() {


  return (
    <>
    <GlobalStyles/>
    <Login>
        <Router>
          <Routes>
            <Route exact path='/Register' element={<Register />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Perfil' element={<Perfil/>} />
          </Routes>
        </Router>
        </Login>
    </>
  );
}

export default App;
