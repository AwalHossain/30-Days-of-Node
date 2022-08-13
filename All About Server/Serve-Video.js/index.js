
/**
 * Serve mp4 file wih createReadstream 
 */


 const http = require('http');
 const fs = require('fs');
 
 
 
 
 const server = http.createServer( (req, res)=>{
    /** Change the mime type     'video/mp4' */
     res.writeHead(200,{"Content-Type":"video/mp4"});
 
     /** read file method with readFile promise method */
     try{

         let fileHandle = fs.promises.access('video.mp4', fs.constants.W_OK);
         console.log(fileHandle,"file");
        if(fileHandle){

            let rstream = fs.createReadStream('video.mp4');
                     rstream.pipe(res);
        }
     }catch(err){
        console.log(err);
     }
     
     /** video streaming is running on callback function */
 	

    //  fs.exists('video.mp4',function(exists){
    //     console.log(exists);
    //      if(exists)
    //      {
    //          var rstream = fs.createReadStream('video.mp4');
    //          rstream.pipe(res);
    //      }
    //      else
    //      {
    //         //  res.send("Its a 404");
    //          res.end("Its a 404");
    //      }
    //  });
 });
 
 
 server.listen(3000, ()=>{
     console.log(`Server is listening through 3000`);
 })