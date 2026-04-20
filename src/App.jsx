import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Navbar from './components/navbar'
import Dashboard from './pages/owner/Dashboard'
import Footer from './components/Footer'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'

const App = () => {
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
      
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car-detail/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner/dashboard' element={<Dashboard/>}/>
        <Route path='/owner/addcar' element={<AddCar/>}/>
        <Route path='/owner/managecars' element={<ManageCars/>}/>
        <Route path='/owner/manageBookings' element={<ManageBookings/>}/>
      </Routes>

      <Footer />
    </div>
  )
}
export default App
