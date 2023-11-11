testNums = [5, 6, 8, 11, 17, 35]
maxMult = 20
mult = 1
minMult = 2

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

function init (){
    console.log("Hello world!")
    var msg = new SpeechSynthesisUtterance();
    msg.text = "What is 17 times 13";
    window.speechSynthesis.speak(msg);
    GetAns(1,2)
}
