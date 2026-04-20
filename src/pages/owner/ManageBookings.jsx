import { useEffect, useState } from "react";
import { dummyMyBookingData } from "../../assets/assets";
import Title from "../owner/title";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingData);
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <>
      {/* Full Dark Background */}
      <div className="bg-dark min-vh-100 text-light">

        {/* Header */}
        <div className="text-center py-3 border-bottom border-secondary">
          <h2 className="text-color fw-bold">Manage Bookings</h2>
        </div>

        <div className="container mt-4">
          <Title
            title="Manage Bookings"
            subTitle="Track, approve or cancel customer bookings"
          />

          {/* Dark Card */}
          <div className="card bg-secondary bg-opacity-10 border border-secondary mt-4 shadow">
            <div className="card-body p-0">

              <table className="table table-dark table-hover align-middle mb-0">
                
                <thead className="table-dark">
                  <tr className="text-secondary">
                    <th>Car</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status / Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index}>

                      {/* Car */}
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={booking.image}
                            alt=""
                            style={{
                              width: "80px",
                              height: "55px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p className="mb-0 fw-semibold text-light">
                            {booking.carName}
                          </p>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="text-secondary">
                        {booking.pickupDate} → {booking.returnDate}
                      </td>

                      {/* Price */}
                      <td className="fw-semibold text-success">
                        ₹{booking.totalPrice}
                      </td>

                      {/* Payment */}
                      <td>
                        <span className="badge bg-warning text-dark">
                          Offline
                        </span>
                      </td>

                      {/* Status */}
                      <td>
                        {booking.status === "pending" ? (
                          <div className="d-flex gap-2 align-items-center">
                            <select
                              className="form-select form-select-sm bg-dark text-light border-secondary"
                              value={booking.status}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>

                            <button className="btn btn-sm btn-success">
                              ✔
                            </button>

                            <button className="btn btn-sm btn-danger">
                              ✖
                            </button>
                          </div>
                        ) : (
                          <span
                            className={`badge ${
                              booking.status === "confirmed"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {booking.status}
                          </span>
                        )}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBookings;