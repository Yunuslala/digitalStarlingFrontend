import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const addCart=async(id)=>{
    try {
      const productId=id;
      const response=await axios.post('https://drab-rose-angler-tux.cyclic.app/CartRoute/AddCart',{
          headers:{
              'Authorization':localStorage.getItem("LoginToken"),
                  'Content-Type': 'application/json',
          }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={addCart}>click</button>
    </div>
  )
}

export default Edit
