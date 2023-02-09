import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders", () => {
  // 1. Renders your component (here, App) onto a DOM tree
  render(<App />);

  // 2. Nice little utility: shows you the entire screen during the test
  // Tip: Put a breakpoint on the next line, then press F5 to launch the debugger 😉
  screen.debug();
});
