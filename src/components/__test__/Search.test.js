import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react'; // or get it from RTL
import { BrowserRouter } from 'react-router-dom';
import Body from '../Body';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_DATA),
  })
);

it("renders the Body component with Search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole('button', { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {target : {value : "burger"}});
  // this will let you perform the test on the basis of value give in the target when the event hit the given value and testing is performed on it.
  
  fireEvent.click(searchBtn);
   const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(4)

});

