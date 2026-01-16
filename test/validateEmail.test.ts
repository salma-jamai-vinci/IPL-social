import { ValidateEmail } from "../src/validateEmail";

describe("ValidateEmail", () => {
    describe("Checks that email is valid", () => {

        it("should return false when given an empty email", () => {
            let validateEmail = new ValidateEmail();
            let actual = validateEmail.isValid("");
            expect(actual).toBe(false);
        })

        it("should return true when given an email with @", () => {
            let validateEmail = new ValidateEmail();
            let actual = validateEmail.isValid("@");
            expect(actual).toBe(true);
        })

    })
})