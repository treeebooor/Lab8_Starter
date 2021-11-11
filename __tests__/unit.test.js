// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('check phone number 1', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('check phone number 2', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});
test('check phone number 3', () => {
    expect(functions.isPhoneNumber("123-456-70")).toBe(false);
});
test('check phone number 4', () => {
    expect(functions.isPhoneNumber("1890")).toBe(false);
});




//isEmail
test('check email 1', () => {
    expect(functions.isEmail("abc@avcocadoes.com")).toBe(true);
});
test('check email 2', () => {
    expect(functions.isEmail("peanuts@pineapples.com")).toBe(true);
});
test('check email 3', () => {
    expect(functions.isEmail("abc@123.cm")).toBe(false);
});
test('check email 4', () => {
    expect(functions.isEmail("tomatoesandbeans")).toBe(false);
});




//isStrongPassword
test('check password 1', () =>{
    expect(functions.isStrongPassword("a123f")).toBe(true);
});
test('check password 2', () =>{
    expect(functions.isStrongPassword("huhwqkjhe12")).toBe(true);
});
test('check password 3', () =>{
    expect(functions.isStrongPassword("a")).toBe(false);
});
test('check password 4', () =>{
    expect(functions.isStrongPassword("9jwklwkejn#")).toBe(false);
});

//isDate
test('check isDate 1',() => {
    expect(functions.isDate("11/23/4433")).toBe(true);
});
test('check isDate 2',() => {
    expect(functions.isDate("02/43/9301")).toBe(true);
});
test('check isDate 3',() => {
    expect(functions.isDate("1123/24/1")).toBe(false);
});
test('check isDate 4',() => {
    expect(functions.isDate("11/23433")).toBe(false);
});

//isHexColor
test('check hex color 1', () =>{
    expect(functions.isHexColor("#0011ff")).toBe(true);
});
test('check hex color 2', () =>{
    expect(functions.isHexColor("#ffffff")).toBe(true);
});
test('check hex color 3', () =>{
    expect(functions.isHexColor("#123456672234")).toBe(false);
});
test('check hex color 4', () =>{
    expect(functions.isHexColor("011ff")).toBe(false);
});