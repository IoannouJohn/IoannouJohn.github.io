function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let denominations = [5, 10, 25]
// let denominations = [5]
let piceValue = 0;

let layout = {
    StraightUp: 0,
    Split: 0,
    Corner: 0,
    Street: 0,
    SixBet: 0,
}

function CalcAnswer(q) {
    return q.StraightUp * 35 + q.Split * 17 + q.Corner * 8 + q.Street * 11 + q.SixBet * 5
}

function GetByID(id) {
    // console.log(id)
    a = document.getElementById(id).value
    if (typeof a === undefined || a === null) {
        console.log("Is null or undefined")
        return null
    }
    return a;
}

function GetBetRanges(betName) {
    // console.log(betName)
    let lowID = `${betName}_L`
    let highID = `${betName}_H`

    // console.log(lowID)
    // console.log(highID)

    low = parseInt(GetByID(lowID))
    high = parseInt(GetByID(highID))
    return [low, high]
}

function GetRandomizedLayout() {
    //make func for getting ranges 
    // StraightUpLow = parseInt(GetByID('StraightUp_L'))
    // StraightUpHigh = parseInt(GetByID('StraightUp_H'))
    StraightUp = getRandomInt(GetBetRanges("StraightUp")[0], GetBetRanges("StraightUp")[1])
    Split = getRandomInt(GetBetRanges("Split")[0], GetBetRanges("Split")[1])
    Corner = getRandomInt(GetBetRanges("Corner")[0], GetBetRanges("Corner")[1])
    Street = getRandomInt(GetBetRanges("Street")[0], GetBetRanges("Street")[1])
    SixBet = getRandomInt(GetBetRanges("SixBet")[0], GetBetRanges("SixBet")[1])

    const q = {
        StraightUp: StraightUp,
        Split: Split,
        Corner: Corner,
        Street: Street,
        SixBet: SixBet
    }

    return q;
}

function testRanges(bet) {
    // console.log(`Testing ${bet}`)

    let ans = [];
    for (let i = 0; i < 20; i++) {

        l = parseInt(document.getElementById(`${bet}_L`).value)
        h = parseInt(document.getElementById(`${bet}_H`).value)

        ans[i] = getRandomInt(l, h)

        // ans += toString(i);
        // ans[i] = i
    }
    console.log(ans);
}

function RequestStacks(n) { 
    maxNumberOfStacks = Math.trunc(n / 20)
    let heigh = Math.min(maxNumberOfStacks, 10)

    console.log(`${maxNumberOfStacks} Stacks`)
    n = getRandomInt(1, high)
    return n
}

function displayQuestion() {
    questionPrompt = ""
    questionPrompt += `Straight Ups = ${layout.StraightUp}<br>`
    questionPrompt += `Splits = ${layout.Split}<br>`
    questionPrompt += `Corners = ${layout.Corner}<br>`
    questionPrompt += `Streets = ${layout.Street}<br>`
    questionPrompt += `Six Bets = ${layout.SixBet}\n`
    pp = CalcAnswer(layout)

    requestStacks = RequestStacks(pp)

    document.getElementById("pValue").innerHTML = `$${piceValue} Table | Patron requests ${requestStacks} stacks`;

    document.getElementById("qDisplay").innerHTML = questionPrompt
    console.log(pp)
}

function GetChipInputById(id) {
    a = document.getElementById(id).value
    if (typeof a === undefined || a === null || a === "") {
        // console.log("Is nul  l or undefined or empty sring ")
        return 0
    }
    return parseInt(a)
}

function AnsIsCorrect() {
    color = GetChipInputById("Color")
    fives = GetChipInputById("Fives")
    tens = GetChipInputById("Tens")
    ponies = GetChipInputById("Ponies")
    tigers = GetChipInputById("Tigers")
    monkeys = GetChipInputById("Monkeys")
    gorillas = GetChipInputById("Gorillas")
    bananas = GetChipInputById("Bananas")
    
    usrAnsSum = color * piceValue + fives * 5 + tens * 10 + ponies * 25 + tigers * 100 + monkeys * 500 + gorillas * 1000 + bananas * 5000
    totalCashPayout = CalcAnswer(layout) * piceValue

    console.log(`usrAnsSum = ${usrAnsSum}`)
    console.log(`TotalCashPayout = $${totalCashPayout}`)

    if (usrAnsSum == totalCashPayout)
        return true

    return false
}

function Submit() {
    if (AnsIsCorrect()) {
        ResetQuestion()
    }
}

function ShowAns() {
    ansDisplay = document.getElementById("ansDisplay") 

    if (ansDisplay.innerHTML == ""){
        ansDisplay.innerHTML = CalcAnswer(layout);
    }
    else{
        ansDisplay.innerHTML = ""
    }
}

function ResetQuestion() {
    document.getElementById('Color').value = '';
    document.getElementById('Fives').value = '';
    document.getElementById('Tens').value = '';
    document.getElementById('Ponies').value = '';
    document.getElementById('Tigers').value = '';
    document.getElementById('Monkeys').value = '';
    document.getElementById('Gorillas').value = '';
    document.getElementById('Bananas').value = '';
    document.getElementById('ansDisplay').innerHTML = '';

    layout = GetRandomizedLayout()

    piceValue = denominations[getRandomInt(0, denominations.length - 1)];

    displayQuestion()
}

function init() {
    ResetQuestion();
}