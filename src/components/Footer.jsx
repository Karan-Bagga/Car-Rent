import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaSquareWhatsapp } from "react-icons/fa6"
const Footer=()=>{
    return(
        <div className="footer text-white mt-5">
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-3">
                       <div className="fs-5">car<span className="text-info fs-5">Rent</span></div>
                        <p>Premium car rental service with a wide section of luxury and everyday vechicles for all your driving needs </p>

                        <div>
                            <FaFacebookSquare className="footer-icons" />
                            <FaSquareInstagram className="footer-icons" />
                            <FaSquareXTwitter className="footer-icons" />
                            <FaSquareWhatsapp className="footer-icons"/>
                        </div>
                    </div>
                    
                        <div className="col-lg-3">
                            <h5>Quick Links</h5>
                            <p>Home</p>
                            <p>Browse</p>
                            <p>About Us</p>
                            
                        </div>
                        <div className="col-lg-3">
                            <h5>Resources</h5>
                            <p>Help Center</p>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Insurance</p>
                        </div>
                        <div className="col-lg-3">
                            <h6>Contact</h6>
                            <p>1234 , Subathu Road</p>
                            <p>Solan</p>
                            <p>+91 7876826345</p>
                            <p>Karanbagga@gmail.com</p>

                        </div>
                   

                </div>
            </div>

            <hr />
            <p className="text-center pb-3">copyright 2026 CarRent</p>

        </div>
    )
}

export default Footer

