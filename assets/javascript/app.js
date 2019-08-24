//declare variables
//current question
var question = "";
//current multiple choice answers
var multiple = [];
//current correct answer
var answer = "";
//time counter
var time = 30;
//hold set interval for timer
var timer;
//number of correct answers
var correct = 0;
//number of incorrect answers
var incorrect = 0;
//number of unanswered questions
var unanswered = 0;
//is question on screen
var isQuestionDisplayed = false;
//number of questions asked
var quantity = 0;
//interval to display quesions
var questionInterval

//need array of objects for quesitons that will include multiple choice answers and correct answer
var questions = [
    {
        question: "What is Queen Latifah's real name?",
        choices: ["Deborah Owens", "Dana Owens", "Latifah James", "Amber Riley"],
        correctAnswer: "Dana Owens"
    },
    {
        question: "Where is Queen Latifah from?",
        choices: ["Queens, NY", "Philadelphia, PA", "Brooklyn, NY", "Newark, NJ"],
        correctAnswer: "Newark, NJ"
    },{
        question: "What sport did Queen Latifah play in high school?",
        choices: ["Basketball", "Softball", "Volleyball", "Girl's Football"],
        correctAnswer: "Basketball"
    },{
        question: "What was the name Latifah's first single?",
        choices: ["Ladies First", "Come Into My House", "U.N.I.T.Y", "Wrath of My Madness"],
        correctAnswer: "Wrath of My Madness"
    },{
        question: "What song earned Queen Latifah a Grammy Award?",
        choices: ["Ladies First", "Come Into My House", "U.N.I.T.Y", "Wrath of My Madness"],
        correctAnswer: "U.N.I.T.Y"
    },{
        question: "Queen Latifah made her acting debut in what year?",
        choices: ["1989", "1991", "1992", "1993"],
        correctAnswer: "1991"
    },
    {
        question: "On what TV show did Queen Latifah make her small screen debut?",
        choices: ["Fresh Prince of Bel Air", "Living Single", "A Different World", "Beverly Hills 90210"],
        correctAnswer: "Fresh Prince of Bel Air"
    },{
        question: "In what movie did Queen Latifah make her big screen debut?",
        choices: ["Set It Off", "Juice", "Jungle Fever", "Living Out Loud"],
        correctAnswer: "Jungle Fever"
    },{
        question: "Queen Latifah earned an Oscar nomination for her role in what movie?",
        choices: ["The Bone Collector", "Dreamgirls", "Hairspray", "Chicago"],
        correctAnswer: "Chicago"
    },{
        question: "Which of these rappers/actors has Queen Latifah not been in a film with?",
        choices: ["Busta Rhymes", "Tupac", "Common", "Ice Cube"],
        correctAnswer: "Busta Rhymes"
    },
    //add more later
]


//display questions and multiple choices on screen
function questionDeck() {
    //computer randomly selects question
    var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    //set question to computer selected question
    question = currentQuestion.question;
    //set multipe to multiple choice answers of computer selected question
    multiple = currentQuestion.choices;
    //set answer to answer of computer selected question
    answer = currentQuestion.correctAnswer;
     time = 30;
     $('#time').text(time);
     timer = setInterval(clock, 1000);
    //add computer selected question to the screen
    $('#question').text("Q: " + question);

    //create elements for multiple choice answers
    for (i=0; i<multiple.length; i++) {
        var choice = $('<p>');
        choice.addClass('option');
        choice.attr("data-answer", multiple[i])
        choice.text(multiple[i]);
        
        //add multiple choice element to screen
        $('#multiple'+i).append(choice);
    }
    //increase total number of questions asked
    quantity++;
    console.log("questions asked " + quantity);
}

function clock() {
    //add interval to track seconds
    time--;
    $('#time').text(time);
    if(time === 0) {
        stop();
        unanswered++;
        console.log(unanswered);
        //show modal
        $('#missed').addClass('show');
        //add dim background
        var background = $('<div id="background">').addClass('modal-backdrop show');
        $('body').append(background);
        //remove modal aftr a few seconds
        setTimeout(function() {
            $('#missed').removeClass('show');
            $('#background').remove();
        }, 3000);
        
        if (quantity < 5) {
            //put up a new question
            setTimeout(function() {
                $('#question').empty();
                $('.choiceAnswers').empty();
            }, 3100);
            setTimeout(questionDeck, 3500);
        } else {
            console.log("Game Over");
        }
    }
}

function stop() {
    clearInterval(timer);
}

//run question loader
questionDeck();

//add onclick function to each multiple choice answer
$(document).on("click", ".option", function() {
    console.log($(this).attr("data-answer"));
        $(this).addClass('selected');
        $(this).removeClass('option');
    
        //check if answer selected matches correct answer
         if ($(this).attr("data-answer") === answer) {
            //show modal
            $('#correct').addClass('show');
            //add dim background
            var background = $('<div id="background">').addClass('modal-backdrop show');
            $('body').append(background);
            //remove modal aftr a few seconds
            setTimeout(function() {
                $('#correct').removeClass('show');
                $('#background').remove();
            }, 3000);
            stop();
            //put up a new question
            setTimeout(function() {
                $('#question').empty();
                $('.choiceAnswers').empty();
            }, 3100);
            //add to correct answer count
            correct++;
        } else {
            //show modal
            $('#wrong').addClass('show');
             //add dim background
             var background = $('<div id="background">').addClass('modal-backdrop show');
             $('body').append(background);
            //remove modal aftr a few seconds
            setTimeout(function() {
                $('#wrong').removeClass('show');
                $('#background').remove();
            }, 3000);
            stop();
            //put up a new question
            setTimeout(function() {
                $('#question').empty();
                $('.choiceAnswers').empty();
            }, 3100);
            //add to wrong answer count
            incorrect++;
        }
        setTimeout(questionDeck, 3500);
        console.log("correct " + correct);
        console.log("missed " + incorrect);


});


//functions needed
//new game, reset game, timer
