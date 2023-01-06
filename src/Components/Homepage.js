import React, { useState } from "react";
import "../App.css";
import Axios from "axios";

function CropRecommend() {
  const [phop, setP] = useState();
  const [nitro, setN] = useState();
  const [pott, setK] = useState();
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [Crop1, setCrop1] = useState();
  const [Crop2, setCrop2] = useState();
  const [Crop3, setCrop3] = useState();

  const SendRequest = async (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(function (position) {
      // setLat(position.coords.latitude);
      // setLong(position.coords.longitude);
      setLat(22.9868);
      setLong(87.855);
    });
    // console.log(lat, long)
    let tempData = await fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    let result = await tempData.json();
    console.log(result);
    // setData(result);
    var sendData = {
      n: nitro,
      p: pott,
      k: phop,
      rainfall: 10,
      temp: result.main.temp,
      humidity: result.main.humidity,
      ph: 1,
    };
    // const requestOptions = {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: sendData,
    // };
    Axios.post("https://c437-103-169-236-82.in.ngrok.io/crop", sendData).then(
      (res) => {
        console.log(res.data["crop 1"]);
        setCrop1(res.data["crop 1"]);
        setCrop2(res.data["crop 2"]);
        setCrop3(res.data["crop 3"]);
      }
    );
  };

  
  return (
    <>
      <form
        className="croprecform"
        onSubmit={SendRequest}
      >
        <label>Enter N, P, K values in soil</label>
        <input
          type="text"
          name=""
          id="n"
          onChange={(e) => {
            setN(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id="p"
          onChange={(e) => {
            setP(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id="k"
          onChange={(e) => {
            setK(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>Crops that can be grown are</h1>
        <span>Crop 1: {Crop1}</span>
        <br></br>
        <span>Crop 2: {Crop2}</span>
        <br></br>
        <span>Crop 3: {Crop3}</span>
        <br></br>
      </div>
    </>
  );
}

export default CropRecommend;

{
  /* <div className="card">
  <h1>Crop Prediction </h1>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Enter Soil Type</li>
    <li className="list-group-item">Enter Temperature</li>
    <li className="list-group-item">Enter City</li>
    <li className="list-group-item">Your perfect crop would be</li>
  </ul>
  <div className="App">
    <h2>Add Image:</h2>
    <input type="file" accept="image/jpeg" onChange={handleChange} />
    <img src={file} alt="uploaded" className="imageuploaded" />
    <button className="subImg" onClick={(e) => check(e)}>
      Check disease
    </button>
  </div>
  
<div className="output"> 
output aka disease name here
</div>
</div>
<button className="btn btn-dark" onClick={land}>
  Back to Home
</button>
<FileUploaded/> */
}
