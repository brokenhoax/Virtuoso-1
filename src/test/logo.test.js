// Use this as an example test????
import React from "react";
import { render } from "@testing-library/react";
import Logo from "../components/logo/Logo";

test("renders learn react link", () => {
  const { getByText } = render(<Logo />);
  const logo = getByText(/V/);
  expect(logo).toBeInTheDocument();
});
