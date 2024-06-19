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


//Part_2 
class Character {
  constructor(name) {
    this.name = name
    this.health = 100
    this.inventory = []
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod
    console.log(`${this.name} rolled a ${result}.`)
  }
}

// Re-creating Robin using the Character class
const robin = new Character("Robin")
robin.inventory = ["sword", "potion", "artifact"]
robin.companion = new Character("Leo")
robin.companion.type = "Cat"
robin.companion.companion = new Character("Frank")
robin.companion.companion.type = "Flea"
robin.companion.companion.inventory = ["small hat", "sunglasses"]

// Testing the roll method for Robin and his companions
robin.roll()
robin.companion.roll()
robin.companion.companion.roll()


class Companion extends Character {
  constructor(name, type) {
    super(name)
    this.type = type
  }
}

// Re-creating Robin and his companions using the extended class
const robin = new Character("Robin")
robin.inventory = ["sword", "potion", "artifact"]
robin.companion = new Companion("Leo", "Cat")
robin.companion.companion = new Companion("Frank", "Flea")
robin.companion.companion.inventory = ["small hat", "sunglasses"]

// Testing the roll method for Robin and his companions
robin.roll()
robin.companion.roll()
robin.companion.companion.roll()
