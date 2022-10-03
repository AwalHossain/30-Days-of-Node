import { createFFmpeg } from '@ffmpeg/ffmpeg';
import cors from 'cors';
import express from 'express';
import multer from 'multer';


const ffmpegInstance = createFFmpeg({log: true});
let ffmpegLoadingPromise = ffmpegInstance.load();

async function getFfmpeg(){
    
}

const app = express();
const port = 3000;

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 100*1024*1024}
})

app.use(cors());



app.post('/thumbnail', upload.single('video'), async(req,res)=>{
    const videoData = req.file.buffer;




    res.sendStatus(200);
})


app.listen(port, ()=>{
    console.log(`[info] ffmpeg-api listening at http://localhost:${port}`)
})