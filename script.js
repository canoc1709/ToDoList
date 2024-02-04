function postData(event){
    var ul = document.getElementById("ul");
    if(event.code == "Enter")
        var li = document.createElement("li")
        li.textContent = `${input.value}`
        ul.appendChild(li);
}
let input = document.getElementById("INP");
input.addEventListener("keygress", Press);