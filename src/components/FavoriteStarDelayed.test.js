import { render, screen } from "@testing-library/react";

import { FavoriteStarDelayed } from "./FavoriteStarDelayed";

describe(FavoriteStarDelayed, () => {
  it("does not render a favorite label before the timeout when favorite is true", () => {
    // 1. Renders your component (here, FavoriteStarDelayed) onto a DOM tree
    render(<FavoriteStarDelayed favorite />);

    // 2. Retrieves the DOM element that matches by text
    // https://testing-library.com/docs/queries/about
    // https://testing-library.com/docs/react-testing-library/cheatsheet
    expect(screen.queryByLabelText("Favorite")).toBeNull();

    // If we'd used get, this would have crashed!
    // expect(screen.getByLabelText("Favorite")).toBeNull();
  });

  it("renders a favorite label after the timeout when favorite is true", () => {
    // 1. Renders your component (here, FavoriteStarDelayed) onto a DOM tree
    render(<FavoriteStarDelayed favorite />);

    // 2. Retrieves the DOM element that matches by text
    // https://testing-library.com/docs/queries/about
    // https://testing-library.com/docs/react-testing-library/cheatsheet
    screen.findByLabelText("Favorite");
  });
});
