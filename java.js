function hideClearScores() {
    document.getElementById("clear-scores").style.display = "none";
    document.getElementById("start-again").style.display = "none";

}
hideClearScores();

//Questions:
var questions = [
    {
        "question": "Three foundational languages of web development are:",
        "choices": ["HTML, CSS, Python", "HTML, JavaScript, jQuery", "HTML, CSS, JavaScript"],
        "answer": "HTML, CSS, JavaScript"
    },

    {
        "question": "In Java, DOM stands for:",
        "choices": ["Domination", "Document Origin Margin", "Document Object Model"],
        "answer": "Document Object Model"
    },

    {
        "question": "Javascript files are saved as:",
        "choices": [".js", ".java", ".css"],
        "answer": ".js"

    },

    {
        "question": "A CDN stands for:",
        "choices": ["Character Domain Name", "Cartoon Delivery Network", "Content Delivery Network"],
        "answer": "Content Delivery Network"
    },

    {
        "question": "=== evaluates:",
        "choices": ["Value", "Value and Type", "Value, Type and Character "],
        "answer": "Value and Type"
    },
    {
        "question": "What is a boolean?:",
        "choices": ["A logical True / False value.", "Another term for an array.", "An explicitly set a variable with no value."],
        "answer": "A logical True / False value."
    },
    {
        "question": "Which is most accurate: jQuery is to Javascript as,",
        "choices": ["CSS is to HTML", "Apples are to oranges", "SQL is to Python"],
        "answer": "CSS is to HTML"
    },
    {
        "question": "Is jQuery a programming lanuges?",
        "choices": ["Yes", "No", "Neither"],
        "answer": "No"
    },
    {
        "question": "What is Java's order or operations?",
        "choices": ["PEMDAS", "MENSAS", "BIDMAS"],
        "answer": "BIDMAS"
    },
    {
        "question": "How are variables written, sylistically, in Java",
        "choices": ["With underscores", "Camel case", "Like normal"],
        "answer": ".appendChild"
    },
    {
        "question": "All done!",
        "choices": ["Thanks", "for", "playing!"],
        "answer": "'$('#idname').on('click', function)'"
    },
];

// Variables:
var currentQuestion = 0;
var choiceNumber = 0; 
var userScore = 0;
var userInitials;
var newHighScore;

// Functions :
function checkAnswer(choiceNumber) {
    if (questions[currentQuestion].choices[choiceNumber] == questions[currentQuestion].answer) {
        document.getElementById("correct-or-not").textContent = "correct!";
        userScore++;
        updateScore(userScore);
        console.log("question number: " + currentQuestion)
        choiceNumber = 0;
        checkIfEnd();

    }
    else if (questions[currentQuestion].choices[choiceNumber] != questions[currentQuestion].answer) {
        document.getElementById("correct-or-not").textContent = "incorrect!";
        userScore--;
        updateScore(userScore);
        console.log("question number: " + currentQuestion)
        choiceNumber = 0; 
        secondsLeft -= 5;
        checkIfEnd();
    }

}

function checkIfEnd() {
    if (questions[currentQuestion].answer == ".appendChild") { 
        userInitials = prompt("Please type your initials");
        var uIArray = [];
        uIArray.push(userInitials);
        var objHighScore = {
            username: uIArray,
            score: userScore
        }
        objHighScore_serialized = JSON.stringify(objHighScore);

        localStorage.setItem("highscores", objHighScore_serialized);

        document.getElementById("user-initials").innerHTML = userInitials + " " + userScore;


// When timer ends:
        document.getElementById("btn0").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("begin-quiz").style.display = "none";
        document.getElementById("user-score").style.display = "none";
        document.getElementById("correct-or-not").style.display = "none";

        var localScore = localStorage.getItem(userScore);
        document.getElementById("userHigh").textContent = localScore;
        document.getElementById("userHigh").style.backgroundColor = "purple";
        document.getElementById("userHigh").style.color = "white";
        document.getElementById("clear-scores").style.display = "block"; 
        document.getElementById("start-again").style.display = "block"; 
    }
}

// Logic Items:
document.getElementById("clear-scores").addEventListener("click", clearTheScores);
document.getElementById("start-again").addEventListener("click", kickOff);

function clearTheScores() {
    document.getElementById("user-initials").style.display = "none";
    localStorage.clear();


}
function updateScore(userScore, currentQuestion) {
    document.getElementById("user-score").textContent = userScore;
}

document.getElementById("btn0").addEventListener("click", () => {
    choiceNumber = 0;
    checkAnswer(choiceNumber);

    currentQuestion++;
    QandA(currentQuestion);
});

document.getElementById("btn1").addEventListener("click", () => {
    choiceNumber = 1;
    checkAnswer(choiceNumber);

    currentQuestion++;
    QandA(currentQuestion);
});

document.getElementById("btn2").addEventListener("click", () => {
    choiceNumber = 2;
    checkAnswer(choiceNumber);

    currentQuestion++;
    QandA(currentQuestion);
});

function QandA() {

    document.getElementById("main").textContent = (questions[currentQuestion].question);


    document.getElementById("btn0").innerText = (questions[currentQuestion].choices[0]);
    document.getElementById("btn1").innerText = (questions[currentQuestion].choices[1]);
    document.getElementById("btn2").innerText = (questions[currentQuestion].choices[2]);
}

document.getElementById("begin-quiz").addEventListener("click", kickOff);



function kickOff() {
    QandA();
    setTime();
    document.getElementById("begin-quiz").style.display = "none";
    document.getElementById("userHigh").style.display = "block";
    document.getElementById("btn0").style.display = "block";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "block";


}

// Timer:
var timerEl = document.getElementById("timer");

var secondsLeft = 120;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000); 
}