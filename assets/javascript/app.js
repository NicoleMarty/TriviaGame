$("#start").on("click", function() {
    $("#start").remove(); // remove start button
    game.renderQuestion(); // render question
})

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
})

// VARIABLES
// define object array for each question (var questions)
var questions = [{
    question: "What is Wayne's best friend's last name?",
    choices: ["Campbell", "Smith", "Algar", "McKeeta"],
    answer: "Algar",
    image: "https://media.giphy.com/media/ibMWGBvyIPxug/giphy.gif"
}, {
    question: "What does Wayne spend his tv show cash on?",
    choices: ["Mustang", "concert tickets", "all the pizza", "Fender Stratacaster"],
    answer: "Fender Stratacaster",
    image: ""
}, {
    question: "What rockstar do Wayne and Garth deem themselves to be unworthy of?",
    choices: ["Alice Cooper", "Jim Morrison", "Freddie Mercury", "Robert Plant"],
    answer: "Alice Cooper",
    image: ""
}, {
    question: "What gift does Wayne's psychotic ex-girlfriend give to him?",
    choices: ["a guitar", "a gun rack", "a Ford Pinto", "new kicks"],
    answer: "a gun rack",
    image: ""
}, {
    question: "What song does Wayne always hear in his head when he sees Cassandra?",
    choices: ["Foxy", "Dreamweaver", "Feed My Frankenstein", "Bohemian Rhapsody"],
    answer: "Dreamweaver",
    image: ""
}];

// define objects of game components (var game)
var game = {
    question: questions,
    currentQuestion: 0, //index number for what question is displaying currently
    counter: 30,
    correctAnswer: 0,
    incorrectAnswer: 0,

    // what functions of objects (methods) needed to get game to work?
    // setting countdown function
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("times up!");
            game.timesup();
        }
    },
    renderQuestion: function() {
        timer = setInterval(game.countdown, 1000); //sets timer when renderQuestion runs
        $("#subwrapper").html('<h2>' + questions[game.currentQuestion].question + '<h2>');
        for (var i = 0; i < questions[game.currentQuestion].choices.length; i++) {
            // adding buttons for choices
            $("#subwrapper").append('<button class="answer-button" id="button-' + i + '" data-answer=" ' +
                questions[game.currentQuestion].choices[i] + ' "> ' + questions[game.currentQuestion]
                .choices[i] + '</button>');
        }
    },
    // e short for event to pass through what is clicked
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data("answer").trim() === questions[game.currentQuestion].answer) { //target is what clicked
            game.congratulations();
        } else {
            game.bummer();
        };
    },
    congratulations: function() {
        console.log("PARTY ON!");
        clearInterval(timer);
        game.correctAnswer++;
        $("#subwrapper").html("<h2>PARTY ON!</h2>");
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextquestion, 3 * 1000);
        }
    },
    bummer: function() {
        console.log("BUMMER");
        clearInterval(timer);
        game.incorrectAnswer++;
        $("#subwrapper").html("<h2>BUMMER</h2>");
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextquestion, 3 * 1000);
        }
    },
    timesup: function() {


    },
    nextquestion: function() {
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.renderQuestion();
    },
    results: function() {
        console.log("results!");
        $("#correct").html("PARTY ON: " + game.correctAnswer);
        $("#incorrect").html("BUMMER: " + game.incorrectAnswer);
        if (game.correctAnswer > game.incorrectAnswer) {
            $("#result").html("SCHWINNGGG! YOU'RE A WINNER!");
        } else {
            $("#result").html("BUMMER! You're partied out!");
        }
    },
    reset: function() {

    },



};

// FUNCTION TO START GAME
function startGame() {};