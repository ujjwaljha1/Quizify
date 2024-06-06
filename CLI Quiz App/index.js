let readline = require("readline-sync");
let kuler = require("kuler");

let userName = readline.question("What is your name: ");
console.log(kuler(`Hello, ${userName} welcome to Quizify`, "#ca8a04"));
let score = 0;

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
        },
        {
            question: "Who was the first President of India?",
            options: {
                a: "Dr. Rajendra Prasad",
                b: "Dr. S. Radhakrishnan",
                c: "Zakir Husain",
                d: "V. V. Giri"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the capital of Arunachal Pradesh?",
            options: {
                a: "Itanagar",
                b: "Dispur",
                c: "Imphal",
                d: "Shillong"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is known as the 'Father of the Indian Constitution'?",
            options: {
                a: "Mahatma Gandhi",
                b: "Jawaharlal Nehru",
                c: "B. R. Ambedkar",
                d: "Sardar Patel"
            },
            correctAnswer: "c"
        },
        {
            question: "Which Article of the Indian Constitution deals with the Fundamental Rights?",
            options: {
                a: "Article 12 to 35",
                b: "Article 36 to 51",
                c: "Article 52 to 78",
                d: "Article 79 to 123"
            },
            correctAnswer: "a"
        },
        {
            question: "Who was the first Indian to win a Nobel Prize?",
            options: {
                a: "Rabindranath Tagore",
                b: "C. V. Raman",
                c: "Mother Teresa",
                d: "Hargobind Khorana"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following is the longest river in India?",
            options: {
                a: "Ganga",
                b: "Yamuna",
                c: "Godavari",
                d: "Brahmaputra"
            },
            correctAnswer: "a"
        },
        {
            question: "In which year did India gain independence?",
            options: {
                a: "1945",
                b: "1947",
                c: "1950",
                d: "1952"
            },
            correctAnswer: "b"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: {
                a: "Earth",
                b: "Mars",
                c: "Jupiter",
                d: "Saturn"
            },
            correctAnswer: "b"
        },
        {
            question: "Who wrote the national anthem of India?",
            options: {
                a: "Rabindranath Tagore",
                b: "Bankim Chandra Chatterjee",
                c: "Sarojini Naidu",
                d: "Lata Mangeshkar"
            },
            correctAnswer: "a"
        },
        {
            question: "Which gas is most abundant in the earth's atmosphere?",
            options: {
                a: "Oxygen",
                b: "Carbon Dioxide",
                c: "Nitrogen",
                d: "Hydrogen"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the capital city of Canada?",
            options: {
                a: "Toronto",
                b: "Ottawa",
                c: "Vancouver",
                d: "Montreal"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the author of 'Wings of Fire'?",
            options: {
                a: "A. P. J. Abdul Kalam",
                b: "Mahatma Gandhi",
                c: "Jawaharlal Nehru",
                d: "Indira Gandhi"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the square root of 64?",
            options: {
                a: "6",
                b: "7",
                c: "8",
                d: "9"
            },
            correctAnswer: "c"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: {
                a: "Oxygen",
                b: "Gold",
                c: "Silver",
                d: "Iron"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the largest mammal in the world?",
            options: {
                a: "Elephant",
                b: "Blue Whale",
                c: "Great White Shark",
                d: "Giraffe"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the capital of Japan?",
            options: {
                a: "Kyoto",
                b: "Osaka",
                c: "Tokyo",
                d: "Hiroshima"
            },
            correctAnswer: "c"
        },
        {
            question: "Which planet is known as the Morning Star?",
            options: {
                a: "Mars",
                b: "Jupiter",
                c: "Venus",
                d: "Saturn"
            },
            correctAnswer: "c"
        },
        {
            question: "Which programming language is known as the backbone of web development?",
            options: {
                a: "Python",
                b: "JavaScript",
                c: "Java",
                d: "C++"
            },
            correctAnswer: "b"
        },
        {
            question: "Which company developed the Java programming language?",
            options: {
                a: "Microsoft",
                b: "Apple",
                c: "Sun Microsystems",
                d: "IBM"
            },
            correctAnswer: "c"
        },
        {
            question: "Which data structure uses FIFO (First In First Out) principle?",
            options: {
                a: "Stack",
                b: "Queue",
                c: "Linked List",
                d: "Binary Tree"
            },
            correctAnswer: "b"
        },
        {
            question: "What does HTML stand for?",
            options: {
                a: "Hyper Text Markup Language",
                b: "High Text Machine Language",
                c: "Hyper Tabular Markup Language",
                d: "None of these"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following is a NoSQL database?",
            options: {
                a: "MySQL",
                b: "PostgreSQL",
                c: "MongoDB",
                d: "Oracle"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the value of 'this' keyword in a regular function in JavaScript?",
            options: {
                a: "Global Object",
                b: "Current Object",
                c: "Window Object",
                d: "None of the above"
            },
            correctAnswer: "a"
        },
        {
            question: "Which protocol is used to send emails?",
            options: {
                a: "FTP",
                b: "HTTP",
                c: "SMTP",
                d: "POP3"
            },
            correctAnswer: "c"
        },
        {
            question: "Which year was the first version of JavaScript released?",
            options: {
                a: "1993",
                b: "1995",
                c: "1997",
                d: "1999"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the default port for HTTP?",
            options: {
                a: "21",
                b: "80",
                c: "443",
                d: "25"
            },
            correctAnswer: "b"
        },
        {
            question: "Which company developed the Python programming language?",
            options: {
                a: "Microsoft",
                b: "Google",
                c: "CWI",
                d: "IBM"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the output of 'typeof NaN' in JavaScript?",
            options: {
                a: "number",
                b: "object",
                c: "NaN",
                d: "undefined"
            },
            correctAnswer: "a"
        }
    ]
};

const leaderBoard = {
    data: [
        {
            name: "Ashish",
            score: 1
        },
        {
            name: "Riya",
            score: 3,
        },
        {
            name: "Jay",
            score: 2,
        }
    ]
};

function playGame(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log(kuler("Correct Answer", "#22c55e"));
        score++;
    } else {
        console.log(kuler("Incorrect Answer", "#b91c1c"));
        console.log(kuler(`Correct answer is: ${correctAnswer}`, "#0d9488"));
    }
}

function showQuestionAndOptions() {
    // Shuffling the questions to pick random ones
    let questions = database.data.sort(() => 0.5 - Math.random()).slice(0, 5); // Pick any 5 random questions
    for (let i = 0; i < questions.length; i++) {
        console.log(`\nQ${i + 1} - ${questions[i].question}\n`);
        for (let key in questions[i].options) {
            console.log(`${key} - ${questions[i].options[key]}`);
        }
        let userAnswer = readline.question("Enter your answer: ").toLowerCase();
        playGame(userAnswer, questions[i].correctAnswer);
    }
}

function highScore(leaderBoard) {
    leaderBoard.data.push({ name: userName, score: score });
    let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
    console.log("\nCheck your position on leaderboard!! 😎😎");
    for (let leader of sortedScoreList) {
        console.log(`${leader.name} - Score: ${leader.score}`);
    }
}

showQuestionAndOptions();
console.log(`\nYour score is: ${score}`);
highScore(leaderBoard);
