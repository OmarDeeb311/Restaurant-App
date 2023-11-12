import Logo from "../../imgs/logo.jpg";
export default function Footer() {
  return (
    <footer className="pt-4 pb-3">
      <div className="container">
        <div className="row align-items-center gy-3 gy-md-0 ">
          <div className="col col-12 col-md-2">
            <div className="box">
              <div className="image d-flex justify-content-center ">
                <img
                  src={Logo}
                  alt="logo"
                  className="img-fluid rounded-circle "
                />
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6">
            <div className="box d-flex flex-column gap-3 align-items-center">
              <h4>
                Done With <i className="fa-solid fa-heart"></i> By
                <span> Omar Khalil </span>
              </h4>
              <div>
                <i className="fa-regular fa-copyright text-white-50 "></i>{" "}
                <span>All Rights Reserved</span>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-4">
            <div className="box d-flex gap-2 justify-content-center justify-content-md-end ">
              <i className="fa-brands fa-facebook  rounded-circle fs-5"></i>
              <i className="fa-brands fa-whatsapp p-2 rounded-circle fs-5"></i>
              <i className="fa-brands fa-twitter p-2 rounded-circle fs-5"></i>
              <i className="fa-brands fa-instagram p-2 rounded-circle fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
