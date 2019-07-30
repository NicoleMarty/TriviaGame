// VARIABLES
console.log("page loaded");
// define object array for each question (var questions)
var questions = [{
    question: "What is Wayne's best friend's last name?",
    choices: ["Campbell, Smith, Algar, McKeeta"],
    answer: "Algar",
    image: ""
}, {
    question: "What does Wayne spend his tv show cash on?",
    choices: ["Mustang, concert tickets, all the pizza, Fender Stratacaster"],
    answer: "Fender Stratacaster",
    image: ""
}, {
    question: "What rockstar do Wayne and Garth deem themselves to be unworthy of?",
    choices: ["Alice Cooper, Jim Morrison, Freddie Mercury, Robert Plant"],
    answer: "Alice Cooper",
    image: ""
}, {
    question: "What gift does Wayne's psychotic ex-girlfriend give to him?",
    choices: "a guitar, a gun rack, a Ford Pinto, new kicks",
    answer: "a gun rack",
    image: ""
}, {
    question: "What song does Wayne always hear in his head when he sees Cassandra?",
    choices: "Foxy, Dreamweaver, Feed My Frankenstein, Bohemian Rhapsody",
    answer: "Dreamweaver",
    image: ""
}];

// define objects of game components (var game)
var game = {
    questionsProperty: questions,
    currentQuestion: 0, //what question on
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
    renderquestion: function() {

    },
    nextquestion: function() {

    },
    congratulations: function() {

    },
    bummer: function() {

    },
    timesup: function() {

    },
    reset: function() {

    },
    results: function() {

    },
    clicked: function() {

    }

};

// FUNCTIONS
function startGame() {

    // MAIN GAME INITIATION
    startGame();
    $("#start").on("click", function(event) {
        $("#start").hide(); // remove start button

    });