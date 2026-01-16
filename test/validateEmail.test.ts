import { ValidateEmail } from "../src/validateEmail";

describe("ValidateEmail", () => {
    let validateEmail = new ValidateEmail();

    describe("Checks that email is valid", () => {
        it("should return false when given an empty email", () => {
            let actual = validateEmail.isValid("");
            expect(actual).toBe(false);
        })

        it("should return true when given an email with @", () => {
            let actual = validateEmail.isValid("@");
            expect(actual).toBe(true);
        })

    })
})