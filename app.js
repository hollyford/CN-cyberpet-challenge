const { Animal } = require("./classes");
const { initQs } = require("./initQs");
const inquirer = require('inquirer');

let pet

inquirer
    .prompt(initQs)
    .then((answers) => {
        pet = new Animal(answers.typeOfPet, answers.petName)
        return pet
    })
    .then(() => gameLoop())

const gameLoop = () => {
    console.log(`You have chosen a ${pet.typeOfPet} and called them ${pet.petName}`)
    console.table(pet)
    if (pet.hunger <= 0) {
        console.log(`${pet.petName} has died of hunger`)
        return
    } else if (pet
        .thirst <= 0) {
        console.log(`${pet.petName} has died of thirst`)
        return
    } else if (pet.happiness <= 0) {
        console.log(`${pet.petName} has died of sadness`)
        return
    } else if (pet.clean <= 0) {
        console.log(`${pet.petName} has died because they were soooo dirty!`)
        return
    }
    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "action",
                message: "What would you like to do?",
                choices: ["Feed", "Water", "Play", "Wash"],
            },
        ])
        .then((answers) => {
            if (answers.action === "Feed") {
                pet.feed()
            } else if (answers.action === "Water") {
                pet.water()
            } else if (answers.action === "Play") {
                pet.play()
            } else if (answers.action === "Wash") {
                pet.wash()
            } 
            
            console.table(pet)
        })
        .then(() => gameLoop())
}
