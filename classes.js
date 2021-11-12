class Animal {
    constructor(type, name) {
        this.typeOfPet = type,
        this.petName = name,
        this.hunger = 10,
        this.thirst = 10,
        this.happiness = 10,
        this.cleanliness = 10
    }
    feed(){
        this.hunger += 5
        this.thirst -= 1
        this.happiness -= 1
        this.cleanliness -= 1
    }
    water(){
        this.thirst += 5
        this.hunger -= 1
        this.happiness -= 1
        this.cleanliness -= 1
        }
    play(){
        this.thirst -= 1
        this.hunger -= 1
        this.happiness += 5
        this.cleanliness -= 1
    }
    wash(){
        this.cleanliness += 5
        this.thirst -= 1
        this.happiness -= 1
        this.hunger -= 1
    }
}

module.exports = {
    Animal
}