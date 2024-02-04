let input = document.getElementById("-INP-");

function Press(event) {
    var ul = document.getElementById("ul");
    if(event.code == "Enter")
        var li = document.createElement("li")
        li.textContent = `${input.value}`
        ul.appendChild(li);
        
}

input.addEventListener("keypress", Press);