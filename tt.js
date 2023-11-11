testNums = [5, 6, 8, 11, 17, 35]
maxMult = 20
mult = 1
minMult = 2
var question;

//inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PrintQuestion(q) {
    console.log(`${q.num1} x ${q.num2} = ${q.answer} `)
}

function NewMult(old) {
    NewMult = getRandomInt(minMult, maxMult)

    while (NewMult == old) {
        NewMult = getRandomInt(minMult, maxMult)
    }
    return NewMult
}


function randIndex(arr) {
    len = arr.length
    return Math.floor(Math.random() * testNums.length)
}

function init() {

    console.log("Hello world!")
    for (let i = 0; i < 100; i++) {
        q = generateQuestion()
        PrintQuestion(q)
    }

    displayQuestion();
}

function generateQuestion() {

    //maybe cut out the too  simple ones 
    // do{
    var testNum = testNums[randIndex(testNums)]
    var multiplier = getRandomInt(2, 20);
    // }
    // while()


    return { num1: testNum, num2: multiplier, answer: testNum * multiplier };
}

function keyUpFunction() {
    checkAnswer();
}

function SayQuestion() {

    var msg = new SpeechSynthesisUtterance();
    msg.text = `${question.num1} times ${question.num2}`;
    window.speechSynthesis.speak(msg);
}

function displayQuestion() {

    question = generateQuestion();

    // document.getElementById('question').innerHTML = question.num1 + ' x ' + question.num2;
    // document.getElementById('userAnswer').value = '';
    // document.getElementById('result').innerHTML = '';
    PrintQuestion(question)
    SayQuestion(question)

    correctAnswer = question.answer;
}

function checkAnswer() {

    var userAnswer = document.getElementById('userAnswer').value;

    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById('userAnswer').value = '';
        displayQuestion()
    }
    else {
        console.log(parseInt(userAnswer), correctAnswer)
    }
}


// Altering Default Output

// The speechSynthesis API gives room to also change alter the default output like changing the voice, volume, speech rate, language, pitch and more:

// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10]; 
// msg.volume = 1; // From 0 to 1
// msg.rate = 1; // From 0.1 to 10
// msg.pitch = 2; // From 0 to 2
// msg.text = "Como estas Joel";
// msg.lang = 'es';
// speechSynthesis.speak(msg);

// Getting Supported Voices

// The code below helps you retrieve the list of all supported voices:

// speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? voice.default :'');
// });
