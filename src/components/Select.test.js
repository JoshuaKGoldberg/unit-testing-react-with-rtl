import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { Select } from "./Select";

describe(Select, () => {
  it("fires onChange with the new value when an option is selected", () => {
    // 1. Create a "spy" (mock function) that keeps track of its calls
    // https://jestjs.io/docs/mock-functions
    const onChange = jest.fn();

    // 2. Renders your component (here, Select) with the spy as a prop
    render(
      <Select
        onChange={onChange}
        options={["apple", "banana", "cherry"]}
        selected="cherry"
      />
    );

    // Uses the user-event library to simulate the user selecting an option
    // Yes, "combobox" is the right ARIA role for <select>s
    userEvent.selectOptions(screen.getByRole("combobox"), "banana");

    // Asserts that the spy was called with the selected option
    expect(onChange).toHaveBeenCalledWith("banana");
  });
});
