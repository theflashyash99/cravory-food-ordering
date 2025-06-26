import React from 'react'
import User from "./User"
import UserClass from './UserClass'

const About = () => {
  return (
    <>
    <div className='m-80'>
    {/* <User/> */}
    <UserClass name={"Yash Jaiswal"} location={"Gorakhpur"} contact={"@theflashyash99"}/>
     {/* here the userclass class based componet is  */}
    </div>
   
    </>
  )
}

export default About;