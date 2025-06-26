import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import MOCK_DATA_NAME from "../../../API file/menuItems";
import { Provider } from "react-redux";
import Header from "../Header"
import "@testing-library/jest-dom"
// to work with tobeinthedocument
import Cart from "../Cart"

//mock fetch features make the fetch work.
global.fetch = jest.fn(()=>{
    Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA_NAME) 
        }
    })
})

it("Should load restaurant Menu Components", async () => {
  await act(async () =>
    render(
        // give provider to work with Redux and BrowerRouter to work with link.
      <Provider store={appStore}>
        <BrowserRouter>
         <Header/>
          <RestaurantMenu />
          <Cart/>
        </BrowserRouter>
      </Provider>
    )
  ); 

  const select = screen.getAllByText("KFC Large Bucket");

  expect(screen.getAllByText("Add to Cart!").length).toBe(29);

  const addBtns = screen.getAllByRole("button", {name : "Add to Cart!"})
 console.log(addBtns.length);

 fireEvent.click(addBtns[0]);

 expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
 fireEvent.click(addBtns[0]);
 expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
 //try more





});
 