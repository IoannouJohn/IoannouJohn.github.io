allPossibleTestNums = [5, 6, 8, 11, 17, 35]
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
  return Math.floor(Math.random() * arr.length)
}

function init() {

  displayQuestion();
}

function isSmoothBrained(testNum, multiplier) {
  if (testNum == 11 && multiplier <= 9){
    console.log(`TestNum ${testNum} and Multiplier ${multiplier} make a smoothbrained question`)
    return true
  }
  if(multiplier == 10 && (testNum == 5 || testNum == 6 ||testNum == 8)){
    console.log(`TestNum ${testNum} and Multiplier ${multiplier} make a smoothbrained question`)
    return true

  }

  return false
}

function generateQuestion() {

  //maybe cut out the too  simple ones 
  // do{

  //get testnums from checkboxes
  //look for retarded ones    
  selectedTestNums = []

  for (const element of allPossibleTestNums) {
    var checkBox = document.getElementById(String(element));

    if (checkBox.checked == true) {
      selectedTestNums.push(element)
    }
  }


  var testNum = selectedTestNums[randIndex(selectedTestNums)]


  do {
    var multiplier = getRandomInt(2, 20);
  }
  while (isSmoothBrained(testNum, multiplier))


  return { num1: testNum, num2: multiplier, answer: testNum * multiplier };
}

function keyUpFunction() {
  checkAnswer();
}

function SayQuestion() {

  var msg = new SpeechSynthesisUtterance();
  msg.rate = 2;
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
