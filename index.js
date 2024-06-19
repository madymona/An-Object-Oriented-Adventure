// Part 1: 

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ['small hat', 'sunglasses']
//         }
//     },

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//     }

// // a loop that logs each item in Robin’s inventory

// function logInventory(inventoryArr) {
//     for (let i in inventoryArr) {
//         console.log(inventoryArr[i])
//     }
//     return true
// }

// logInventory(adventurer.inventory)
// adventurer.roll(0)
// adventurer.roll(10)
// adventurer.roll(100)

// Part 2
class Character {
    constructor (name) {
        this.name = name
        this.health = 100
        this.inventory = []
    }

    static MAX_HEALTH = 100
    static ROLES = ['Fighter', 'Healer', 'Wizard']

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}.`)
        return result
        }
}

// const robin = new Character("Robin")
// robin.inventory = ["sword", "potion", "artifact"]
// robin.companion = new Character("Leo")
// robin.companion.type = "Cat"
// robin.companion.companion = new Character("Frank")
// robin.companion.companion.type = "Flea"
// robin.companion.companion.inventory = ["small hat", "sunglasses"]

// robin.roll()
// robin.roll(10)
// robin.roll(100)

// robin.companion.roll()
// robin.companion.companion.roll()

// Part 3
class Adventurer extends Character {
    constructor(name, role) {
        super(name)
        if (Character.ROLES.includes(role)){
            this.role = role
        }
        else {
            throw new Error('This character role is not valid.')
        }
        this.inventory.push('bedroll', '50 gold coins')
        this.MAX_HEALTH = this.constructor.MAX_HEALTH
    }
    scout() {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }

    duel(opponent) {
        console.log('Duel starts.')
        console.log(this.MAX_HEALTH)
        console.log(opponent.MAX_HEALTH)

        while (this.MAX_HEALTH > 50 && opponent.MAX_HEALTH > 50) {
            let charRoll = super.roll()
            let opRoll = opponent.roll()

            if (charRoll < opRoll) {
                this.MAX_HEALTH--
                console.log(`${this.name} lost to ${opponent.name}. ${this.name} has ${this.MAX_HEALTH} left. ${opponent.name} has ${opponent.MAX_HEALTH} left.`)
            }
            else if (charRoll > opRoll) {
                opponent.MAX_HEALTH--
                console.log(`${this.name} won against ${opponent.name}. ${this.name} has ${this.MAX_HEALTH} left. ${opponent.name} has ${opponent.MAX_HEALTH} left.`)
            }
            else {
                console.log(`${this.name} tied to ${opponent.name}. ${this.name} has ${this.MAX_HEALTH} left. ${opponent.name} has ${opponent.MAX_HEALTH} left.`)
                this.MAX_HEALTH--
                opponent.MAX_HEALTH--
            }
        }

        if (this.MAX_HEALTH === opponent.MAX_HEALTH) {
            console.log('It was a tie.')
        }
        else {
            console.log(`The winner of this duel is ${this.MAX_HEALTH > opponent.MAX_HEALTH? this.name : opponent.name}`)
        }
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name)
        this.type = type
        this.inventory.push("small hat", "sunglasses")
    }
    scout() {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }
}

const robin = new Adventurer('Robin','Fighter')
robin.inventory.push("sword", "potion", "artifact")

const leo = new Companion('Leo', 'Cat')
robin.companion = leo

const frank = new Companion('Frank', 'Flea')
leo.companion = frank

console.log(robin)
console.log(robin.companion)



// Part 4
const hood = new Adventurer('Hood', 'Healer')
console.log(hood)

// Part 5

class AdventurerFactory {  
    constructor (role) {
        this.role = role
        this.adventurers = []
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role)
        this.adventurers.push(newAdventurer)
    }
    findByIndex (index) {
        return this.adventurers[index]
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name)
    }
}

const healers = new AdventurerFactory("Healer")
const robinHealer = healers.generate("Robin")
const hoodHealer = healers.generate('Hood')
const johnHealer = healers.generate('John')

console.log(healers)
// Part 6

const mady = new Adventurer('Mady', 'Fighter')
const betty = new Adventurer('Betty', 'Wizard')

console.log(mady)
console.log(betty)

mady.duel(betty)