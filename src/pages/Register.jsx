import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Register = () => {
    const [uname, setUname] = useState();
    const [pass, setPass]=useState();
    const [mail, setMail] = useState();
    const [status , setStatus] = useState(false);
    const [fail ,setFail] = useState(false);
    function submitClick (){
       axios.post('https://zany-plum-cougar-kilt.cyclic.app/api/auth/register',{
          username:uname,
          email:mail,
          password:pass
       }).then(async (res)=>{
          if(res.data){
            setStatus(true);
            setFail(false);
            document.getElementById('loginclick').click();
          }else{
            setFail(true);
          }

       }).catch((err)=>{
          setFail(true);
          console.log(err)});
    }
    return (
      <div id='register'>
         <form>
         <label htmlFor="uname">Username</label><br />
         <input type="text" id='uname' onChange={e=>setUname(e.target.value)} required/><br /><br />
         <label htmlFor="email">Email</label><br />
         <input type="text" id='email' onChange={e=>setMail(e.target.value)} required/><br /><br />
         <label htmlFor="pass">Password</label><br />
         <input type="password" id='pass'  onChange={e=>setPass(e.target.value)} required/><br />
         <div id='ls' onClick={submitClick}>Rgister</div>
         </form>
         {status && (<><span>Registration Sucessfull</span></>)}
         {fail && <span style={{color:'red'}}>Registration failed, Try again</span>}
         <Link to='/' id='loginclick'></Link>
      </div>
    )
}

export default Register