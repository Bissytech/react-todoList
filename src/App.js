
import React from 'react'
import Button from './Button'
// import './App.css'


const App = () => {
  const mystyl ={
    header:{
     fontSize:"70px" , 
     color:"yellow"
    },
    backgroundColor:"blue",
     fontSize:"70px" , 
     color:"red"
  }
  const sty = {
     fontSize:"70px" , 
     color:"red",
     fontWeight:"700"
  }
  const register = () =>{
    alert("working")
  }
  
  return (
    <>
     <h1 style={{backgroundColor:"red", fontSize:"30px" , color:"green"}}>New class</h1>
     <p className='py' >Internal styling</p>
     <p style={mystyl.header}>Substyling</p>
     <h2 style={sty}>new style</h2>
     <p style={{color:"gray",}}></p>
     <Button clik={register} stly="btn btn-dark" value="register"/>
    </>
  )
}

export default App

