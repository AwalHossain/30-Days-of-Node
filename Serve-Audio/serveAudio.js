let http = require('http');
let port = 5000;
const fs = require('fs')


let server = http.createServer((req, res)=>{
    // change MIME type to 'audio/mp3'

    res.writeHead(200, {"Content-Type":"audio/mp3"});
    // fs.exists('audio.mp3',(exist)=>{
    //     if(exist){
    //         let rstream = fs.createReadStream('audio.mp3');
    //         rstream.pipe(res)
    //     }else{
    //         res.end("Its a 404");
    //     }
    // 

   
/** Promise method for checking existence of file and then read stream  */
    try{
        let fileHandle = fs.promises.stat('audio.mp3');
        if(fileHandle){
            let rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
        }
    }catch(err){
        console.log(err);
    }


}).listen(port, ()=>{
    console.log(`Server is runing on${port}`);
})


