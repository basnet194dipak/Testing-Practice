import { Calculator } from "./calculate";

let first = new Calculator(4,5)

test("adds 4 + 5 to be 9", ()=>{
    expect(first.add()).toBe(9)
})

test("subtract 4 - 5 to be -1", ()=>{
    expect(first.subtract()).toBe(-1)
})

test("divide 4/5 to be 0.8", ()=>{
    expect(first.divide()).toBe(0.8)
})

test("multiply 4*5 to be 20", ()=>{
    expect(first.multiply()).toBe(20)
})