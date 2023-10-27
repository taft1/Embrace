import React from "react";
import { render, screen } from "@testing-library/react";
import SampleComponent from "../SampleComponent"; // Replace with your actual component

test("renders sample component", () => {
  render(<SampleComponent />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
