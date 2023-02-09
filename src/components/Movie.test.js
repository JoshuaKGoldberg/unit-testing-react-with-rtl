import { render, screen } from "@testing-library/react";

import { createStubMovie } from "../data/__fixtures__/movie";
import { Movie } from "./Movie";

describe(Movie, () => {
  it("renders a single starring role when only one exists", () => {
    const toggleFavorite = jest.fn();
    render(
      <Movie
        toggleFavorite={toggleFavorite}
        movie={createStubMovie({
          starring: ["apple"],
        })}
      />
    );

    screen.getByText("Starring: apple");
  });

  it("renders a multiple starring roles separated by commas when multiple exist", () => {
    const toggleFavorite = jest.fn();
    render(
      <Movie
        toggleFavorite={toggleFavorite}
        movie={createStubMovie({
          starring: ["apple", "banana"],
        })}
      />
    );

    screen.getByText("Starring: apple, banana");
  });
});
