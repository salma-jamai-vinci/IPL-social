export class ValidateEmail {
    isValid(email: string): boolean {
        if(email === "") return false;
        if(email.endsWith(".")) return false;
        if(email.includes("@")) return true;
        return false;
    }
}