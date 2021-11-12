const { Animal } = require("./classes");
const { initQs } = require("./initQs");
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');



let pet

inquirer
    .prompt(initQs)
    .then((answers) => {
        pet = new Animal(answers.typeOfPet, answers.petName)
        return pet
    })
    .then(() => gameLoop())

const gameLoop = () => {
    if (pet.typeOfPet === "Cat") {
        figlet(`CAT!!`, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });
    } else if (pet.typeOfPet === "Dog") {
        figlet('DOG!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });
    } else if (pet.typeOfPet === "Snake") {
        figlet('SNAKE!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });
    } else if (pet.typeOfPet === "Rabbit") {
        figlet('RABBIT!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });
    } 
    console.log(chalk.green.bold(`Stats for your ${pet.typeOfPet}, ${pet.petName}:`))
    console.table(pet)
    if (pet.hunger <= 0) {
        console.log(chalk.red.bold(`${pet.petName} has died of hunger`))
        return
    } else if (pet
        .thirst <= 0) {
        console.log(chalk.red.bold(`${pet.petName} has died of thirst`))
        return
    } else if (pet.happiness <= 0) {
        console.log(chalk.red.bold(`${pet.petName} has died of sadness`))
        return
    } else if (pet.cleanliness <= 0) {
        console.log(chalk.red.bold(`${pet.petName} has died because they were soooo dirty!`))
        return
    }
    inquirer
            .prompt([
                {
                    type: "list",
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
