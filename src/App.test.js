import { render, screen } from '@testing-library/react';
import App from './App';
// import BookingForm from './bookingpage/bookingForm';

test('Renders the BookingForm heading', () => {
  render(<App />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})
