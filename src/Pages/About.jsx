import React from 'react'
import Banner from '../Componants/UI/Banner'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const Navigate=useNavigate()
  return (
    <div>
      <Banner title="About" subtitle="it is about page" description="it's a description"/>
    <button onClick={()=>{
        Navigate("/")
      }}>
        go to home
    </button>
    </div>
  )
}

export default About
