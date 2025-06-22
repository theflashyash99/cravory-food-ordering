import { render, screen, } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';




test("Should load the component in DOM" , () => {
     

    render(<Contact/>);

    const heading = screen.getByRole("heading");
    const input  = screen.getAllByRole("textbox");

    console.log(input.length);


    expect(heading).toBeInTheDocument();
    // expect(input).toHaveLength(2);

});