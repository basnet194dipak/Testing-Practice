import { caesarCipher } from "./caesarCipher";

test("HeLLo to be KhOOr", ()=>{
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr")
})

test("xyz should be abc",()=>{
    expect(caesarCipher('xyz', 3)).toBe("abc")
})

test("Hello, World!, 3 should be  Khoor, Zruog!",()=>{
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!")
})

 