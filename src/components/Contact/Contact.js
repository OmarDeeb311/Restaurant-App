import Footer from "../Home/Footer";
export default function Contact() {
  return (
    <>
      <div className="contact pt-5 pb-5">
        <h3 className="main-title m-0 border border-3 m-auto mb-5 p-2 text-center position-relative border-black text-uppercase z-1">
          Contact Us
        </h3>
        <div className="container">
          <div className="row gy-5">
            <div className="col col-12 col-md-6">
              <div className="box d-flex flex-column gap-3">
                <input
                  className="border-0 fs-6 fw-semibold p-2 ps-3 rounded-2 "
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  autoComplete="name"
                />
                <input
                  className="border-0 fs-6 fw-semibold p-2 ps-3 rounded-2 "
                  type="text"
                  placeholder="Your E-mail"
                  name="e-mail"
                />
                <input
                  className="border-0 fs-6 fw-semibold p-2 ps-3 rounded-2 "
                  type="text"
                  placeholder="Your Phone Number"
                  name="phone"
                  autoComplete="phone"
                />
                <input
                  className="border-0 fs-6 fw-semibold p-2 ps-3 rounded-2 "
                  type="text"
                  placeholder="Your Subject"
                  name="phone"
                  autoComplete="phone"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="box d-flex flex-column gap-3">
                <textarea
                  className="border-0 fs-6 fw-semibold p-2 ps-3 rounded-2 "
                  placeholder="Your Message"
                  name="message"
                  rows={10}></textarea>
                <button className="btn btn-outline-success w-50 align-self-center ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
