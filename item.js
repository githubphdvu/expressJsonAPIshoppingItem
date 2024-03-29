const items = require("./fakeDb")

class Item {//define item
    constructor(name, price) {
        this.name = name
        this.price = price    
        items.push(this)//keep track of all items
    }
    static findAll(){return items}
    static find(name) {//find item
        const foundItem = items.find(v => v.name === name)
        if(foundItem === undefined) throw { message: "Not Found", status: 404 }
        return foundItem
    }
    static update(name, data) {//update item
        let foundItem = Item.find(name)
        if (foundItem === undefined) throw {message: "Not Found", status: 404}
        foundItem.name = data.name
        foundItem.price = data.price

        return foundItem
    }
    static remove(name) {//remove item
        let foundIdx = items.findIndex(v => v.name === name)
        if (foundIdx === -1) throw {message: "Not Found", status: 404}
        items.splice(foundIdx, 1)
    }
}
module.exports = Item
