
var input = document.getElementById("INP");
var ul = document.getElementById("ul");
function Input(event) {
    if(event.code === "Enter")
    {
        inputValue = document.getElementById("INP").value;
        sendData(inputValue);
        var newList = document.createElement("li");
        newList.textContent = inputValue;
        ul.appendChild(newList);
    }

}
input.addEventListener("keypress", Input);

async function sendData(taskValue) {
    const response = await fetch('http://127.0.0.1:5000/postData',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({tasks: taskValue})
    })
    // const result = await response.json();
    // console.log("successful:", result);
}
async function getData(){
    const response = await fetch('http://127.0.0.1:5000/getData');
    const data = await response.json();
    for(var i = 0; i < data.length; i++)
    {
        var obj = data[i];
        const li = document.createElement("li");
        li.textContent = data[i].tasks;
        ul.appendChild(li);
    }
}

window.addEventListener("onload", getData())