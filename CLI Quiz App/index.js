/** Creating data Set */
let readline = require("readline-sync");
const database = {
    data: [
        {
            question: `Let a = {}, b = {}
            console.log(a == b)
            console.log(a === b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "Object.assign(target, source) creates which type of copy?",
            options: {
                a: "Shallow copy",
                b: "Deep copy",
                c: "Reference copy",
                d: "None of the above"
            },
            correctAnswer: "a"
        },
        {
            question: "Is method chaining possible with forEach?",
            options: {
                a: "Yes",
                b: "No",
            },
            correctAnswer: "b"
        }
    ]
};

//For Correct answer 

function showQuestionAndOptions() {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
        for (let key in database.data[i].options) {
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = readline.question("Enter your answer: ");
        
    }
}

showQuestionAndOptions();
