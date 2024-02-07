const {triangle, circle, square}= require('./shapes.js')

describe ("triangles test", () => {
    it("can render a triangle", () =>{
        const shape = new triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    })
})

describe("squares test", () => {
    it("can render a square", () =>{
        const shape = new square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('rect x="80" y="20" rx="10" ry="10" width="60" height="60" fill="yellow" />');
    })
})

describe("circle test", () => {
    it("can render a circle ", () =>{
        const shape = new circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="100" cy="75" r="45" fill="red" />');
    })
})