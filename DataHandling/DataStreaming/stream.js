const fs = require('fs');

/** Read the file chunk by chunk */
let readStream = fs.createReadStream("readFile.txt");

/** listen readstring.on data event */
readStream.on('data', (data)=>{
    console.log(`the data is ${data}`);
})



/** steam once */

readStream.once('data', data=>{
    console.log("Reading data once", data);
})


/** listen end event to ensure reading streaming is end */

readStream.on('end',()=>{
    console.log("Data steamin has been finished");
})
