export class ValidateEmail {
  isValid(email: string): boolean {
    if (!email.includes("@")) return false;

    const atIndex = email.indexOf("@");
    const domain = email.slice(atIndex + 1);
    if (!domain.includes(".")) return false;
    if (domain.endsWith(".")) return false;

    if (email.includes(" ")) return false;

    const check = email.slice(0, atIndex);
    if (check.length === 0) return false;
    if (domain.length === 0) return false;

    return true;
  }
}

