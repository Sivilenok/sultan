import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
  // checks that there are elements "Home", "Cosmetics and Hygiene" and "Name" in the DOM.
  test("renders a breadcrumb with correct items", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/catalog/1"]}>
        <Breadcrumb />
      </MemoryRouter>
    );

    expect(getByText("Главная")).toBeInTheDocument();
    expect(getByText("Косметика и гигиена")).toBeInTheDocument();
    expect(getByText("Имя")).toBeInTheDocument();
  });

  test("doesn't render anything when currentPath is '/'", () => {
    // checks that the component does not render anything if the current path is '/'
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Breadcrumb />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
  });

  test("renders active text when currentPath is last in the breadcrumb", () => {
    // checks that the component correctly displays the active path
    const { getByText } = render(
      <MemoryRouter initialEntries={["/catalog/1"]}>
        <Breadcrumb />
      </MemoryRouter>
    );

    expect(getByText("Имя")).toHaveClass("active_text");
  });
});
