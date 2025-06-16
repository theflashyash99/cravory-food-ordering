import React from 'react'
import User from "./User"
import UserClass from './UserClass'

const About = () => {
  return (
    <>
    <div className='mt-28'>
    {/* <User/> */}
    <UserClass name={"Yash Jaiswal"} location={"Gorakhpur"} contact={"@theflashyash99"}/>
    </div>
    </>
  )
}

export default About;