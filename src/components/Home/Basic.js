import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function Basic() {
  const [isShown, setIsShown] = useState(false);
  document.addEventListener("click", (e) => {
    if (
      e.target === document.querySelector(".pop-up") &&
      e.target !== document.querySelector(".landmarks")
    ) {
      setIsShown(false);
    }
  });

  const handleShowLandmarks = () => {
    setIsShown(true);
  };

  const handleGoToLocation = () => {
    var latitude = 34.1016491;
    var longitude = -118.3315342;
    var googleMapsUrl =
      "https://www.google.com/maps?q=" + latitude + "," + longitude;
    window.open(googleMapsUrl);
  };

  return (
    <div className="basic pt-5 pb-5 position-relative ">
      <h3 className="main-title m-0 border border-3 m-auto mb-5 p-2 text-center position-relative border-black text-uppercase z-1">
        Basic Information
      </h3>
      <div className="container d-flex flex-column position-relative rounded-3 ">
        <div className="row border-2 border-bottom p-3 rounded-top-3">
          <div className="col col-12 col-sm-6">
            <h4 className="align-items-center gap-3 text-center text-sm-start">
              <i className="fa-solid fa-utensils"></i> &nbsp; Restaurant Name
            </h4>
          </div>
          <div className="col col-12 col-sm-6">
            <h4 className="text-center m-sm-0 mt-4"> Dubai Sauce </h4>
          </div>
        </div>
        <div className="row border-2 border-bottom p-3">
          <div className="col col-12 col-sm-6">
            <h4 className="align-items-center gap-3 text-center text-sm-start">
              <i className="fa-solid fa-phone"></i>&nbsp; Phone Number
            </h4>
          </div>
          <div className="col col-12 col-sm-6">
            <h4 className="text-center m-sm-0 mt-4"> +971234567890 </h4>
          </div>
        </div>
        <div className="row border-2 border-bottom p-3">
          <div className="col col-12 col-sm-6">
            <h4 className="align-items-center gap-3 text-center text-sm-start">
              <i className="fa-solid fa-road"></i> &nbsp;Street Name
            </h4>
          </div>
          <div className="col col-12 col-sm-6">
            <h4 className="text-center m-sm-0 mt-4"> Hollywood Blvd. </h4>
          </div>
        </div>
        <div className="row border-2 border-bottom p-3">
          <div className="col col-12 col-sm-6">
            <h4 className="align-items-center gap-3 text-center text-sm-start">
              <i className="fa-solid fa-clock"></i>&nbsp; Opening Hours
            </h4>
          </div>
          <div className="col col-12 col-sm-6">
            <h4 className="text-center m-sm-0 mt-4">
              From <span> 10 PM </span> To <span> 02 AM </span>
            </h4>
          </div>
        </div>
        <div className="row border-2 border-bottom p-3">
          <div className="col col-12 col-sm-6">
            <h4 className="align-items-center gap-3 text-center text-sm-start">
              <i className="fa-solid fa-building"></i>&nbsp; Nearby Landmarks
            </h4>
          </div>
          <div className="col col-12 col-sm-6 d-flex justify-content-center ">
            <button
              className="btn w-50 m-sm-0 mt-4 fw-bold"
              onClick={handleShowLandmarks}>
              Show Landmarks
            </button>
          </div>
        </div>
        <div className="row p-3 rounded-bottom-3 ">
          <div className="col col-12 col-sm-6">
            <h4 className="align-items-center gap-3 text-center text-sm-start">
              <i className="fa-solid fa-map-location-dot"></i>&nbsp; Get
              Directions
            </h4>
          </div>
          <div className="col col-12 col-sm-6 d-flex justify-content-center ">
            <button
              className="btn w-50 m-sm-0 mt-4 fw-bold"
              onClick={handleGoToLocation}>
              View On Map
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isShown
            ? "bg-black h-100 pop-up position-absolute start-0 top-0 w-100 shown"
            : "bg-black h-100 pop-up position-absolute start-0 top-0 w-100 "
        }>
        <div
          className={
            "d-flex flex-column justify-content-between landmarks position-absolute rounded-2 start-50 top-50 translate-middle w-75 pb-3"
          }>
          <h2 className="title fw-bold mb-3 mt-3 text-center">
            Landmarks Nearby Restaurant
          </h2>
          <div className="row g-sm-0 border-top border-2 w-100 m-auto ">
            <div className="col col-12 col-md-6 d-flex justify-content-center pt-2 pb-2 ps-0 pe-0 pt-sm-3 pb-sm-3 border-bottom border-2">
              <div className="land">
                <div className="align-items-center d-flex fs-5 fw-medium gap-2">
                  <i className="fa-solid fa-mosque"></i> HOLLYWOOD Mosque
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6 d-flex justify-content-center pt-2 pb-2 ps-0 pe-0 pt-sm-3 pb-sm-3 border-bottom border-2">
              <div className="land">
                <div className="align-items-center d-flex fs-5 fw-medium gap-2">
                  <i className="fa-solid fa-store"></i>Lingerie Store
                </div>
              </div>
            </div>
          </div>
          <div className="row g-sm-0 w-100 m-auto">
            <div className="col col-12 col-md-6 d-flex justify-content-center pt-2 pb-2 ps-0 pe-0 pt-sm-3 pb-sm-3 border-bottom border-2">
              <div className="land">
                <div className="align-items-center d-flex fs-5 fw-medium gap-2">
                  <i className="fa-solid fa-building-columns"></i> Afri Bank
                  Corporation
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6 d-flex justify-content-center pt-2 pb-2 ps-0 pe-0 pt-sm-3 pb-sm-3 border-bottom border-2">
              <div className="land">
                <div className="align-items-center d-flex fs-5 fw-medium gap-2">
                  <i className="fa-solid fa-hospital"></i> Hollywood Medical
                  Center
                </div>
              </div>
            </div>
          </div>
          <div
            className="close-icon position-absolute d-none d-sm-block"
            onClick={() => {
              setIsShown(false);
            }}>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
