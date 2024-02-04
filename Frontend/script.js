function keyDown(event){
    if(event.code === "Enter")
        console.log("Sang")
}

let textarea = document.getElementById('-INP-');
textarea.addEventListener('keydown', keyDown);