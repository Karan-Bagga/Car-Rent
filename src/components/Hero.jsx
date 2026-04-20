import { useState } from "react"
import { cityList } from "../assets/assets"

const Hero=()=>{
    const[pickupLocation,setPickupLocation]=useState("")
    return(
        <>
        <div className="hero">
            <div className="hero-text">
                <h1 className="text-success">
                    Luxury Cars On Rent
                </h1>

            </div>
            <div className="row container mt-2">
                <div className="col-lg-3">
                    <select  className="form-select" value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                        <option value="">Pickup Location</option>
                        {
                            cityList.map((city)=><option key={city} value={city}>{city}</option>)
                        }
                    </select>
                    <p className="text-white mt-2 text-center">{pickupLocation?pickupLocation:'Please Select Location'}</p>
                </div>

                <div className="col-lg-3">
                    <input type="date"  id="pickup-date" className="form-control" />
                    <p className="text-white mt-2 text-center">Pick-up Date</p>
                </div>

                <div className="col-lg-3">
                    <input type="date"  id="return-date" className="form-control" />
                    <p className="text-white mt-2 text-center">Return Date</p>
                </div>

                <div className="col-lg-3">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Hero