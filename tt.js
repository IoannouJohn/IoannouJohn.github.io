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


function init (){

    // console.log("Hello world!")
    // for (let i = 0; i < 100; i++) {
    //     console.log(getRandomInt(1, 20))
    // }


    while (true){
        mult = NewMult(mult)
        question(testNums, mult)    

    }
}
