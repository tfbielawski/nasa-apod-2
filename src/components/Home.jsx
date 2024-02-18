import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
        <Link className="home-link click" to="/nasaphoto"> 
       
        NASA PHOTO (OR VIDEO) OF THE DAY
        <br />CLICK HERE TO BEGIN
        </Link>
        
    </div>
  )
}
