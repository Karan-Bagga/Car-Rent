import { dummyUserData,dummyDashboardData } from "../../assets/assets"

import { NavLink } from "react-router-dom"
import { MdCarRental } from "react-icons/md"
import Title from "../owner/title"

import { useEffect,useState } from "react"

const Dashboard =()=>{


    const user=dummyUserData
    const[data,setdata]=useState({
        totalCars:0,
        totalBookings:0,    
        pendingBookings:0,
        completedBookings:0,
        recentBookings:[],
        monthlyRevenue:0
    })

    const dashboardCards=[
            {title:'Total Cars',value:data.totalCars},
            {title:'Total Bookings',value:data.totalBookings},
            {title:'Pending',value:data.pendingBookings},
            {title:'confirmed',value:data.completedBookings},       
    ]

    useEffect(()=>{
        setdata(dummyDashboardData)
    },[])
    return(
        <>
        <div className="d-flex mb-3 bg-dark text-white">
            <div className="me-auto p-2">
                <NavLink className="text-decoration-none text-white" to="/"><MdCarRental/>car <span className="text-info fs-4">Rent</span></NavLink>
            </div>
            <div className="p-2 "><img src={user.image} alt=""  className="user-img"/></div>
            <div className="p-2">Welcome,{user.name}</div>
        </div>


        <div className="container mt-5 p-5">
            <div className="row">

                <div className="col-lg-6 text-secondary">
                    
                             <Title title="Admin Dashboard" subTitle="Manage your cars, bookings and view insights all in one place">
                            </Title>

                            

                    <div className="row ">
                        {
                            dashboardCards.map((card,index)=>{
                                return(
                                    <div key={index} className="col-md-6 mb-3">
                                        <div className="card text-bg-dark h-100">
                                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                                <h5 className="card-title text-success">{card.title}</h5>
                                                <p className="card-text  fs-4">{card.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <div className="col-lg-12 ">
                        <div>
                            <div className="card text-bg-dark mb-3">
                                <div className="card-header">Owner Add Car</div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                       <NavLink  to="/owner/addcar" className="btn btn-info ">Add Car </NavLink>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card text-bg-dark mb-3">
                                <div className="card-header">Owner Manage Car</div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                       <NavLink  to="/owner/managecars" className="btn btn-info">Manage Cars </NavLink>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card text-bg-dark mb-3">
                                <div className="card-header">Owner Manage Bookings</div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                       <NavLink  to="/owner/managebookings" className="btn btn-info">Manage Bookings </NavLink>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                
            </div>
            
            
        </div>
        

        </>
    )
}

export default Dashboard