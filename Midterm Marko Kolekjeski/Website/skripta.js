function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


(function () {
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript (choose one)",
            answers: {
                a: "&ltscripting&gt",
                b: "&ltjs&gt",
                c: "&ltjavascript&gt",
                d: "&ltscript&gt"
            },
            correctAnswer: "d"
        },
        {
            question: "The external JavaScript file must contain the tag (check all that apply)",
            answers: {
                a: "True",
                b: "False",
                c: "Both",
                d: "None"
            },
            correctAnswer: "c"
        },
        {
            question: 'How do you write "Hello World" in an alert box? ',
            answers: {
                a: "Alert(“Hello World”);",
                b: "alertBox(“Hello World”);",
                c: "msg(“Hello World”);",
                d: "msgBoxl(“Hello World”);"
            },
            correctAnswer: "a"
        }
    ];

    // Kick things off
    buildQuiz();

    // Event listeners
    submitButton.addEventListener('click', showResults);
})();


function saveToLocal() {
    Name=document.submitForm.userName.value;
    Surname=document.submitForm.Surname.value;
    ID=document.submitForm.ID.value;
    Email=document.submitForm.Email.value;
    Comments=document.submitForm.Comments.value;
    let object = 
    {
        Name,
        Surname,
        Email,
        Comments,
        ID
    };
    localStorage.setItem("saved", JSON.stringify(object));
    alert("Successfully saved");
}


var startTime, endTime;

function timeStart() {
  startTime = new Date();
};

function timeEnd() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  alert(seconds + " seconds");
}


function ValidateForm(frm) {
    if (frm.Name.value == "") 
    {
        alert('Name is required.'); 
        frm.Name.focus();
        return false; 
    }
    if (frm.Surname.value.length < 10) 
    {
        alert('Surname is too short.'); 
        frm.Name.focus();
        return false; 
    }
    if (frm.Surname.value == "") 
    {
        alert('Surname is required.'); 
        frm.Name.focus();
        return false; 
    }
    if (frm.Email.value == "") 
    { 
        alert('Email address is required.'); 
        frm.Email.focus(); 
        return false; 
    }
    if (frm.ID.value == "") 
    { 
        alert('ID is required.'); 
        frm.Email.focus(); 
        return false; 
    }
    if (frm.Email.value.indexOf("@") < 1 || frm.Email.value.indexOf(".") < 1) 
    {
         alert('Please enter a valid email address.'); 
         frm.Email.focus(); 
         return false; 
        }
    

    return false;
}

