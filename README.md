# Command with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm install`
To install the node_modules


# A few change of the requirement:

### booking Page:

The booking page include the bookingForm, I don't use the props way to props the avilableTime to bookingForms, I change these function inside the bookingForm.js


### bookingApi.js:
I added export in front of the function, that make it can export the function .


### bookingForm.js:
I create a function changeTimeFormat(), it gets the value of the input date and change to an api date , that can returm the available date by selected date.
