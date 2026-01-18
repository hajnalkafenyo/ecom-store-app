import { validateEmail, validateText } from "./validator";


describe("email", () => {
    test("valid email", () => {
        const res = validateEmail("HajZso41618@stud.noroff.no")
        expect(res).toBe(true)
    })

    test("noroff email", () => {
        const res = validateEmail("asdfasdf@stud.noroff.no")
        expect(res).toBe(true)
    })

    test("gmail email", () => {
        const res = validateEmail("123@gmail.no")
        expect(res).toBe(true)
    })

    test("citromail email", () => {
        const res = validateEmail("buuf@citromail.no")
        expect(res).toBe(true)
    })

    test("invalid email", () => {
        const res = validateEmail("asdfasdfstud.noroff.no")
        expect(res).toBe(false)
    })

    test("invalid-email", () => {
        const res = validateEmail("Asdfasdf@stud.no")
        expect(res).toBe(true)
    })

    test("false email", () => {
        const res = validateEmail("øæåèà@stud.noroff.no")
        expect(res).toBe(true)
    })

    test("stringmail", () => {
        const res = validateEmail("")
        expect(res).toBe(false)
    })

    test("undefined", () => {
        const res = validateEmail(undefined)
        expect(res).toBe(false)
    })

    test("number 5", () => {
        const res = validateEmail(5)
        expect(res).toBe(false)
    })

    test("infinity", () => {
        const res = validateEmail(Infinity)
        expect(res).toBe(false)
    })

    test("jsx tag", () => {
        const res = validateEmail(<p></p>)
        expect(res).toBe(false)
    })
});

describe("text", () => {
    test("name", () => {
        const res = validateText("John Doe")
        expect(res).toBe(true)
    })

    test("subject", () => {
        const res = validateText("question")
        expect(res).toBe(true)
    })

    test("text", () => {
        const res = validateText("I will write you")
        expect(res).toBe(true)
    })

    test("string", () => {
        const res = validateText("")
        expect(res).toBe(false)
    })

    test("undefined", () => {
        const res = validateText(undefined)
        expect(res).toBe(false)
    })

    test("number 5", () => {
        const res = validateText(5)
        expect(res).toBe(false)
    })

    test("infinity", () => {
        const res = validateText(Infinity)
        expect(res).toBe(false)
    })

    test("jsx tag", () => {
        const res = validateText(<p></p>)
        expect(res).toBe(false)
    })


})