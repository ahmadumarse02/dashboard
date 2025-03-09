import z from "zod"

export const loginSchema = z.object({
    email:z.string().email("Invalid email"),
    password:z.string().min(6, "Password must be at least 8 characters.")
})

export type LoginSchema = z.infer<typeof loginSchema>;

export type FormError = Partial<Record<keyof LoginSchema, string[]>>;