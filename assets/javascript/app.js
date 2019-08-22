//code from bootstrap to bring focus to modal
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   });

//declare variables
//time counter
var time = 0;
//number of correct answers
var correct = 0;
//number of incorrect answers
var incorrect = 0;
//number of unanswered questions
var unanswered = 0;

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
]
//add more later

//functions needed
//new game, reset game, check for correct answer, timer
//add more later
