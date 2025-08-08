import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .optional()
    .transform((v: string | undefined) => (v ?? "").trim())
    .refine(
      (v: string) => v === "" || /\+?[0-9\-()\s]{7,}$/.test(v),
      "Invalid phone"
    ),
  message: z.string().min(10, "Please provide a brief message"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
