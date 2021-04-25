
const Manager = require("../lib/Manager");


test("can set office number from constructor arguments", () => {
    const testValue = 100;
    const e = new Manager("foo", 1, "anyone@email.com", testValue);
    expect(e.officeNumber).toBe(testValue)
})
test("getRole function  should return manager", () => {
    const testValue = "Manager";
    const e = new Manager("foo", 1, "anyone@email.com", testValue);
    expect(e.getRole()).toBe(testValue);
})
test("can get office number from getOfficeNumber function", () => {
    const testValue = 500;
    const e = new Manager("foo", 1, "anyone@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})
