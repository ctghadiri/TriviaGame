// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// -------------------------------------------

// start button to begin
// Timer starts
    // questions appear
    // Choices
// Answer question
    // Correct 
        // No alerts
        // Notify correct answer
        // wait time till next question
        // add to correct answer var
    // Incorrect
        // Notify wrong
        // Show correct answer
        // wait time
// No Answer 
    // wait time
    // Show correct answer
    // notify time's up
// quiz is done 
    // show results
        // score out of 10
        // stop timer
        // button to restart

// variables
    // correct
    // 
    // timer ---- code drills
    // 30 sec interval
    // clearing interval
    // set timeout
    
    
    
    
    // create array of objects
    // objects contain questions, 4 choices array, correct answer, image
    // set interval time 
var round = 0;
var correct = 0;
var incorrect = 0;
var timerRunning;
var board = $("#board");
var time = 20;
var intervalId;
var questions = [
    {
        question: " whats the capital of nevada?",
        choices: [1,2,3,4],
        Answer: "3",
        img: ""
        
    },
    {
        question: "Q2",
        choices: [1,2,3,4],
        Answer: "3",
        img: ""
    },
    {
        question: "Q3",
        choices: [1,2,3,4],
        Answer: "3",
        img: ""
    },
    {
        question: "Q4",
        choices: [1,2,3,4],
        Answer: "3",
        img: ""
    },
    {
        question: "Q5",
        choices: [1,2,3,4],
        Answer: "3",
        img: ""
    }
]


$(document).ready(function(){
    $("#start").on("click", playGame);
    board.on("click", "button", evaluateChoice)
    function playGame(){
        playRound()
    }
    function playRound(){
        clearBoard();
        displayQuestion(questions[round].question);
        displayChoices(questions[round].choices);
        time= 20;
        intervalId = setInterval(function(){
            if(time > 0){
            time--;
            $("#timer").text("You have " + time + " seconds left!")
            }
            else{
                clearBoard();
                displayCorrect();
                round++;
                incorrect++;
                setTimeout(playRound, 4000);
            }
        }, 1000)

        
    }
    function displayQuestion(question){
        var questionBox = $("<div>");
        var questionStem = $("<p>").text(question);
        questionBox.append(questionStem);
        board.append(questionBox);
    }
    
    function displayChoices(choices){
        var choiceBox = $("<div>");
        for(var i = 0; i < 4; i++){
            var choiceButton = $("<button>").text(choices[i]).attr("choice", choices[i]);
            // maybe add a class to the buttons for styling
            choiceBox.append(choiceButton);
        }
        board.append(choiceBox);
    }
    function evaluateChoice(){
        var userAnswer = $(this).attr("choice");
        if(userAnswer === questions[round].Answer){
            clearBoard();
            displayCorrect();
            round++;
            correct++;
            setTimeout(playRound, 4000);
        }
        else if(userAnswer !== questions[round].Answer){
            clearBoard();
            displayCorrect();
            round++;
            incorrect++;
            setTimeout(playRound, 4000);
            
        }
        else if(round === 6){
            clearBoard();
            end();

        }
    }
    
    
    function displayCorrect(){
        board.append($("<img>").attr("src", "https://cdn.shopify.com/s/files/1/0489/2545/products/ohhappydayconfetti_4468_61fb3a23-021a-4cc4-b2a4-514d71b1209a_1024x1024.jpg?v=1498626480"))
    }
    
    
    function clearBoard(){
        board.empty();
        clearInterval(intervalId);
    };
    
    function end(){
        board.text("You answered " + correct + " questions correctly & " + incorrect +" incorrectly.")
        $("#start").append("<button>");
        $("#start").on("click", playGame);
    }
    
    
});
    