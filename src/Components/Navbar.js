import React from "react";
import { useNavigate } from 'react-router';
import name from '../images/name.png'


function Navbar() {
	let navigate = useNavigate();

  const land = () => {
		navigate("/");
	}
	

	const home = () => {
		navigate("/home");
	}

 

  const CropRecommendPage = () => {
		navigate("/croprecommend")
	}
	
  const fertilizer = () => {
		navigate("/fertilizer");
	}

  const govscheme = () => {
		navigate("/govscheme");
	}

  return (
    <div className="navbar navbar-light bg-light">
      <img src={name} alt="" style={{width:180, height: 60}} onClick={land}/>
      <div className="navbar-space">
        <button onClick={home}>Crop recommend</button>
        <button onClick={CropRecommendPage}>FertilizerRecommend</button>
        <button onClick={govscheme}>Weather forecast</button>
        <button onClick={fertilizer}>Agrow videos</button>
      </div>
	  
    </div>
  );
}

export default Navbar;
