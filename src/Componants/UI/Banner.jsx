import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Banner = ({title,subtitle,description}) => {
    const location=useLocation()
    console.log(location)
  return (
    <div>
        <div>
            {location.pathname}
            {title}
            {subtitle}
            {description}
    
      </div>
    </div>
  )
}

export default Banner
