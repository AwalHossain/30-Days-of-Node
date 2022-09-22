const questions = [
    "What is your name?", 
    "What would you rather be doing?", 
    "What is your preferred programming language?" 
]

let answer = [];
console.log(answer.length,"leng");
function ask(i){
    process.stdout.write(`\n\n${questions[i]} >`);
}

process.stdin.on('data', (data)=>{
    answer.push(data.toString().trim());
    if(answer.length < questions.length){
        ask(answer.length)
    }else{
        process.exit();
    }
})


process.on('exit', ()=>{
    process.stdout.write(`\n\n\n ${answer[1]}, ${answer[0]}, ${answer[2]}`)
})


ask(0)