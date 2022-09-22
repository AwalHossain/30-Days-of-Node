const fs = require('fs')
const path = require('path');
function deleteFile(req, res){
    let dir = path.join(__dirname+"/file.txt");
    fs.promises.unlink(dir)
    .then(resl => {
        console.log(resl);
        res.end("File has been delete");
    })
    .catch(err => console.log(err));
}



module.exports = deleteFile;