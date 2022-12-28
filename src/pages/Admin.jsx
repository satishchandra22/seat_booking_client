import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Globalcontext } from '../components/Globalcontext';
import Navbar from '../components/Navbar';
import Seat from '../components/Seat';

const Admin = () => {
    const [bookmsg , setBookmsg] = useState('');
    const {globalState , setGlobalaState} = useContext(Globalcontext);
    const [seatList , setSeatList] = useState([{_id:'',seatname:"",userId:''}]);
    useEffect(()=>{
      axios.get('https://zany-plum-cougar-kilt.cyclic.app/api/seats').then((res)=>{
          setSeatList(res.data);
          console.log(res.data);
      }).catch(err=>console.log(err));
    },[])
    console.log(setGlobalaState)
    return (
      <div>
          <Navbar name={globalState.username}/>
          <div id='seatcontainer'>
          {seatList.map((item)=>{
              return(
                  <>
                      <Seat user={'admin'} msg={setBookmsg} name={item.seatname} seatid={item._id} seatuser={item.userId} userId={globalState.userId} token={globalState.accessToken} key={JSON.stringify(Symbol('item'))}/>
                  </>
              )
          })}
          </div>
          <h4>Click on a Seat to <b>BOOK</b> and click on your <b>BOOKED</b>seat to <b>Cancel</b></h4>
          <div className='msg'>{bookmsg}</div>
      </div>
    )
}

export default Admin