import Beef_steak from "../../imgs/Beef-steak-kabob-plate-with-rice-salad-and-fries.jpg";
import Chicken_Kabob from "../../imgs/Chicken-Kabob-plate-with-rice-salad-and-hummus.jpg";
import Shawrma from "../../imgs/Chicken-Shawarma-Plate.jpg";
import Falafel_Plate from "../../imgs/Falafel-Plate.jpg";
import Beaf_stake_kabob from "../../imgs/Beef-Steak-Kabob-Plate.jpg";
import Halal_beef from "../../imgs/Halal-Beef-Steak-Tacos-Its-the-Salsa-Roja-for-me.jpg";
import Chicken_Shawrma_plate from "../../imgs/Chicken-Shawarma-plate-with-fries-and-rice.jpg";
import Fries_chicken from "../../imgs/House-seasoned-fries-with-chicken-kabob-wrap.jpg";
import Lamb_Beef from "../../imgs/Lamb-or-Beef-Gyro-Plate.jpg";
import Salad from "../../imgs/Salad.jpg";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Menu() {
  return (
    <div className="menu pt-5 pb-5">
      <h3 className="main-title m-0 border border-3 m-auto mb-5 p-2 text-center position-relative border-black text-uppercase z-1">
        Menu
      </h3>
      <div className="container d-flex flex-column gap-4">
        <Meal
          img={Beef_steak}
          description={"Beef Steak Kabob Plate with Rice, Salad and Fries"}
          price={18}
          servingTime={[12, 16]}
        />
        <Meal
          img={Chicken_Kabob}
          description={"Chicken Kabob Plate with Rice, Hummus and Salad"}
          price={12}
          servingTime={[12, 15]}
        />
        <Meal
          img={Shawrma}
          description={"Chicken Shawarma Plate"}
          price={18}
          servingTime={[12, 18]}
        />
        <Meal
          img={Falafel_Plate}
          description={"Falafel Plate"}
          price={10}
          servingTime={[8, 12]}
        />
        <Meal
          img={Beaf_stake_kabob}
          description={"Beef Steak Kabob Plate"}
          price={15}
          servingTime={[2, 10]}
        />
        <Meal
          img={Halal_beef}
          description={"Halal Beef Steak Tacos"}
          price={20}
          servingTime={[4, 10]}
        />
        <Meal
          img={Chicken_Shawrma_plate}
          description={"Chicken Shawarma Plate with Fries and Rice"}
          price={18}
          servingTime={[14, 19]}
        />
        <Meal
          img={Fries_chicken}
          description={"House Seasoned Fries with Chicken Kabob Wrap"}
          price={10}
          servingTime={[13, 23]}
        />
        <Meal
          img={Lamb_Beef}
          description={"Lamb or Beef Gyro Plate"}
          price={18}
          servingTime={[16, 22]}
        />
        <Meal
          img={Salad}
          description={"Salad"}
          price={5}
          servingTime={[8, 24]}
        />
        <button
          onClick={() => {
            Swal.fire({
              title: "Order Submitted",
              text: "Please Wait Until Your Order Being Ready!",
              icon: "success",
            });
          }}
          className="btn btn-outline-success fs-4 fw-semibold m-auto">
          Submit Order
        </button>
      </div>
    </div>
  );
}

function Meal({ img, description, price, servingTime }) {
  let opening = servingTime[0];
  let closing = servingTime[1];

  //* Check If the item is available according to the system time
  var date = new Date();
  let hour = date.getHours();
  let isAvailable = false;
  if (hour >= opening && hour < closing) {
    isAvailable = true;
  } else {
    isAvailable = false;
  }
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(count * price);
  return (
    <div
      className={
        isAvailable
          ? " pb-2 pt-2 row rounded gap-3 gap-lg-0 "
          : " pb-2 pt-2 row rounded gap-3 gap-lg-0 disable"
      }>
      <div className="col col-12 col-lg-3 position-relative ">
        <div className="meal-img d-flex justify-content-center  bg-gradient p-1 gap-3 gap-lg-0">
          <img
            src={img}
            alt={description}
            className="img-fluid rounded-circle object-fit-cover "
            width="150px"
            height="150px"
          />
        </div>
      </div>
      <div className="col col-12 col-lg-3">
        <div className="align-items-center box d-flex flex-column h-100 justify-content-between bg-gradient p-1 gap-3 gap-lg-0">
          <h5 className="border-2 border-bottom pb-2 text-center fw-semibold">
            Meal Description
          </h5>
          <p className=" fst-italic text-center ">{description}</p>
          <span className="align-items-center d-flex fw-bold gap-2">
            Price : <span className="fs-5 text-danger ">${price}</span>
          </span>
        </div>
      </div>
      <div className="col col-12 col-lg-2">
        <div className="align-items-center box d-flex flex-column h-100 justify-content-between bg-gradient p-1 gap-3 gap-lg-0">
          <h5 className="border-2 border-bottom pb-2 text-center fw-semibold">
            Quantity
          </h5>
          <div className="content d-flex justify-content-between align-items-center gap-3 mb-0 mb-lg-4">
            <i
              className="fa-solid fa-plus p-2 rounded-circle"
              onClick={() => {
                setCount(count + 1);
                setTotal(price * (count + 1));
              }}></i>
            <span className="fs-3 fw-bold "> {count} </span>
            <i
              className="fa-solid fa-minus p-2 rounded-circle"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                  setTotal(price * (count - 1));
                }
              }}></i>
          </div>
        </div>
      </div>
      <div className="col col-12 col-lg-2">
        <div className="align-items-center box d-flex flex-column h-100 justify-content-between bg-gradient p-1 gap-3 gap-lg-0">
          <h5 className="border-2 border-bottom pb-2 text-center fw-semibold">
            Serving Times
          </h5>
          <div className="mb-lg-4">
            <h5 className="fw-semibold">
              From{" "}
              <span className="text-success fw-bold">
                {opening <= 12 ? opening : opening - 12}&nbsp;
                {(opening >= 0 && opening < 12) || opening === 24 ? "AM" : "PM"}
              </span>
            </h5>
            <h5 className="fw-semibold">
              To{" "}
              <span className="text-danger fw-bold">
                {closing <= 12 ? closing : closing - 12}&nbsp;
                {(closing >= 0 && closing < 12) || closing === 24 ? "AM" : "PM"}
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="col col-12 col-lg-2">
        <div className="align-items-center box d-flex flex-column h-100 justify-content-between bg-gradient p-1 gap-3 gap-lg-0">
          <h5 className="border-2 border-bottom pb-2 text-center fw-semibold">
            Total Price
          </h5>
          <h2 className="mb-0 mb-lg-4 text-danger fw-bold"> ${total}</h2>
        </div>
      </div>
    </div>
  );
}
