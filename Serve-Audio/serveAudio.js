let http = require('http');
// import { http } from 'http';
let port = 5000;
const fs = require('fs')
// import { access } from 'fs/promises';


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

    res.write("heleo there")
   
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



    /***
     * Promise method for streaming song
     * @access method
     */
    try{
        let fileHandle = fs.promises.access('audio.mp3',fs.constants.W_OK);
        console.log(fileHandle,"file");
        if(fileHandle){

            let rstream = fs.createReadStream('audio.mp3');
                rstream.pipe(res);
        }

    }catch(err){
        console.log(err);
    }

    // res.end("this ei end")

}).listen(port, ()=>{
    console.log(`Server is runing on${port}`);
})


