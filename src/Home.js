import React from 'react'
import { useState } from 'react'
import mystyl from './Mystyl'
import { FaBeer } from 'react-icons/fa'
import im1 from "./Screenshot 2023-10-05 095802.png"

const Home = () => {
  let name = "ola"
  let array = ['apple', 'banana', 1,2,3]
  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  const [userarray, setuserarray] = useState([])
  let login = true
  

  // const [input3, setInput3] = useState([])
  const [counter, setCounter] = useState(0)
  function update() {
     console.log(input2);
     setuserarray([...userarray, input2])
     console.log(userarray);
  //  setCounter(counter + 1)
  // name = "tola"
  // console.log(name);
  }
  function handleChange(event) {
    setInput(event.target.value)
    console.log(input);
  }
  return (
    <div>
      <h1>
        { login ? "welcome User": "loading..."}
      </h1>
     hello {name}
    <h1>Counter: {counter}</h1>
    <button onClick={()=>update('ola')} >Increase</button> <br />
     <input type="text" name='name' onChange={handleChange} value={input} />
     <input type="text" name='name' onChange={(e)=> setInput2(e.target.value)} value={input2} />
     {/* <input type="text" name='name' onChange={} value={input} /> */}
     <ul>
      {array.map((element,index)=>
       (
        <li key={index}>{element}</li>
      )
      )}
     </ul>
        {/* <button className='btn btn-dark'>click me</button>
        <input className='form-control' type="text" />
        <h1 style={mystyl}>Home</h1>
        <p className='ptag'>External styling</p>
        <i className='fa fa-user'></i>
        <h3> Lets go for a <FaBeer />? </h3>
        <img src={require("./Screenshot 2023-10-05 095802.png")} alt="" />
        <img src={im1} alt="" /> */}

    </div>
  )
}

export default Home