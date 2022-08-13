
/**
 * Serve pdf file with readfile
 */


const http = require('http');
const fs = require('fs');




const server = http.createServer( async (req, res)=>{
    res.writeHead(200,{"Content-Type":"application/pdf"});

    /** read file method with readFile promise method */
    // fs.promises.readFile('text.pdf')
    // .then(resl => res.end(resl))
    // .catch(err => console.log(err))
    
    /** read file with try&catch method */

    try{
       const rea = await fs.promises.readFile('text.pdf')
       
       console.log(rea);
       res.end(rea)
    }catch(err){
        console.log(err);
    }

    res.end();
});


server.listen(3000, ()=>{
    console.log(`Server is listening through 3000`);
})