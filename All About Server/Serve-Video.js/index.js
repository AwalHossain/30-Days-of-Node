
/**
 * Serve mp4 file wih createReadstream 
 */


 const http = require('http');
 const fs = require('fs');
 
 
 
 
 const server = http.createServer(  (req, res)=>{
    /** Change the mime type     'video/mp4' */
     res.writeHead(200,{"Content-Type":"video/mp4"});
 
     /** read file method with readFile promise method */
     // fs.promises.readFile('text.pdf')
     // .then(resl => res.end(resl))
     // .catch(err => console.log(err))
     
     /** read file with try&catch method */
 	// change the MIME type to 'video/mp4'
     res.writeHead(200, {'Content-Type': 'video/mp4'});
     fs.exists('video.mp4',function(exists){
        console.log(exists);
         if(exists)
         {
             var rstream = fs.createReadStream('video.mp4');
             rstream.pipe(res);
         }
         else
         {
            //  res.send("Its a 404");
             res.end("Its a 404");
         }
     });
 });
 
 
 server.listen(3000, ()=>{
     console.log(`Server is listening through 3000`);
 })