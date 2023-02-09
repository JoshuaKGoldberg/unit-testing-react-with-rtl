import { render, screen } from "@testing-library/react";

import { FavoriteStar } from "./FavoriteStar";

describe(FavoriteStar, () => {
  it("renders a favorite label when favorite is true", () => {
    // 1. Renders your component (here, FavoriteStar) onto a DOM tree
    render(<FavoriteStar favorite />);

    // 2. Retrieves the DOM element that matches by text
    // https://testing-library.com/docs/queries/about
    // https://testing-library.com/docs/react-testing-library/cheatsheet
    screen.getByText(/⭐/);

    // Specifically, see https://testing-library.com/docs/queries/about/#priority
    // In fact, the query would probably be better as...
    // screen.getByLabelText("Favorite");
  });

  it("renders a non-favorite label when favorite is false", () => {
    // Let's write this together! ✨
  });
});
