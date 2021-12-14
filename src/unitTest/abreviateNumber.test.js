const getAbrevNumber = require('../utilitary/AbreviationNumber');

test("return abrev number for 1450", () => {
    expect(getAbrevNumber(14)).toBe("14");
})