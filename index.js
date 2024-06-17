//Part 1
class Adventurer {
    constructor(name, health, inventory, companion) {
        this.name = name
        this.health = health
        this.inventory = inventory
        this.companion = companion
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// Create an adventurer instance
const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], {
    name: "Leo",
    type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
    }
})

// Loop to log each item in Robin's inventory
for (let i = 0; i < robin.inventory.length; i++) {
    console.log(robin.inventory[i])
}

// Loop  to nested companion's belongings
for (let i = 0 ;i < robin.companion.companion.belongings.length; i++) {
    console.log(robin.companion.companion.belongings[i])
}

// Testing the roll 
robin.roll()
robin.roll(2)
