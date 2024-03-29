process.env.NODE_ENV = "test"
const request = require("supertest")
const app = require("../app")
let items = require("../fakeDb")

let item = { name: "Apple", price:5.99 }

beforeEach(async ()=>items.push(item))
afterEach( async ()=>items = [])
describe("",()=>{
    test("", async ()=>{//or it()
        const response = await request(app).get(`/items`)
        const { items } = response.body
        expect(response.statusCode).toBe(200)
        expect(items).toHaveLength(1)
    })  
    test("", async ()=>{
        const response = await request(app).get(`/items/${item.name}`)
        expect(response.statusCode).toBe(200)
        expect(response.body.item).toEqual(item)
    })
    test("", async ()=>{
        const response = await request(app).get(`/items/Apple`)
        expect(response.statusCode).toBe(200)
    })  
    test("", async ()=>{
        const response = await request(app).get(`/items/Banana`)
        expect(response.statusCode).toBe(404)
    })  
    test("", async ()=>{
        const response = await request(app).post(`/items`).send({name: "Taco",price:1.99})
        expect(response.statusCode).toBe(200)
        expect(response.body.item).toHaveProperty("name")
        expect(response.body.item).toHaveProperty("price")
        expect(response.body.item.name).toEqual("Taco")
        expect(response.body.item.price).toEqual(1.99)
    })  
    test("", async ()=>{
        const response = await request(app).patch(`/items/${item.name}`).send({name: "Troll"})
        expect(response.statusCode).toBe(200)
        expect(response.body.item).toEqual({name: "Troll"})
    })
    test("", async ()=>{
        const response = await request(app).patch(`/items/Orange`)
        expect(response.statusCode).toBe(404)
    })  
    test("", async ()=>{
        const response = await request(app).delete(`/items/${item.name}`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ message: "Deleted" })
    })
})
