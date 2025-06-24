const { render, screen } = require("@testing-library/react");
import RestaurantCard from ("../RestaurantCard")
import "@testing-library/jest-dom"
describe("Test cases for the Restaurant Card", () => {
  it("Should render RestaurantCard component with props data", () => {
   render(<RestaurantCard restdata={Mock_Data} />)

   const name = screen.getByText("Leon");

   expect(name).toBeInTheDocument();


  });
});
