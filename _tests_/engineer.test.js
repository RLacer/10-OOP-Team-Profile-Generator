
const Engineer = require("../lib/Engineer");


test("can set github user name from constructor arguments", () => {
    const testValue = "github";
    const e = new Engineer("foo", 1, "anyone@email.com", testValue);
    expect(e.github).toBe(testValue)
})
test("getRole function  should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("foo", 1, "anyone@email.com", "github");
    expect(e.getRole()).toBe(testValue);
})
test("can get github user name from getGithub function", () => {
    const testValue = 500;
    const e = new Engineer("foo", 1, "anyone@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})