import React from 'react'
import core from '../images/core.jpg'

function Aboutus() {
  return (
    <div>

<div>
       
       <div className="container py-md-4">
           <h3 className="heading mb-sm-4 mb-2 text-center"> About Us</h3>
           <div className="row core-grids">
               <div className="col-lg-6 core-left">
                   <img src={core} className="img-fluid" alt="" />
               </div>
               <div className="col-lg-6 core-right">
                   <h3 className="mt-4">Improving Agriculture, Improving Lives, Cultivating Crops To Make Farmers Increase
                       Profit.</h3>
                   <p className="mt-3">We use state-of-the-art machine learning and deep learning technologies to help you
                       guide through
                       the entire farming process. Make informed decisions to understand the demographics of your area,
                       understand the
                       factors that affect your crop and keep them healthy for a super awesome successful yield.</p>
               </div>
           </div>
       </div>
   </div>
    </div>
  )
}

export default Aboutus