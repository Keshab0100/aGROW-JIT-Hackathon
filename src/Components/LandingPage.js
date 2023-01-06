import React from "react";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Loader from "./Loader";

function LandingPage() {
  return (
    <div style={{width:"100vw", marginTop:"10%", marginBottom:"10%"}}>
      <Loader />
      <Aboutus />
      <Services />
    </div>
  );
}

export default LandingPage;
