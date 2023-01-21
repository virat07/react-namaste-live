import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
export default About = () => {
  return (
    <div>
      <h1>About Us </h1>
      <p>This is the namaste react live course chapter 07- finding the path</p>
      <Outlet/>
      <ProfileClass/>
    </div>
  );
};