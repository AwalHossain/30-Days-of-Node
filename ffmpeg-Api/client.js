const fileInput = document.querySelector('#file-input');
const submitButton = document.querySelector('#submit');
const thumbnailPreview = document.querySelector('#thumbnail');
const errorDiv = document.querySelector('#error');


const API_ENDPOINT = 'http://localhost:3000/thumbnail'

// show error message if any
function showError(msg){
    errorDiv.innerText = `Error: ${msg}`
}



// submit file 
submitButton.addEventListener('click', async()=>{
    const {files} = fileInput;
})


async function createThumbnail(video){

    const payload = new FormData();
    payload.append('video', video);

    const res = await fetch(API_ENDPOINT, {
        method: 'Post',
        body: payload
    })

    if(!res.ok){
        throw new Error(`Creating thumbnil failed`);
    }
}