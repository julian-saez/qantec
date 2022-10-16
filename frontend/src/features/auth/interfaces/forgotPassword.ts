export interface ForgotPasswordPayload
{
    email: string;
}

export interface ChangeForgotPasswordPayload
{
    confirmationToken: string;
    password: string;
    passwordConfirmation: string;
}
