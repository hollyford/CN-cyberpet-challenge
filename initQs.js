const initQs = [
    {
        type: "list",
        name: "typeOfPet",
        message: "What type of pet would you like to choose?",
        choices: [
            "Dog",
            "Cat",
            "Snake",
            "Rabbit"
        ]
    },
    {
        type: "input",
        name: "petName",
        message: "What is your pet's name?"
    }
]



module.exports = {
    initQs
}