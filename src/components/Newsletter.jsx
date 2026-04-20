const Newsletter=()=>{
    return (
        <div className="newsletter container mt-5  text-center text-white border border-1 border-primary p-5"> 
        <h2>Never Miss the Deal</h2>

        <p>Subscribe to get the latest offer, new arrivals and exclusive discount</p>
        <div>
            <form >
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <input type="text" placeholder="Enter Your Email id" required className="form-control"/>
                    <button className="btn btn-primary" type="button"> Subscribe</button>
                </div>
            </form>
        </div>

        </div>
        
    )
}

export default Newsletter