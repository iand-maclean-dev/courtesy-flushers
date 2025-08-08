import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/features/contact-form/model/validation";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Heading from "@/shared/ui/Heading";
import VisuallyHidden from "@/shared/ui/VisuallyHidden";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    // Replace with real API call if needed.
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{ maxWidth: 560 }}
    >
      <Heading as="h1" style={{ marginBottom: "var(--space-6)" }}>
        Contact us
      </Heading>

      <div style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="name">Name</label>
        <Input id="name" {...register("name")} invalid={!!errors.name} />
        {errors.name && <div role="alert">{errors.name.message}</div>}
      </div>

      <div style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          invalid={!!errors.email}
        />
        {errors.email && <div role="alert">{errors.email.message}</div>}
      </div>

      <div style={{ marginBottom: "var(--space-4)" }}>
        <label htmlFor="phone">Phone (optional)</label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          invalid={!!errors.phone}
        />
        {errors.phone && <div role="alert">{errors.phone.message}</div>}
      </div>

      <div style={{ marginBottom: "var(--space-6)" }}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          style={{
            width: "100%",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-3)",
          }}
        />
        {errors.message && <div role="alert">{errors.message.message}</div>}
      </div>

      <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? "Sending…" : isSubmitSuccessful ? "Sent ✔" : "Send"}
      </Button>
      <VisuallyHidden aria-live="polite">
        {isSubmitSuccessful ? "Your message has been sent" : ""}
      </VisuallyHidden>
    </form>
  );
}
