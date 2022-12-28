import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Globalcontext } from '../components/Globalcontext';


const Login = () => {
    const {globalState, setGlobalState} = useContext(Globalcontext);
    const [uname, setUname] = useState();
    const [pass, setPass]=useState();
    const [status , setStatus] = useState(false);
    const [fail ,setFail] = useState(false);
    function submitClick (){
       axios.post('https://zany-plum-cougar-kilt.cyclic.app/api/auth/login',{
          username:uname,
          password:pass
       }).then(async (res)=>{
          setGlobalState({username:res.data.username,userId:res.data._id,accessToken:res.data.accessToken});
          if(res.data.accessToken){
            if(res.data.isAdmin){
                setStatus(true);
                setFail(false);
                document.getElementById('adminlink').click();
            }else{
                setStatus(true);
                setFail(false);
                document.getElementById('userlink').click();
            }
            
        }else{setFail(true);}
       }).catch((err)=>{
          setFail(true);
          console.log(err)});
    }
    console.log(globalState);
    return (
      <div id='login'>
         <h3 id="loghead">Please LOGIN to view Seats</h3>
         <label htmlFor="uname">Username</label><br />
         <input type="text" id='uname' onChange={e=>setUname(e.target.value)} /><br /><br />
         <label htmlFor="pass">Password</label><br />
         <input type="password" id='pass'  onChange={e=>setPass(e.target.value)}/><br />
         <div id='ls' onClick={submitClick}>LOGIN</div>
         {status && (<>
          <span>Login sucessfull </span>
         </>)}
         {fail && <span style={{color:'red'}}>Invalid Username or Password</span>}
         <br /><br />
         <span>Don't have an account </span>
         <Link to='/register'>Register Here</Link>
         <br />
         <Link to='/user' id='userlink'></Link>
         <Link to='/admin' id='adminlink'></Link>
      </div>
    )
}

export default Login