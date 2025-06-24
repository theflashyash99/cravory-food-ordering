import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // One way to find -------
  //  const loginButton = screen.getByRole("button");
  //-----------OR--------
  const loginButton = screen.getByRole("button", { name: "Login" });

  //Second way to find------
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with a Cart items 0", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const CartItem = screen.getByText("Cart - (0 items)");

  expect(CartItem).toBeInTheDocument();
});

it("Should load Header component with a Cart only", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const CartItem2 = screen.getByText(/Cart/);
  // this is the regex which is used to search element which has the word Cart.

  expect(CartItem2).toBeInTheDocument();
});

it("Should change to Login Button to Logout onClick", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  ); 
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
