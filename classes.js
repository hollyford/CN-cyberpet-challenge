class Animal {
    constructor(type, name) {
        this.type = type,
        this.name = name,
        this.age = 0,
        this.hunger = 10,
        this.thirst = 10,
        this.happiness = 10,
        this.clean = 10
    }
    feed(){
        this.hunger += 5
        this.thirst -= 1
        this.happiness -= 1
        this.clean -= 1
    }
    water(){
        this.thirst += 5
        this.hunger -= 1
        this.happiness -= 1
        this.clean -= 1
        }
    play(){
        this.thirst -= 1
        this.hunger -= 1
        this.happiness += 5
        this.clean -= 1
    }
    wash(){
        this.clean += 5
        this.thirst -= 1
        this.happiness -= 1
        this.hunger -= 1
    }
}
