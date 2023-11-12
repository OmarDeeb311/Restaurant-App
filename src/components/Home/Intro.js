import image from "../../imgs/resturant.jpg";
export default function Intro() {
  return (
    <div className="intro pb-5 pt-5">
      <div className="container">
        <h3 className="main-title m-0 border border-3 m-auto mb-5 p-2 text-center position-relative border-black text-uppercase z-1">
          Introduction
        </h3>
        <div className="row gy-5 gy-lg-0 ">
          <div className="col col-12 col-lg-6">
            <div className="box">
              <div className="resturant-img w-100 ">
                <img
                  src={image}
                  className="img-fluid img-thumbnail"
                  alt="Resturant"
                />
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-6">
            <div className="box text-center">
              <h3 className="fw-bold">Welcome To Dubai Sauce</h3>
              <div className="align-items-center d-flex justify-content-center m-3 nice-shape position-relative ">
                <i className="fa-solid fa-square-full"></i>
              </div>
              <h4 className="border-2 border-black border-bottom pb-2 fst-italic ">
                Top Halal Restaurant in Los Angeles
              </h4>
              <p className=" mt-2 text-start">
                Dubai Sauce is located in the heart of California, Los ‘ Angeles
                (located right on Hollywood Blvd!) The restaurant is a Halal
                Mediterranean Grill that is jam-packed with the Middle Eastern
                flavors that you will love! This fast-casual restaurant is a
                perfect place to hop in for lunch or to bring the whole family
                for dinner! Voted the best of Hollywood Blvd Restaurants! We
                deliver the Best Halal Middle Eastern & American Food and Stay
                Open Late!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
