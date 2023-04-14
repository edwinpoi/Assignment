import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../bookingApi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Main = () => {
  const updateTimes = (state, action) => {
    return fetchAPI(state);
  };
  const initializeTimes = new Date();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    fetchAPI(initializeTimes)
  );
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name:" ",
      phoneNumber:" ",
      email:" ",
      date: formatDate(),
      time: availableTimes[0],
      guests: 1,
      occasion: "Birthday",
    },

    validationSchema: Yup.object({
      date: Yup.string().required("Date is not empty"),
      time: Yup.string().required("Time is not empty"),
      guests: Yup.number()
        .min(1, "Guest must be at least 1")
        .max(25)
        .required("Guest is not empty"),
      occasion: Yup.string().required("Occasion is not empty"),
      name:Yup.string().min(3,"Character at least 3 ").required("Name is not empty"),
      phoneNumber:Yup.string().min(8).required("number is not empty"),
      email:Yup.string().min(6).required("email is not empty"),
    }),

    onSubmit: (values) => {
      if (submitAPI(values) == true) {
        console.log(values);
        navigate("/confirmPage", { state: values });
      } else console.log("bad");
    },
  });

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
// Change the input date and make in can put in Api
  const changeTimeFormat = (data) => {
    const test = data.slice(8, 10);
    dispatch(test);
    formik.values.date = data;
  };

  const availTimeList = availableTimes.map((number, index) => {
    return (
      <option key={index} value={number}>
        {number}
      </option>
    );
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <h1>Table booking</h1>


        <div>
          <label for="name">Name:</label>
          <br />
          <input
            type="text"
            placeholder=""
            id="name"
            name="name"
            aria-label="Your name"
            {...formik.getFieldProps("name")}
          />

          {formik.touched.name && formik.errors.name ? (
            <div className="formError">{formik.errors.name}</div>
          ) : null}
        </div>


        <div>
          <label for="phoneNumber">Phone number:</label>
          <br />
          <input
            type="tel"
            placeholder=""
            id="phoneNumber"
            name="phoneNumber"
            aria-label="Your phone number"
            {...formik.getFieldProps("phoneNumber")}
          />

          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="formError">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>

        <div>
          <label for="email">Email:</label>
          <br />
          <input
            type="email"
            placeholder=""
            id="email"
            name="email"
            aria-label="Your email"
            {...formik.getFieldProps("email")}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="formError">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label for="res-date">Date:</label>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            aria-label="Booking Date"
            onChange={(e) => {
              changeTimeFormat(e.target.value);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
            {formik.touched.date && formik.errors.date ? (
            <div className="formError">{formik.errors.date}</div>
          ) : null}
        </div>
        <div>
          <label for="res-time">Time</label>
          <br />
          <select id="time" name="time" aria-label="Booking Time" {...formik.getFieldProps("time")}>
            {availTimeList}
          </select>

          {formik.touched.time && formik.errors.time ? (
            <div className="formError">{formik.errors.time}</div>
          ) : null}
        </div>
        <div>
          <label for="guests">Number of Guests:</label>
          <br />
          <input
            type="number"
            placeholder=""
            id="guests"
            name="guests"
            aria-label="Number of guest"
            {...formik.getFieldProps("guests")}
          />

          {formik.touched.guests && formik.errors.guests ? (
            <div className="formError">{formik.errors.guests}</div>
          ) : null}
        </div>
        <div>
          <label for="occasion">Occasion:</label><br/>
          <select
            id="occasion"
            name="occasion"
            aria-label="Occasion"
            {...formik.getFieldProps("occasion")}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <div className="formError">{formik.errors.occasion}</div>
          ) : null}
        </div><br/>

        <input type="submit" value="Make Your reservation"  aria-label="submit"/>
      </form>
    </div>
  );
};

export default Main;
