var ul = document.getElementById("ul");
var input = document.getElementById("INP");
function Input(event) {
    if(event.code === "Enter")
    {
        inputValue = document.getElementById("INP").value;
        sendData();
        var newList = document.createElement("li");
        newList.textContent = inputValue;
        ul.appendChild(newList);
    }

}
input.addEventListener("keypress", Input);

function sendData() {
    let inputText = document.getElementById("INP").value;
    const response = fetch('/postData',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({data: inputText})
    })
    console.log(response)
    response.body = inputText
    return response.body
}
