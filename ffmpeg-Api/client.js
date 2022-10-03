const fileInput = document.querySelector('#file-input');
const submitButton = document.querySelector('#submit');
const thumbnailPreview = document.querySelector('#thumbnail');
const errorDiv = document.querySelector('#error');

function showError(msg){
    errorDiv.innerText = `Error: ${msg}`
}

submitButton.addEventListener('click', ()=>{
    const {files} = fileInput;
})