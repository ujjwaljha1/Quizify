/** Creating data Set */
let readline = require("readline-sync");
let kuler=require("kuler")

let  userName=readline.question("What is your name: ")
console.log(kuler(`Hello, ${userName} welcome to Quizify`,"#ca8a04"))
let score=0;

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



const leaderBoard={
    data:[
        {
            name:"Ashish",
            score: 1
        },
        {
            name:"Riya",
            score: 3,
        },
        {
            name: "Jay",
            score: 2,
        }
    ]
}




function playGame(userAnswer,correctAnswer){
    if(userAnswer === correctAnswer ){
        console.log(kuler("Correct Answer","#22c55e"))
        score++
    }else{
        console.log(kuler("Incorrect Answer","#b91c1c"))
        console.log(kuler(`Correct answer is : ${correctAnswer}`,"#0d9488"))
    }
}


function showQuestionAndOptions() {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
        for (let key in database.data[i].options) {
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = readline.question("Enter your answer: ").toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer)
    }
}

function highScore(leaderBoard){
    leaderBoard.data.push({name: userName,score:score})
    let sortedScoreList=leaderBoard.data.sort((a,b) => b.score -a.score)
    console.log("\nCheck your position on leaderboard!! 😎😎")
    for(let leader of sortedScoreList){
        console.log(`${leader.name} - Score: ${leader.score}`)
    }
}



showQuestionAndOptions();
console.log(`\nYour score is : ${score}`)
highScore(leaderBoard);
