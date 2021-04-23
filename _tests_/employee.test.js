const Employee = require("../lib/Employee");

// test("can instantiate employee instance", () => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object")
// })
test("can set name from constructor arguments", () => {
    const name = "Rebecca";
    const e = new Employee(name);
    expect(e.name).toBe(name)
})
test("can set id from constructor argument", () => {
    const testValue = 100;
    const e = new Employee("foo", testValue);
    expect(e.id).toBe(testValue);
})
test("can set email from  constructor argument", () => {
    const testValue = "someone@somewhere.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
})
test("can get name  from  getName function", () => {
    const testValue = "Rebecca";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
})
