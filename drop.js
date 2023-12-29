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

async function init(){

    while(true){
        n = getRandomInt(1,5)
        SayQuestion(n)
        sleepLength = parseInt(document.getElementById("id").value)
        await sleep(sleepLength);

        console.log(n)
        console.log(sleepLength/1000)
    }
}