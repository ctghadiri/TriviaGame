// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
// start button to begin
// Timer starts
    // Questions appear
    // Choices
// Answer Question
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
var Qs = [
    {
        Question: Q1,
        Choices: [1,2,3,4],
        Answer: 3,
        img: img,

    },
    {
        Question: Q2,
        Choices: [1,2,3,4],
        Answer: 3,
        img: img,
    },
    {
        Question: Q3,
        Choices: [1,2,3,4],
        Answer: 3,
        img: img,
    },
    {
        Question: Q4,
        Choices: [1,2,3,4],
        Answer: 3,
        img: img,
    },
    {
        Question: Q5,
        Choices: [1,2,3,4],
        Answer: 3,
        img: img,
    }
]