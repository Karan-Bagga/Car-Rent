import { useState } from 'react'
import Title from '../components/Title'
import { dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'



const Cars=()=>{
    const [input,setInput]=useState("")
    return(
        <div className='container text-white mt-5'>
            <Title title='Available Cars' subTitle='Browse Our selection of premium vehicles available for your next adventure ' />

            <div className="mt-5">
                <form >
                    <div className="my-3">
                        <input type="text" className='form-control' placeholder='Search by make, or features' />
                    </div>

                    <div className="my-3">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button className='btn btn-dark'>Search</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="mt-5">
                

                <div className="row gy-3">
                    {
                        dummyCarData.map((car)=>(
                            <>
                            <div key={car.id} className='col-lg-4'>
                               <CarCard  car={car}/>
                            </div>
                            </>
                        ))
                    }
                </div>

            </div>



        </div>
    )
}
export default Cars