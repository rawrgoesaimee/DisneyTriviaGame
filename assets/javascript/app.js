var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var counter = 60;
var timerCountdown = document.getElementById("countdown");
var displayResults = document.getElementById("quizResults");
var displayQuestions = document.getElementById("quizQuestions");

displayResults.style.display = "none";

function showResults() {
  displayQuestions.style.display = "none";
  displayResults.style.display  = "block";
}

// Set Timer
var timer = setTimeout(function() {
  showResults();
}, counter * 1000);

// Set Countdown
var countdown = setInterval(function() {
  counter--;
  timerCountdown.innerHTML = counter;
  if (counter === 0) {
    stopCountdown();   
    showResults(); 
  }
}, 1000);

function stopCountdown() {
  clearInterval(countdown);
}

var questions = [
  {
    question: "Which was supposed to be the original title of The Lion King?",
    answers: [
      "King of the Jungle",
      "Lion and Cub",
      "Jungle King",
      "Lion and his Pride"
    ]
  },
  {
    question: "How long did Mulan(1998) take to make?",
    answers: [
      "2 years",
      "10 years",
      "5 years",
      "3 years"
    ]
  },
  {
    question: "What date did Disneyland open?",
    answers: [
      "June 17, 1955",
      "July 17, 1955",
      "July 25, 1960",
      "May 5, 1945"
    ]
  },
  {
    question: "How many attractions did Disneyland originally open with?",
    answers: [
      "20",
      "10",
      "12",
      "18"
    ]
  },
  {
    question: "What is the secret club at Disneyland called?",
    answers: [
      "The Mickey Mouse Club",
      "Club 22",
      "Club 33",
      "Club 55"
    ]
  },
  {
    question: "Where did Lilo and Stitch take place?",
    answers: [
      "California",
      "New York",
      "Seattle",
      "Hawaii"
    ]
  },
  {
    question: "In Beauty and the Beast, what was beast's name as a prince?",
    answers: [
      "Adam",
      "Aidan",
      "Eric",
      "Pierre"
    ]
  },
  {
    question: "How many hours of improvised material did Robin Williams put in as Genie in Aladdin?",
    answers: [
      "10",
      "16",
      "20",
      "5"
    ]
  },
  {
    question: "What was the name of Pocahontas' mother figure?",
    answers: [
      "Weeping Willow",
      "Mother Willow",
      "Sister Willow",
      "Grandmother Willow"
    ]
  },
  {
    question: "When did they bury the time capsule located in front of Sleeping Beauty's Castle?",
    answers: [
      "June 17, 1995",
      "July 17, 1995",
      "July 25, 1999",
      "May 5, 1990"
    ]
  }
  
];

var correctAnsArr = [
  "King of the Jungle",
  "5 years",
  "July 17, 1955",
  "18",
  "Club 33",
  "Hawaii",
  "Adam",
  "16",
  "Grandmother Willow",
  "June 17, 1995"
];

// Display question and answers
for (var i = 0; i < questions.length; i++) {
  var question = questions[i];

  var sec = document.createElement("section");
  sec.className = "quizQuestions--question q" + i;
  sec.innerHTML = `<p>${question.question}</p>`;
  document.getElementById("form").appendChild(sec);

  for (var j = 0; j < question.answers.length; j++) {
    // console.log(question.answers[j]);
    var answer = question.answers[j];

    var div = document.createElement("div");
    var radioBtn = `<input type="radio" name="group${i}" value="${answer}">`
    div.innerHTML = radioBtn + " " + answer;
    // div.setAttribute("id", "answer");
    document.querySelector(".q" + i).appendChild(div);
  }
}

var form = document.forms["form"];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  stopCountdown();

  for (var i = 0; i < form.children.length; i++) {
    var found = "";

    for (var j = 0; j < form["group" + i].length; j++) {
      if (form["group" + i][j].checked) {
        found = form["group" + i][j].value;
      }
    }

    if (found === correctAnsArr[i]) {
      correctAns += 1;
      found = "";
    } else if (found === "") {
      unanswered += 1;
    } else {
      incorrectAns += 1;      
    }
  }

  document.getElementById("correct").innerHTML = correctAns;
  document.getElementById("incorrect").innerHTML = incorrectAns;
  document.getElementById("unanswered").innerHTML = unanswered;

  showResults();
});