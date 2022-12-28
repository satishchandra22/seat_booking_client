
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Globalcontext } from './components/Globalcontext';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

function App() {
  const [globalState , setGlobalState] = useState({username:'',userId:'',accessToken:''});
  return (
    <div className="App">
      <Globalcontext.Provider value={{globalState , setGlobalState}}>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/user' element={<User/>}/>
           <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
      </Globalcontext.Provider>
    </div>
  );
}

export default App;
