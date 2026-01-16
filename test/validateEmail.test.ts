import { ValidateEmail } from "../src/validateEmail";

describe("ValidateEmail", () => {
  let validateEmail = new ValidateEmail();

  describe("Checks that email is valid", () => {
    it("should return false when given an empty email", () => {
      let actual = validateEmail.isValid("");
      expect(actual).toBe(false);
    });

    it("should return false when given an email whitout @", () => {
      let actual = validateEmail.isValid("abc");
      expect(actual).toBe(false);
    });

    it("should return false when given an email finishing with a dot", () => {
      let actual = validateEmail.isValid("abc@.");
      expect(actual).toBe(false);
    });

    it("should return false when given an email with @ but no domain dot", () => {
      let actual = validateEmail.isValid("a@b");
      expect(actual).toBe(false);
    });

    it("should return false when given an email with @ but a dot at the end", () => {
      let actual = validateEmail.isValid("a@b.");
      expect(actual).toBe(false);
    });

    it("should return true when given an email with @ and a dot in the email", () => {
      let actual = validateEmail.isValid("a@b.com");
      expect(actual).toBe(true);
    });

    it("should return false when given an email with an space", () => {
      let actual = validateEmail.isValid("a @b.com");
      expect(actual).toBe(false);
    });

    it("should return false when given an email with no text before the @", () => {
      let actual = validateEmail.isValid("@b.com");
      expect(actual).toBe(false);
    });
    
    it("should return false when given an email with no text after the @", () => {
      let actual = validateEmail.isValid("a@");
      expect(actual).toBe(false); 
    });

  });
});
