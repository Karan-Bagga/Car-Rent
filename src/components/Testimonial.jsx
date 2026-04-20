import { FcRating } from "react-icons/fc"
import {testimonials} from "../assets/assets"

const Testimonial=()=>{
    //   console.log(testimonials)
    return(
        <div className="mt-5 container">
            <h2 className="text-center text-color">What Our Customers Say !</h2>
            <div className="container text-center mt-5">
                <div className="row gy-3">
                    {
                        testimonials.map((data)=>
                        {
                            return (
                             <>
                                <div className="col-lg-3">
                                    <div className="card-test">
                                        <img src={data.image} alt="" className=" image-testimonial"/>

                                        <div className="mt-2">
                                            <p>
                                                {data.name}
                                            </p>
                                            <p className="text-light
                                            ">{data.comment}</p>
                                        </div>
                                        
                                        <p>Customer Rating : <span className="text-success">{data.rating}</span> </p>
                                        
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

export default Testimonial
