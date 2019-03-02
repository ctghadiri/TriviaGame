var round = 0;
var correct = 0;
var incorrect = 0;
var timerRunning;
var board = $("#board");
var time = 20;
var intervalId;
var questions = [
    {
        question: "Who is the richest superhero?",
        choices: ["Iron Man", "Mr. Fantastic", "Thor", "Black Panther"],
        Answer: "Black Panther",
        img: "https://i.redd.it/5a3d983l01411.jpg"
        
    },
    {
        question: "How old is wolverine?",
        choices: ["????","137","195", "261"],
        Answer: "????",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WnZ4IfLkaquUuRqm3ZtSyw0wow7RsNphkIrHanYGcjG5aOZaGA"
    },
    {
        question: "Who is Thanos' romantic rival?",
        choices: ["Doctor Strange", "Iron Man", "Hulk", "Deadpool"],
        Answer: "Deapool",
        img: "https://imgix.bustle.com/rehost/2016/9/13/e89d2ca9-f30a-4d4f-9c92-0f88cd9c91e6.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
    },
    {
        question: "Who's the strongest Avenger?",
        choices: ["Vision","Thor","Hulk","Captain America"],
        Answer: "Hulk",
        img: "https://akns-images.eonline.com/eol_images/Entire_Site/201476/rs_736x981-140806142018-The_Hulk.jpg"
    },
    {
        question: "What special bond does Doctor Strange and Iron Man?",
        choices: ["Awesome Facial Hair Bros","Both doctors","Born in the same state","Both were Sherlock Holmes"],
        Answer: "Awesome Facial Hair Bros",
        img: "https://pics.me.me/awesome-facial-hair-bros-25647490.png"
    }
]


$(document).ready(function(){
    $("#start").on("click", playGame);
    board.on("click", "button", evaluateChoice)
    function playGame(){
        round = 0;
        correct = 0;
        incorrect = 0;
        time = 20;
        playRound();
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
                incorrect++;
                roundCounter();
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
            correct++;
            roundCounter();
            setTimeout(playRound, 4000);
        }
        else if(userAnswer !== questions[round].Answer){
            clearBoard();
            displayCorrect();
            incorrect++;
            roundCounter();
            setTimeout(playRound, 4000);
            
        }
    }
    
    
    function displayCorrect(){
        board.append($("<img>").attr("src", questions[round].img))
    }
    function roundCounter(){
        round++;
        if(round === 5){
            end();
        };
    }
    
    function clearBoard(){
        board.empty();
        clearInterval(intervalId);
    };
    
    function end(){
        clearBoard();
        board.text("You answered " + correct + " questions correctly & " + incorrect +" incorrectly.")
        var restart = $("<button>");
        board.append(restart)
        restart.html("Restart")
        restart.on("click", playGame)
    }
    
    
});
    