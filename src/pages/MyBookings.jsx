import { useEffect,useState } from "react"
import { dummyMyBookingData } from "../assets/assets"
import Title from "../components/Title"

import { FaIndianRupeeSign } from "react-icons/fa6"

const MyBookings=()=>{
    const[bookings,setBookings]=useState([])

    const fetchMYBookings =async()=>{
        setBookings(dummyMyBookingData )
    }

    useEffect(()=>{
        fetchMYBookings()
    },[])

    return(
                    <div>
                        <div className="container text-white  mt-5">
                            <Title  title='My Bookings'  subTitle="View and manage your all car bookings"/>
                        </div>

                        <div className="container mt-5">
                            <div className="row">
                                {
                            

                                    bookings.map((bookings,index)=>{
                                        return(
                                            <>
                                        <div className="col-lg-12 mb-4" key={bookings.id}>
  <div className="card booking-card-dark p-3 border-0">

    <div className="row align-items-center">

      {/* IMAGE */}
      <div className="col-md-4">
        <img
          src={bookings.image}
          className="img-fluid rounded"
          alt=""
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
      </div>

      {/* CONTENT */}
      <div className="col-md-8">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0 text-light">{bookings.carName}</h5>

          <span
            className={`badge px-3 py-2 ${
              bookings.status === "Completed"
                ? "bg-success"
                : bookings.status === "Pending"
                ? "bg-warning text-dark"
                : "bg-danger"
            }`}
          >
            {bookings.status}
          </span>
        </div>

        {/* PRICE */}
        <p className="text-secondary mb-3">
          ₹ {bookings.pricePerDay} / day
        </p>

        {/* DETAILS */}
        <div className="row small text-secondary">

          <div className="col-6 mb-2">
            <span className="text-light">Rental</span><br />
            {bookings.pickupDate} → {bookings.returnDate}
          </div>

          <div className="col-6 mb-2">
            <span className="text-light">Location</span><br />
            {bookings.pickupLocation}
          </div>

        </div>

        {/* FOOTER */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h6 className="mb-0 text-light">
            Total: <span className="text-success">₹ {bookings.totalPrice}</span>
          </h6>

          <button className="btn btn-outline-light btn-sm">
            View Details
          </button>
        </div>

      </div>
    </div>

  </div>
</div>
                                
           </>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}
export default MyBookings