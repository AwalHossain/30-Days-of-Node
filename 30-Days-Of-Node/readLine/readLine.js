const readLine = require("readline");


let rl = readLine.createInterface(process.stdin, process.stdout);


/** flowing method is taking input showing output according to process.stdin & process stdout */
// rl.question("What's is your age?", (age)=>{
//     console.log("Your age is: "+ age);

//     rl.close();
// })



/** setPrompt method is used to set the particular statement  as an input to the console.prompt() */

rl.setPrompt(`What is your age? `);
rl.prompt();


/** input wiill be listened by event called line */

rl.on('line', (age)=>{
    console.log(`Age received by the user: ${age}`);;
    rl.close();
})