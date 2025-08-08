import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("has main landmark, heading and back home link", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 1, name: /sorry!/i });
    expect(heading).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /go back home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
