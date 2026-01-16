export class ValidateEmail {
  isValid(email: string): boolean {
    if (!email.includes("@")) return false;

    const atIndex = email.indexOf("@");
    const domain = email.slice(atIndex + 1);
    if (!domain.includes(".")) return false;
    if (domain.endsWith(".")) return false;

    return true;
  }
}

