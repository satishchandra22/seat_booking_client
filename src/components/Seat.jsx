import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Seat = (p) => {
  const [booked , setBooked] = useState(false);
  const [reserved, setReserved] = useState(false);

    useEffect(()=>{
        if(p.seatuser === p.userId){
            setBooked(true)
            setReserved(false)
          }else if(p.seatuser === 'empty'){
            setBooked(false);
            setReserved(false);
          }else{
            setReserved(true);
          }
    },[p.seatuser,p.userId])


  function bookclick(){
    try{if(booked){
        if(p.user ==='admin'){
            axios.put(`https://zany-plum-cougar-kilt.cyclic.app/api/seats/cancel/admin/${p.seatid}`,{
                
            },{
                headers:{
                    token: 'bearer '+p.token
                }
            }).then((res)=>{
                console.log(res);
                setBooked(false);
                setReserved(false);
                p.msg(`Seat ${p.name} Cancelled Sucessfully`);
            })   
        }else{
            axios.put(`https://zany-plum-cougar-kilt.cyclic.app/api/seats/cancel/${p.userId}`,{
                seatid:p.seatid
            },{
                headers:{
                    token: 'bearer '+p.token
                }
            }).then((res)=>{
                console.log(res);
                setBooked(false);
                p.msg(`Seat ${p.name} Cancelled Sucessfully`)
            })
        }
      
    }else{
        axios.put(`https://zany-plum-cougar-kilt.cyclic.app/api/seats/book/${p.userId}`,{
            seatid:p.seatid
        },{
            headers:{
                token: 'bearer '+p.token
            }
        }).then((res)=>{
            console.log(res);
            setBooked(true);
            p.msg(`Seat ${p.name} Booked Sucessfully`)
        })
    }
        
    }catch(err){
        console.log(err)
    }
  }
  function reserveclick(){
    if(p.user ==='admin'){
        axios.put(`https://zany-plum-cougar-kilt.cyclic.app/api/seats/cancel/admin/${p.seatid}`,{
            
        },{
            headers:{
                token: 'bearer '+p.token
            }
        }).then((res)=>{
            console.log(res);
            setBooked(false);
            setReserved(false);
            p.msg(`Seat ${p.name} Cancelled Sucessfully`);
        })
  } else{
    p.msg(`Seat ${p.name} is Alredy Reserved`);
  }
}
  if(reserved){
    return(
        <div id={p.seatid} className='seatoutlookR' onClick={reserveclick}>
        <div className='seatin'>{p.name}</div>
        </div>
    )
  }else if(booked){
    return(
        <div id={p.seatid} className='seatoutlookB' onClick={bookclick}>
        <div className='seatin'>{p.name}</div>
        </div>
    )
  }else{
    return (
   
        <div id={p.seatid} className='seatoutlook' onClick={bookclick}>
            <div className='seatin'>{p.name}</div>
        </div>
      )
  }
 
}

export default Seat