import z from "zod"

export const signUpSchema = z.object({
    username:z.string().min(1, "Name is required"),
    email:z.string().email("Invalid email"),
    password:z.string().min(6, "Password must be at least 8 characters.")
})

export type SignUpSchema = z.infer<typeof signUpSchema>;

export type FormError = Partial<Record<keyof SignUpSchema, string[]>>;