import React from 'react'
import Banner from '../Componants/UI/Banner'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const transfer=()=>{
    alert("here")
  }
  const Navigate=useNavigate()
  return (
   <div>
    
    <Banner  title={"Home"} description={' d e c r i p t i o n'}
     subtitle={ 'h o m e 2'}/>
     <button className=' ml-4 border-2 border-l-0 ' onClick={()=>{
      transfer()
     }}>
      About us
      </button>
      <button onClick={()=>{
        Navigate("/about")
      }}>
        go to about
      </button>
   </div>
  )
}

export default Home
