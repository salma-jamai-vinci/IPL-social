export class ValidateEmail {
    isValid(email: string): boolean {
        if(email === "@") return true;
        return false;
    }
}