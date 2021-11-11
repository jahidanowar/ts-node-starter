import { object, string, TypeOf } from "zod";

export const UserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required",
        }),
        email: string({
            required_error: "Email is required",
        }).email("Please enter a valid email"),
        password: string({
            required_error: "Password is required",
        }).min(6, "Password must be at least 8 characters long"),
        passwordConfirmation: string({
            required_error: "Password confirmation is required",
        }),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});

export type UserSchema = Omit<
    TypeOf<typeof UserSchema>,
    "body.passwordConfirmation"
>;
