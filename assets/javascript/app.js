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
//questions that have been asked
var questionsAsked = [];
//number of questions asked
var quantity = 0;
//interval to display quesions
var questionInterval

//api key
var giphy = "&api_key=GYHcoSDnNTboO0ZRaXgPLt7ixB2VEDWn";

//api search
var search = "http://api.giphy.com/v1/gifs/search?";

var correctGiphs = ["https://media.giphy.com/media/h13Xr3aT2cTKw/giphy.gif","https://media.giphy.com/media/efJ3wU9Z8SLdUnpUem/giphy.gif",
"https://media.giphy.com/media/RIuHHNa7UgFKo/giphy.gif", "https://media.giphy.com/media/3HDVFbFQZzJRlC9j1X/giphy.gif", 
"https://media.giphy.com/media/WS6OOvCIHzaiE9wo7L/giphy.gif", "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif", 
"https://media.giphy.com/media/14sy6VGAd4BdKM/giphy.gif", "https://media.giphy.com/media/lsr3605ZkSCpG/giphy.gif", 
"https://media.giphy.com/media/141We0f1Lrf8Z2/giphy.gif", "https://media.giphy.com/media/1BhG0U58TwNllcEXcd/giphy.gif", 
"https://media.giphy.com/media/26DOoDwdNGKAg6UKI/giphy.gif", "https://media.giphy.com/media/9rnoFO1PP1rZYHFRtW/giphy.gif", 
"https://media.giphy.com/media/ZUOlQXqO0qbAI/giphy.gif", "https://media.giphy.com/media/3o7TKrZceAxICYvD3y/giphy.gif", 
"https://media.giphy.com/media/l0K43WY66QBYuCvFC/giphy.gif", "https://media.giphy.com/media/ZyuDKmSV5sLNSoaKak/giphy.gif", 
"https://media.giphy.com/media/TJb9vg2aEHuZ12dVR7/giphy.gif", "https://media.giphy.com/media/13hxeOYjoTWtK8/giphy.gif", 
"https://media.giphy.com/media/w7mLEAMcpjrpe/giphy.gif", "https://media.giphy.com/media/Urc6MhJ2SpdpKKkz7n/giphy.gif",
"https://media.giphy.com/media/wAxlCmeX1ri1y/giphy.gif", "https://media.giphy.com/media/8F5Z9rrETggGE4VLpM/giphy.gif",
"https://media.giphy.com/media/ea3KuP14cRxWo/giphy.gif", "https://media.giphy.com/media/QMkPpxPDYY0fu/giphy.gif"]
var wrongGiphs = ["https://media.giphy.com/media/kE8bAdv1AKdSqJf2Rw/giphy.gif",
"https://media.giphy.com/media/1zSz5MVw4zKg0/giphy.gif", "https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif",
"https://media.giphy.com/media/wYyTHMm50f4Dm/giphy.gif", "https://media.giphy.com/media/VgqtLbNtJEWtVlfMVv/giphy.gif",
"https://media.giphy.com/media/26gs6vEzlpaxuYgso/giphy.gif", "https://media.giphy.com/media/c5FhF1waAJ5wk/giphy.gif",
"https://media.giphy.com/media/UTm86phGUMMQE/giphy.gif", "https://media.giphy.com/media/zdq4DT1gHlxny/giphy.gif", 
"https://media.giphy.com/media/z5WtAAaFpnIgU/giphy.gif", "https://media.giphy.com/media/l378u9el7hENR8OEo/giphy.gif",
"https://media.giphy.com/media/tPdYQaW6oCIOA/giphy.gif", "https://media.giphy.com/media/Y0Swx3rp8EdXy/giphy.gif",
"https://media.giphy.com/media/5RKNrDyexEBQynsaNg/giphy.gif", "https://media.giphy.com/media/IBFjeoZ5Oewhi/giphy.gif"]
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
        choices: ["Set It Off", "Just Wright", "Jungle Fever", "Living Out Loud"],
        correctAnswer: "Jungle Fever"
    },{
        question: "Queen Latifah earned an Oscar nomination for her role in what movie?",
        choices: ["The Bone Collector", "Dreamgirls", "Hairspray", "Chicago"],
        correctAnswer: "Chicago"
    },{
        question: "Which of these rappers/actors has Queen Latifah not been in a film with?",
        choices: ["Busta Rhymes", "Tupac", "Common", "Ice Cube"],
        correctAnswer: "Busta Rhymes"
    },{
        question: "On Living Single, what was the of the character played by Queen Latifah?",
        choices: ["Maxine Shaw", "Lakeisha Jones", "Khadijah James", "Claire Huxtable"],
        correctAnswer: "Khadijah James"
    },{
        question: "Queen Latifah's duet, Ladies First, was with what artist?",
        choices: ["Monie Love", "MC Lyte", "Lil Kim", "Salt n Peppa"],
        correctAnswer: "Monie Love"
    },{
        question: "What is the name of Queen Latifah's rapping crew and label?",
        choices: ["All Flavor No Grease", "Flavor Posse", "Real Flavor", "Flavor Unit"],
        correctAnswer: "Flavor Unit"
    },{
        question: "How many Oscars has Queen Latifah won?",
        choices: ["0", "3", "1", "2"],
        correctAnswer: "0"
    },{
        question: "What did Queen Latifah wear in dedication to her late brother?",
        choices: ["Lockett", "Car Key", "Flower", "Ribbon"],
        correctAnswer: "Car Key"
    },{
        question: "What year was Queen Latifah honored by VH1 Hip Hop Honors?",
        choices: ["2009", "2012", "2014", "2016"],
        correctAnswer: "2016"
    },{
        question: "Which of these movies did Queen Latifah not play in?",
        choices: ["Valentine's Day", "Ice Age", "Best Man", "Last Holiday"],
        correctAnswer: "Best Man"
    },{
        question: "Queen Latifah introduced us to what group that was signed to her label?",
        choices: ["A Tribe Called Quest", "Outkast", "Boyz II Men", "Naughty By Nature"],
        correctAnswer: "Naughty By Nature"
    },
    //add more later
]


