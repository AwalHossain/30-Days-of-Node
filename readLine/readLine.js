const readLine = require("readline");


let rl = readLine.createInterface(process.stdin, process.stdout);


rl.question("What's is your age?", (age)=>{
    console.log("Your age is: "+ age);

    rl.close();
})


