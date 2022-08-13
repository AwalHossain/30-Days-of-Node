/**
 * stream audio file by checking file existentce first then run that file through pipe
 */




let http = require('http');

let port = 5000;
const fs = require('fs')



let server = http.createServer( (req, res)=>{
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
    // try{
    //     let fileHandle = fs.promises.stat('audio.mp3');
    //     if(fileHandle){
    //         let rstream = fs.createReadStream('audio.mp3');
    //         rstream.pipe(res);
    //     }
    // }catch(err){
    //     console.log(err);
    // }



    /** "access" to check file existence Promise method for streaming song  */
    try{
        let fileHandle = fs.promises.access('audio.mp3',fs.constants.W_OK);
        console.log(fileHandle,"file");
        if(fileHandle){

            let rstream = fs.createReadStream('audio.mp3');
                rstream.pipe(res);
        }else{
            console.log("erro");
        }

    }catch(err){
        console.log("got the errro");
    }

// res.end("this ei end")   

}).listen(port, ()=>{
    console.log(`Server is runing on${port}`);
})


