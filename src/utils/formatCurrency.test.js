import { formatCurrency } from "./formatCurrency"

describe("test currency formatter", () => {
    test("format 5", () => {
        const res = formatCurrency(5)
        expect(res).toBe("5\u00A0kr")
    })

    test("format 5.89", () => {
        const res = formatCurrency(5.8899)
        expect(res).toBe("5,89\u00A0kr")
    })

    test("format 50.98", () => {
        const res = formatCurrency(50.9752)
        expect(res).toBe("50,98\u00A0kr")
    })

    test("format 34534", () => {
        const res = formatCurrency(34534)
        expect(res).toBe("34\u00A0534\u00A0kr")
    })

    test("format 355464534.6653", () => {
        const res = formatCurrency(355464534.6653)
        expect(res).toBe("355\u00A0464\u00A0534,67\u00A0kr")
    })
})