

import { z } from "zod";


export const newsletterSchema = z.object({
  email: z.string().email("Valid email required"),
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;


export const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  org: z.string().optional().or(z.literal("")),
  email: z.string().email("Valid email required"),
  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^[\d\-+() ]{7,20}$/.test(v), "Invalid phone"),
  type: z.enum(["General", "Sponsorship", "Media", "Hackathon", "Speaking Opportunity", "Other"]).default("General"),
  heard: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Please include a brief message (10+ chars)"),
});
export type ContactInput = z.infer<typeof contactSchema>;


export const sponsorInquirySchema = z.object({
  org: z.string().min(2, "Organization required"),
  contact: z.string().min(2, "Primary contact required"),
  email: z.string().email("Valid email required"),
  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || /^[\d\-+() ]{7,20}$/.test(v), "Invalid phone"),
  tier: z.enum([
    "Platinum — The Architects",
    "Gold — The Innovators",
    "Silver — The Partners",
    "Custom Package",
  ]),
  notes: z.string().optional().or(z.literal("")),
  intent: z.string().optional(), 
});
export type SponsorInquiryInput = z.infer<typeof sponsorInquirySchema>;


export async function parseRequestBody<T>(
  req: Request,
  schema: z.ZodSchema<T>
): Promise<{ ok: true; data: T } | { ok: false; error: string; status?: number }> {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      const msg = parsed.error.errors.map((e) => e.message).join("; ");
      return { ok: false, error: msg, status: 400 };
    }
    return { ok: true, data: parsed.data };
  } catch {
    return { ok: false, error: "Invalid JSON payload", status: 400 };
  }
}
