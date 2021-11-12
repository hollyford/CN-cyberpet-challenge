const initQs = [
    {
        type: "list",
        name: "type",
        message: "What type of Pet would you like to choose?",
        choices: [
            "Dog",
            "Cat",
            "Snake",
            "Rabbit"
        ]
    },
    {
        type: "input",
        name: "name",
        message: "What is your pet's name?"
    }
]



module.exports = {
    initQs
}