//display questions and multiple choices on screen
function questionDeck() {
    console.log(questions.length);
    //computer randomly selects question
    var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    //set question to computer selected question
    question = currentQuestion.question;
    //set multipe to multiple choice answers of computer selected question
    multiple = currentQuestion.choices;
    //set answer to answer of computer selected question
    answer = currentQuestion.correctAnswer;
     time = 10;
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
    questionsAsked.push(currentQuestion);
    console.log("questions asked " + quantity);
    var asked = questions.indexOf(currentQuestion);
    questions.splice(asked, 1);
}

function gameOver() {
    if (quantity < 5) {
        //put up a new question
        setTimeout(function() {
            $('#question').empty();
            $('.choiceAnswers').empty();
        }, 2100);
        setTimeout(questionDeck, 2500);
    } else {
        setTimeout(function() {
            $('#background').remove();
            $('#correct').removeClass('show');
            $('#wrong').removeClass('show');
            $('#won').text("You answered " + correct + " questions correctly.");
            $('#lost').text("You answered " + incorrect + " questions incorrectly.");
            $('#neither').text("There were " + unanswered + " unanswered questions.");
            $('#over').addClass('show');
            //add dim background
            var background = $('<div id="background">').addClass('modal-backdrop show');
            $('body').append(background);
            console.log("Game Over");
        }, 2000)
    }
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
        }, 2000);
        console.log("correct " + correct);
        console.log("missed " + incorrect);
        console.log("unanswered " + unanswered);
       gameOver();
    }
}

function stop() {
    clearInterval(timer);
}

//run question loader
questionDeck();

//add onclick function to each multiple choice answer
$(document).on("click", ".option", function() {
        $(this).addClass('selected');
        $(this).removeClass('option');
    
        //check if answer selected matches correct answer
         if ($(this).attr("data-answer") === answer) {
             var giph = correctGiphs[Math.floor(Math.random() * correctGiphs.length)];
             var gDisplay = $('<img id="winImage">').attr("src", giph);
             $(".win-body").append(gDisplay);
            //show modal
            $('#correct').addClass('show');
            //add dim background
            var background = $('<div id="background">').addClass('modal-backdrop show');
            $('body').append(background);
            //remove modal aftr a few seconds
            setTimeout(function() {
                $('#winImage').remove();
                $('#correct').removeClass('show');
                $('#background').remove();
            }, 2000);
            stop();
            //add to correct answer count
            correct++;
        } else {
            var giph = wrongGiphs[Math.floor(Math.random() * wrongGiphs.length)];
            var gDisplay = $('<img id="lostImage">').attr("src", giph);
             $(".wrong-body").append(gDisplay);
            //show modal
            $('#wrong').addClass('show');
             //add dim background
             var background = $('<div id="background">').addClass('modal-backdrop show');
             $('body').append(background);
            //remove modal aftr a few seconds
            setTimeout(function() {
                $('#lostImage').remove();
                $('#wrong').removeClass('show');
                $('#background').remove();
            }, 2000);
            stop();
            //add to wrong answer count
            incorrect++;
        }
        gameOver();

});


//reset game
function reset() {
    close();
    for (a=0; a<questionsAsked.length; a++) {
        questions.push(questionsAsked[a]);
    }
    questionsAsked = [];
    $('#question').empty();
    $('.choiceAnswers').empty();
    quantity = 0;
    unanswered = 0;
    correct = 0;
    incorrect = 0;
    questionDeck();
}

$(".close").on("click", close);
$("#close").on("click", close);
$("#play").on("click", reset);

function close() {
    $('#over').removeClass('show');
    $('#background').remove();
};
