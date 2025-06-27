import React from 'react';
import User from "./User";
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="mt-24 h-96 flex justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 max-w-4xl mx-auto">
      {/* <User /> */}
      <UserClass 
        name={"Yash Jaiswal"} 
        location={"Gorakhpur"} 
        contact={"@theflashyash99"} 
      />
      {/* UserClass is a class-based component */}
    </div>
  );
};

export default About;
