var app = require('./app')

test("Simple test", () => {
    let arr = [1,2,3,4,5,6,7,8,9]
    expect(app.sumTwoMinElem(arr)).toBe(3);
})

test("Test 1: Check execution when all elements are string", () => {
    let arr = ['3','4','6','7','8','9']
    expect(app.sumTwoMinElem(arr)).toBe(7);
})

test("Test 2: Check execution when some elements are string", () => {
    let arr = [12, '1', '-10', 0, 6, 1, '5']
    expect(app.sumTwoMinElem(arr)).toBe(-10);
})

test("Test 3: Check execution when empty array", () => {
    let arr = []
    expect(app.sumTwoMinElem(arr)).toBe('Array is empty');
})

test("Test 4: Check execution when type isn't an array", () => {
    expect(app.sumTwoMinElem(7)).toBe(7);
    expect(app.sumTwoMinElem('arr')).toBe('arr');
})

test("Test 5: Check execution when an array with one element", () => {
    expect(app.sumTwoMinElem([1])).toBe(1);
})