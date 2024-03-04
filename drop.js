function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SayQuestion(n) {

    var msg = new SpeechSynthesisUtterance();
    msg.text = n
    window.speechSynthesis.speak(msg);
}

function GetNonLinearRandom() {
    n = getRandomInt(1, 100)
    if (n <= 5)
        return 1;
    if (n <= 10)
        return 2;
    if (n <= 20)
        return 3;
    if (n <= 60)
        return 4;
    return 5;
}

async function Start() {
    // log = [0,0,0,0,0]
    minSleep = 1500
    while (true) {
        n = GetNonLinearRandom();
        SayQuestion(n)
        sleepLength = parseInt(document.getElementById("id").value)

        if (
            sleepLength < minSleep ||
            typeof sleepLength === undefined ||
            sleepLength === null ||
            sleepLength === "" ||
            isNaN(sleepLength)) {
                
            sleepLength = minSleep
        }

        console.log(n)
        console.log(`${sleepLength}ms`)


        await sleep(sleepLength);

        // log[n - 1] = log[n - 1] + 1

        // console.log(log)

    }
}



// 1 10
// 2 10
// 3 20
// 4 30
// 5 30 
