import { useNavigate } from "react-router-dom"

import { dummyCarData } from "../assets/assets"
import CarCard from "./CarCard"
import Title from "./Title"

const FeaturedSection=()=>{
    return(
        <>
        <div className="container mt-5 text-white">
            <div>
                <Title title='Featured Vechicles' subTitle='Explore our Selection of Premium Vechilces available for your next Adventure '></Title>
            </div>

            <div className="row g-4">
                {
                    dummyCarData.map((car)=>(
                        <div key={car.id} className="col-md-4">
                            <CarCard car={car}/>
                            </div>
                    ))
                }
            </div>

            <div className="mt-3">
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-info me-md-2" onClick={()=>navigate('/cars')}>Explore All Cars </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default FeaturedSection