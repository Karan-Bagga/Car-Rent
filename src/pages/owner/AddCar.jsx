import { useState } from "react"
import Title from "../owner/title"


const AddCar=()=>{
    const [image,setImage]=useState(null)
    const [car,setCar]=useState({
        brand:"",
        model:"",
        year:"",
        pricePerDay:"",
        category:"",
        transmission:'',
        fuelType:'',
        seats:"",
        location:"",
        description:""
    })

    const handleSubmit=async(e)=>{}

    return(
        <>

            <div className="bg-dark text-color text-center py-3"><h2>Add Car Details</h2></div>
            <div className="container mt-5">
                <Title  className="text-color " title="Add New Car" />
                <Title  subTitle="Fill in details to list  new car for booking"/>


            <form onSubmit={handleSubmit} className="car-form p-4 rounded">
                {/* IMAGE UPLOAD */}
                    <div className="mb-4">
                    <label className="form-label">Car Image</label>

                    <div className="image-upload-box text-center p-4">
                        {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="preview"
                            className="img-preview"
                        />
                        ) : (
                        <p className="text-secondary">Click to upload image</p>
                        )}

                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="file-input"
                        />
                    </div>
                    </div>

                <div className="row g-3">

                    {/* BRAND */}
                    <div className="col-md-6">
                    <label className="form-label">Brand</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        placeholder="e.g. Toyota"
                        value={car.brand}
                        onChange={(e) => setCar({...car, brand: e.target.value})}
                    />
                    </div>

                    {/* MODEL */}
                    <div className="col-md-6">
                    <label className="form-label">Model</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        placeholder="e.g. Fortuner"
                        value={car.model}
                        onChange={(e) => setCar({...car, model: e.target.value})}
                    />
                    </div>

                    {/* YEAR */}
                    <div className="col-md-4">
                    <label className="form-label">Year</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        value={car.year}
                        onChange={(e) => setCar({...car, year: e.target.value})}
                    />
                    </div>

                    {/* PRICE */}
                    <div className="col-md-4">
                    <label className="form-label">Price / Day</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        value={car.pricePerDay}
                        onChange={(e) => setCar({...car, pricePerDay: e.target.value})}
                    />
                    </div>

                    {/* SEATS */}
                    <div className="col-md-4">
                    <label className="form-label">Seats</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        value={car.seats}
                        onChange={(e) => setCar({...car, seats: e.target.value})}
                    />
                    </div>

                    {/* CATEGORY */}
                    <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        value={car.category}
                        onChange={(e) => setCar({...car, category: e.target.value})}
                    />
                    </div>

                    {/* TRANSMISSION */}
                    <div className="col-md-3">
                    <label className="form-label">Transmission</label>
                    <select
                        className="form-control dark-input"
                        value={car.transmission}
                        onChange={(e) => setCar({...car, transmission: e.target.value})}
                    >
                        <option value="">Select</option>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                    </div>

                    {/* FUEL */}
                    <div className="col-md-3">
                    <label className="form-label">Fuel</label>
                    <select
                        className="form-control dark-input"
                        value={car.fuelType}
                        onChange={(e) => setCar({...car, fuelType: e.target.value})}
                    >
                        <option value="">Select</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                    </select>
                    </div>

                    {/* LOCATION */}
                    <div className="col-md-12">
                    <label className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control dark-input"
                        value={car.location}
                        onChange={(e) => setCar({...car, location: e.target.value})}
                    />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control dark-input"
                        rows={3}
                        value={car.description}
                        onChange={(e) => setCar({...car, description: e.target.value})}
                    />
                    </div>

                    {/* BUTTON */}
                    <div className="col-12 text-end mt-3">
                    <button className="btn btn-success px-4">
                        Add Car
                    </button>
                    </div>

                </div>
            </form>

        </div>


        </>
    )
}

export default AddCar