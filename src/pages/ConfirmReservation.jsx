import { useLocation } from "react-router-dom";
import "./ConfirmReservation.css";
import CustomNavLink from "../components/CustomNavLink";

const ConfirmReservation = () => {
  const location = useLocation();
  const reservationData = location.state;

  if (!reservationData) {
    return <p>No reservation data found.</p>;
  }

  return (
    <article className="confirm-reservation">
      <h1>Your Reservation</h1>
      <p>
        {reservationData.name} has booked a table for{" "}
        {reservationData.guestsNumber} people on {reservationData.date},{" "}
        {reservationData.time}.
      </p>
      <div>
        <CustomNavLink to="/reservation-success">
          <button>Confirm</button>
        </CustomNavLink>
        <CustomNavLink to="/reservations" state={reservationData}>
          <button>Edit</button>
        </CustomNavLink>
      </div>
    </article>
  );
};

export default ConfirmReservation;
