import React from "react";
import s3 from "../images/s3.jpg";
import s2 from "../images/s2.jpg";
import s4 from "../images/s4.jpg";
import { useNavigate } from "react-router";

function Services() {
  let navigate = useNavigate();

  const CropRecommendPage = () => {
    navigate("/croprecommend");
  };

  const fertilizer = () => {
    navigate("/fertilizer");
  };

  const govscheme = () => {
    navigate("/govscheme");
  };

  return (
    <>
      <section className="blog py-2">
        <div className="container py-md-2">
          <h3 className="heading mb-sm-5 mb-4 text-center"> Our Services</h3>
          <div className="row blog-grids">
            <div className="col-lg-4 col-md-6 blog-left mb-lg-0 mb-sm-5 pb-lg- pb-5">
              <img
                src={s3}
                className="img-fluid"
                onClick={CropRecommendPage}
                alt=""
              />
              <div className="blog-info crop" onClick={CropRecommendPage}>
                <h4>Crop</h4>

                <p className="mt-2">
                  {" "}
                  Recommendation about the type of crops to be cultivated which
                  is best suited for the respective conditions
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
              <img src={s2} className="img-fluid" onClick={fertilizer} alt="" />

              <div className="blog-info fertilizer" onClick={fertilizer}>
                <h4>Fertilizer</h4>
                <p className="mt-2">
                  Recommendation about the type of fertilizer best suited for
                  the particular soil and the recommended crop
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 blog-right mt-lg-0 mt-5 pt-lg-0 pt-md-5">
              <img src={s4} className="img-fluid" alt="" onClick={govscheme} />

              <div className="blog-info disease" onClick={govscheme}>
                <h4>Crop Disease</h4>
                <p className="mt-2">
                  Predicting the name and causes of crop disease and suggestions
                  to cure it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
