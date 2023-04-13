import { useEffect, useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../bookingApi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Main = (props) => {
  const formik = useFormik({
    initialValues: {
      availableTimes: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },validationSchema:Yup.object({
    availableTimes:Yup.date().required('Date is not empty'),
    date:Yup.string().required("Time is not empty"),
    guests:Yup.number().min(1).max(10).required("Guest is not empty"),
    occasion:Yup.string().required("Occasion is not empty"),
    }),
    onSubmit: (values) => {
      console.log(values);

    },
  });

  const updateTimes = (state, action) => {
    return fetchAPI(state);
  };
  const initializeTimes = new Date();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    fetchAPI(initializeTimes)
  );
  const [date, setDate] = useState(formatDate());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };

    if (submitAPI(data) == true) {
      console.log("ok");
      navigate("/confirmPage");
    } else console.log("bad");
  };

  function formatDate(date = new Date()) {
    var day, month, year;
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return year + "-" + month + "-" + day;
  }

  const changeTimeFormat = (data) => {
    const test = data.slice(8, 10);
    dispatch(test);
  };

  const availTimeList = availableTimes.map((number, index) => {
    return (
      <option key={index} value={number}>
        {number}
      </option>
    );
  });

  useEffect(() => {
    console.log("Date:", { date });
  }, [date]);
  useEffect(() => {
    console.log("Time:", { time });
  }, [time]);
  useEffect(() => {
    console.log("Guests:", { guests });
  }, [guests]);
  useEffect(() => {
    console.log("Occasion:", { occasion });
  }, [occasion]);
  useEffect(() => {
    console.log("available Time :", { availableTimes });
  }, [availableTimes]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => {
            setDate(e.target.value);
            changeTimeFormat(e.target.value);
          }}
          value={date}
        />

        <label for="res-time">Choose time</label>
        <select
          id="time"
          name="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          value={time}
        >
          {availTimeList}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          onChange={(e) => {
            setGuests(e.target.value);
          }}
          value={guests}
        />
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
          value={occasion}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default Main;
