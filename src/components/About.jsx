import React from 'react'
import User from "./User"
import UserClass from './UserClass'

const About = () => {
  return (
    <>
    <div>About</div>
    <h1>This is the about from the Namaste React</h1>
    {/* <User/> */}
    <UserClass name={"Yash Jaiswal"} location={"Gorakhpur"} contact={"@theflashyash99"}/>
    </>
  )
}

export default About;