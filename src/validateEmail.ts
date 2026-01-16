export class ValidateEmail {
    isValid(email: string): boolean {
        if(email.includes("@")) return true;
        return false;
    }
}