import cors from 'cors';
import express from 'express';


const app = express();
const port = 3000;


app.use(cors());



app.listen(port, ()=>{
    console.log(`[info] ffmpeg-api listening at http://localhost:${port}`)
})