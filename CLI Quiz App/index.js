/** Creating data Set */

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
        question: "Is mesthod chainging possible with forEach?",
        options: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: "b"
    }
    ]
};

console.log(database);
