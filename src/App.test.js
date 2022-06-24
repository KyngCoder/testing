import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   //render component that you would like to test
//   render(<App />);

//   //Get the specific element you want to take
//   const linkElement = screen.getByText(/learn react/i);

//   //assetion
//   expect(linkElement).toBeInTheDocument();
// });

test('input to be empty on render' , ()=> {
  //get component
  render(<App />)

  //get component element
  const emailInput = screen.getByRole('textbox')
  const passwordInput = screen.getByLabelText('Password')
  const confirmPasswordInput = screen.getByLabelText('Confirm Password')

  //assertion
  expect(emailInput.value).toBe("")
  expect(passwordInput.value).toBe("")
  expect(confirmPasswordInput.value).toBe("")
})