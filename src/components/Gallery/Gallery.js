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
import Modern_grill from "../../imgs/Dubai-Sauce-Modern-Grill.jpg";
import Shawrma_wrap from "../../imgs/Chicken-Shawarma-Wrap.jpg";
import Kabob_Wrap from "../../imgs/Chicken-Kabob-Wrap.jpg";
import Steak from "../../imgs/Steak-Tacos.jpg";
import Chicken_sharwma from "../../imgs/Chicken-Shawarma.jpg";
import Chicken_sharwma_2 from "../../imgs/Chicken-Shawarma-1.jpg";
import Beef_steak_kabob from "../../imgs/Beef-Steak-Kabobs.jpg";
import Chicken_burger from "../../imgs/Chicken-Burger-Fries.jpg";
import Beef_burger from "../../imgs/Beef-Burgers-grilled-to-perfection-for-a-Hollywood-Studio.jpg";
import Beef_steak_chicken from "../../imgs/Beef-steak-chicken-and-kofta-kabob-skewers-with-rice-salad-and-hummus.jpg";
import Footer from "../Home/Footer";
export default function Gallery() {
  return (
    <>
      <div className="gallery pt-5 pb-5">
        <h3 className="main-title m-0 border border-3 m-auto mb-5 p-2 text-center position-relative border-black text-uppercase z-1">
          Food Gallery
        </h3>
        <div className="container">
          <Meals
            img={[Beef_steak, Chicken_Kabob, Shawrma, Falafel_Plate]}
            title={[
              "Beef Steak Kabob Plate with Rice, Salad and Fries",
              "Chicken Kabob Plate with Rice, Hummus and Salad",
              "Chicken Shawarma Plate",
              "Halal Beef Steak Tacos",
            ]}
          />
          <Meals
            img={[
              Beaf_stake_kabob,
              Halal_beef,
              Chicken_Shawrma_plate,
              Fries_chicken,
            ]}
            title={[
              "Falafel Plate",
              "Beef Steak Kabob Plate",
              "Chicken Shawarma Plate with Fries and Rice",
              "House Seasoned Fries with Chicken Kabob Wrap",
            ]}
          />
          <Meals
            img={[Lamb_Beef, Salad, Modern_grill, Shawrma_wrap]}
            title={[
              "Lamb or Beef Gyro Plate",
              "Salad",
              "Dubai Sauce Modern Grill",
              "Chicken Shawrma Wrap",
            ]}
          />
          <Meals
            img={[Kabob_Wrap, Steak, Chicken_sharwma, Chicken_sharwma_2]}
            title={[
              "Chicken Kabob Wrap",
              "Steak Tacos",
              "Chicken Shawrma",
              "Chicken Shawrma",
            ]}
          />
          <Meals
            img={[
              Beef_steak_kabob,
              Chicken_burger,
              Beef_burger,
              Beef_steak_chicken,
            ]}
            title={[
              "Beef Steak Kabob",
              "Chicken Burger & Fries",
              "Beef Burgers grilled to perfection for a Hollywood Studio",
              "Beef steak, chicken and kofta kabob skewers with rice, salad and hummus",
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Meals({ img, title }) {
  let first_image = img[0];
  let second_image = img[1];
  let third_image = img[2];
  let fourth_image = img[3];
  let first_title = title[0];
  let second_title = title[1];
  let third_title = title[2];
  let fourth_title = title[3];
  return (
    <div className="row bg-gradient mb-4 pt-3">
      <div className="col col-12 col-sm-6 col-md-3">
        <div className="box mb-3 mb-md-0 d-flex  justify-content-center ">
          <div className="image position-relative " data-attr={first_title}>
            <img
              src={first_image}
              alt="meal"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
      <div className="col col-12 col-sm-6 col-md-3">
        <div className="box mb-3 mb-md-0 d-flex justify-content-center ">
          <div className="image position-relative " data-attr={second_title}>
            <img
              src={second_image}
              alt="meal"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
      <div className="col col-12 col-sm-6 col-md-3">
        <div className="box mb-3 mb-md-0 d-flex justify-content-md-end justify-content-center  ">
          <div className="image position-relative " data-attr={third_title}>
            <img
              src={third_image}
              alt="meal"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
      <div className="col col-12  col-sm-6 col-md-3">
        <div className="box mb-3 mb-md-0 d-flex justify-content-md-end justify-content-center  ">
          <div className="image position-relative " data-attr={fourth_title}>
            <img
              src={fourth_image}
              alt="meal"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
