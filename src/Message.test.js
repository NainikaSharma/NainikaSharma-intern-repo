import { render, screen, fireEvent } from "@testing-library/react";
import Message from "./Message";

test("renders default message", () => {
  render(<Message />);
  const message = screen.getByText(/hello, focus bear/i);
  expect(message).toBeInTheDocument();
});

test("updates message when button is clicked", () => {
  render(<Message />);
  const button = screen.getByRole("button", { name: /change message/i });

  fireEvent.click(button);

  const updated = screen.getByText(/button clicked/i);
  expect(updated).toBeInTheDocument();
});
