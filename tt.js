testNums = [5, 6, 8, 11, 17, 35]
maxMult = 20
mult = 1
minMult = 2

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetAns (a, b){
    while(true){
        const input = prompt();
        alert(input)
        // usrAns = input(f"What is {a} X {b}?\n")
        // try:
        //     asInt = int(usrAns)
        // except ValueError:
        //     pass
        // else:
        //     return asInt
    }
}
        
function NewMult(old){
    
    NewMult = getRandomInt(minMult, maxMult)

    while (NewMult == old){
        NewMult = getRandomInt(minMult, maxMult)
    }
        return NewMult
}

function question(testNums, mult){
    
    testNum = testNums[getRandomInt(1, testNums.length - 1)]
    ans = testNum * mult
    usrAns = GetAns(testNum, mult)
    
    console.log(`${testNum} X ${mult} = ${ans}`)

    var msg = new SpeechSynthesisUtterance();
    msg.text = "What is 17 times 13";
    window.speechSynthesis.speak(msg);


    while (true){
        if (usrAns != ans){
            print("!", end="")
            usrAns = GetAns(testNum, mult)
        }
        else{ 
            return
        }        
    }
}

function randIndex(arr){
    len = arr.length
    return Math.floor(Math.random() * testNums.length)
}

function init (){

    // console.log("Hello world!")
    // for (let i = 0; i < 100; i++) {
    //     console.log(testNums[randIndex(testNums)])
    // }


    // Initial display
    console.log("Qwerty")
    var correctAnswer; // To store the correct answer for comparison
    displayQuestion();
}


// Function to generate a random multiplication question
function generateQuestion() {
    console.log("generateQuestion")

    var num1 = testNums[randIndex(testNums)]
    var num2 = Math.floor(Math.random() * maxMult) + 1;
    return { num1: num1, num2: num2, answer: num1 * num2 };
}

function keyUpFunction() {
    console.log("KeyDown")
    checkAnswer();
}

// Function to display a new question
function displayQuestion() {

    var question = generateQuestion();

    // document.getElementById('question').innerHTML = question.num1 + ' x ' + question.num2;
    // document.getElementById('userAnswer').value = '';
    // document.getElementById('result').innerHTML = '';
    
    var msg = new SpeechSynthesisUtterance();
    msg.text = `${question.num1} times ${question.num2}`;
    window.speechSynthesis.speak(msg);


    correctAnswer = question.answer;
}

// Function to check the user's answer
function checkAnswer() {
    console.log("checkAnswer")

    var userAnswer = document.getElementById('userAnswer').value;

    if (parseInt(userAnswer) === correctAnswer) {
        console.log("match")
        document.getElementById('userAnswer').value = '';

        displayQuestion()
    }
    else {
        console.log(parseInt(userAnswer), correctAnswer)

    }
}
