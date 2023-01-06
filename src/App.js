import "./App.css";
import React from "react";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CropRecommend from "./Components/CropRecommend";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import FertilizerRecommend from "./Components/FertilizerRecommend";
import GovScheme from "./Components/GovScheme";

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {city: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': 'f43a2792famshc3b5d4916697d29p149f49jsn4eb6455f3e61',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
    },
    "google_translate_element"
  );
};




function App() {
    

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="App Outer" >
      <div className="Inner">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<Homepage />} />
            <Route exact path="/croprecommend" element={<CropRecommend />} />
            <Route exact path="/fertilizer" element={<FertilizerRecommend />} />
            <Route exact path="/govscheme" element={<GovScheme />} /> 
          </Routes>
          
        </BrowserRouter>
          <Footer />

      </div>
    </div>
  );
}

export default App;
