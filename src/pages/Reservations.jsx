import "./Reservations.css";
import { useNavigate, useLocation } from "react-router-dom";

const Reservations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultData = location.state || {};

  function getToday() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // 月份从0开始
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      navigate("/confirm-reservation", { state: data });
    } else {
      form.reportValidity();
    }
  }

  return (
    <form className="reservations" onSubmit={handleSubmit}>
      <h1>Make a reservation</h1>
      <div className="input-area">
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            defaultValue={defaultData.name || ""}
            required
          />
        </div>
        <div>
          <label htmlFor="">Number of Guests: </label>
          <input
            type="number"
            name="guestsNumber"
            defaultValue={defaultData.guestsNumber || ""}
            required
          />
        </div>
        <div>
          <label htmlFor="">Reservation Date: </label>
          <input
            type="date"
            name="date"
            defaultValue={defaultData.date || getToday()}
            min={getToday()}
            required
          />
        </div>
        <div>
          <label htmlFor="">Reservation Time </label>
          <input
            type="time"
            name="time"
            defaultValue={defaultData.time || ""}
            min="11:00"
            max="19:00"
            step="3600"
            list="hourOptions"
            required
          />
          <datalist id="hourOptions">
            <option value="11:00" />
            <option value="12:00" />
            <option value="13:00" />
            <option value="14:00" />
            <option value="15:00" />
            <option value="16:00" />
            <option value="17:00" />
            <option value="18:00" />
            <option value="19:00" />
          </datalist>
        </div>
        <button>Reserve</button>
      </div>
    </form>
  );
};

export default Reservations;
