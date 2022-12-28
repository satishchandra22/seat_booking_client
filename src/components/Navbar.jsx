import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Globalcontext } from './Globalcontext';


const Navbar = (p) => {
  const {globalState , setGlobalState} = useContext(Globalcontext);
  function logoutfun(){
    setGlobalState({});
  }
  console.log(globalState);
  return (
    <div id='nav2'>
        <div id='n2c1'>{p.name}</div>
        <Link id='n2c3' to='/' onClick={logoutfun}>Logout</Link>
    </div>
  )
}

export default Navbar;