import { useEffect,useState } from "react"
import Title from "../owner/title"
import { dummyCarData } from "../../assets/assets"
import { MdDelete } from "react-icons/md"





const ManageCars=()=>{
    const[cars,setCars]=useState([])
    const fetchOwnerCars=async()=>{
        // API call to fetch cars of owner
        setCars(dummyCarData)
    }

    useEffect(()=>{
        fetchOwnerCars()
    },[])
   
    return(
        <>
            <div className="bg-dark text-white text-center py-3"><h2 className="text-color">Manage Cars Details</h2></div>
            <div className="container mt-5">
                <Title title="Manage Cars" subTitle="View all listed cars,update their details or remove them from booking platform"/>

                <div className="mt-2">
                    <div className="row g-4 mt-3">
                         {cars.map((car, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                
                             <div className="manage-car-card p-3">

                                {/* IMAGE */}
                                <img
                                src={car.image}
                                alt=""
                                className="img-fluid rounded mb-3"
                                style={{ height: "180px", objectFit: "cover", width: "100%" }}
                                />

                                {/* TITLE */}
                                <h5 className="text-light mb-1">{car.brand}</h5>
                                <p className="text-secondary mb-2">{car.name}</p>

                                {/* PRICE */}
                                <p className="text-success mb-2">₹ {car.price} / day</p>

                                    {/* STATUS + DELETE */}
                                    <div className="d-flex justify-content-between align-items-center">

                                    <span
                                        className={`badge ${
                                        car.isAvailable ? "bg-success" : "bg-danger"
                                        }`}
                                    >
                                        {car.isAvailable ? "Available" : "Unavailable"}
                                    </span>

                                    <MdDelete className="delete-icon" />

                                    </div>

      </div>

    </div>
  ))}
</div>
                </div>
            </div>

        </>
    )
}

export default ManageCars