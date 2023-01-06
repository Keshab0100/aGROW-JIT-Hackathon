import React, {  useState } from "react";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function CropRecommend() {
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [soil_type, setSoil_type] = useState("");
  const [crop_name, setCrop_name] = useState("");
  const [P, setP] = useState("");
  const [N, setN] = useState("");
  const [K, setK] = useState("");

  const [Res1, setRes1] = useState("")
  const [Res2, setRes2] = useState("")
  const [Res3, setRes3] = useState("")


  const SendRequest = (e) => {
    e.preventDefault();
    var data = {
      temp: temp,
      humidity: humidity,
      moisture: moisture,
      soil_type: soil_type,
      crop_name: crop_name,
      nitro: N,
      pott: K,
      phop: P,
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    };
    Axios.post("https://c437-103-169-236-82.in.ngrok.io/fert", data).then(
      (res) => {
        setRes1(res.data.fertil_1);
        setRes2(res.data.fertil_2);
        setRes3(res.data.fertil_3) ;
      }
      
    );
    
  };

  
  // let navigate = useNavigate();
  // const land = () => {
  //   navigate("/home");
  // };
  return (
    <div className="cropR" style={{margin: "20%", display: "block", justifyContent: "center"}}>
      <form
        className="croprecform"
        onSubmit={SendRequest}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: 10,
          marginTop: 70,
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <label>Enter N, P, K values in soil</label>
        Temperature:{" "}
        <input
          type="number"
          name=""
          id="temp"
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        />
        Humidity:{" "}
        <input
          type="number"
          name=""
          id="humidity"
          onChange={(e) => {
            setHumidity(e.target.value);
          }}
        />
        Moisture:{" "}
        <input
          type="number"
          name=""
          id="moisture"
          onChange={(e) => {
            setMoisture(e.target.value);
          }}
        />
        Soil Type:{" "}
        <input
          type="text"
          name=""
          id="soil_type"
          onChange={(e) => {
            setSoil_type(e.target.value);
          }}
        />
        Crop Type:{" "}
        <input
          type="text"
          name=""
          id="crop_name"
          onChange={(e) => {
            setCrop_name(e.target.value);
          }}
        />
        Nitrogen:{" "}
        <input
          type="number"
          name=""
          id="nitro"
          onChange={(e) => {
            setN(e.target.value);
          }}
        />
        Phosphorus:{" "}
        <input
          type="number"
          name=""
          id="phop"
          onChange={(e) => {
            setP(e.target.value);
          }}
        />
        Pottasium:{" "}
        <input
          type="number"
          name=""
          id="pott"
          onChange={(e) => {
            setK(e.target.value);
          }}
        />
        <button type="submit">Submit</button>

      </form>

      <div className="fertans" >
        <p>
          The Fertilizer 1 is : {Res1}<br></br>
          The Fertilizer 2 is :{Res2}<br></br>
          The Fertilizer 3 is :{Res3}
        </p>

      </div>
    </div>
  );
}

export default CropRecommend;
