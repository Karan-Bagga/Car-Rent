import { FaGrinStars } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";

import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";


const CarCard = ({ car }) => {
  return (
    <div className="  bg-dark text-light card car-card p-3 border-0 shadow-sm">
      <div className="d-flex gap-3">

        <img src={car.image} className="car-img img-fluid" alt="car" />

        <div className="flex-grow-1">

          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-semibold mb-1">{car.name}</h6>
            <span className="price">₹{car.price}/day</span>
          </div>

          <div className=" mb-1 features pt-3 row">
            <div className="col"><FaGrinStars /> {car.rating} ({car.reviews})</div>
            <div className="col"><MdSpeed /> {car.mileage}</div>
          </div>

          <div className=" row features pt-3">
            <div className="col"><GiGearStickPattern /> {car.transmission}</div>
            <div className="col"><FaGasPump /> {car.fuel}</div>
            

          </div>

          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-success text-black btn-sm px-3">
              Rent Now →
            </button>
            <button className="btn btn-outline-secondary btn-sm px-3">
              Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarCard