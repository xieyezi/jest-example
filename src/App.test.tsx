import App from "./App";
import { render } from "@testing-library/react";

describe("ModuleUpsellCards", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    const { getByRole } = render(<App />);
    const element = getByRole("div");
    console.log(element);
    //expect(screen.getByTestId('module-upsell-cards')).toBeInTheDocument();
  });
});
