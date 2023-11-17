function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    return document.getElementById(id).value
}
function GetRange(bet) {

}

function GetRandomizedLayout() {
    //make func for getting ranges 
    StraightUpLow = parseInt(GetByID('StraightUp_L'))
    StraightUpHigh = parseInt(GetByID('StraightUp_H'))
    StraightUp = getRandomInt(StraightUpLow, StraightUpHigh)

    SplitLow = parseInt(GetByID('Split_L'))
    SplitHigh = parseInt(GetByID('Split_H'))
    Split = getRandomInt(SplitLow, SplitHigh)

    CornerLow = parseInt(GetByID('Corner_L'))
    CornerHigh = parseInt(GetByID('Corner_H'))
    Corner = getRandomInt(CornerLow, CornerHigh)

    StreetLow = parseInt(GetByID('Street_L'))
    StreetHigh = parseInt(GetByID('Street_H'))
    Street = getRandomInt(StreetLow, StreetHigh)

    SixBetLow = parseInt(GetByID('SixBet_L'))
    SixBetHigh = parseInt(GetByID('SixBet_H'))
    SixBet = getRandomInt(SixBetLow, SixBetHigh)

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
    console.log(`Testing ${bet}`)

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

function displayQuestion() {

    questionPrompt = ""
    questionPrompt += `Straight Ups = ${layout.StraightUp}<br>`
    questionPrompt += `Splits = ${layout.Split}<br>`
    questionPrompt += `Corners = ${layout.Corner}<br>`
    questionPrompt += `Streets = ${layout.Street}<br>`
    questionPrompt += `Six Bets = ${layout.SixBet}\n`

    document.getElementById("qDisplay").innerHTML = questionPrompt
    console.log(CalcAnswer(layout))

}

function checkAns() {
    usrAns = parseInt(document.getElementById("userAnswer").value)
    if (usrAns == CalcAnswer(layout))
        return true
    return false
}

function keyUpFunction() {
    if (checkAns()) {
        document.getElementById('userAnswer').value = '';
        layout = GetRandomizedLayout()
        displayQuestion()
    }

}

function init() {

    layout = GetRandomizedLayout()
    displayQuestion()

    // // const q = { 
    // //     StraightUp: 1,
    // //     Split: 2,
    // //     Corner: 3,
    // //     Street: 4,
    // //     SixBet: 5,
    // // }

    // console.log("qwerty")
    // testRanges("StraightUp")
    // testRanges("Split")
    // testRanges("Corner")
    // testRanges("Street")
    // testRanges("SixBet")

    console.log(layout)
    console.log(CalcAnswer(layout))
}