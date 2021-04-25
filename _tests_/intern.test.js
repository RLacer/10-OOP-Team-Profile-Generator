
const Intern = require("../lib/Intern");


test("can set their school name from constructor arguments", () => {
    const testValue = "school";
    const e = new Intern("foo", 1, "anyone@email.com", testValue);
    expect(e.school).toBe(testValue)
})
test("getRole function  should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("foo", 1, "anyone@email.com", "school");
    expect(e.getRole()).toBe(testValue);
})
test("can get their school name from getSchool function", () => {
    const testValue = "schoolName";
    const e = new Intern("foo", 1, "anyone@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})