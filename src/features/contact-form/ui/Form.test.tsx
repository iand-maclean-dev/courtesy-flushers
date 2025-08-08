import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./Form";

describe("ContactForm", () => {
  it("submits valid data and resets", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there, I need a quote." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() =>
      expect(screen.getByRole("button", { name: /sent/i })).toBeInTheDocument()
    );
  });
});
