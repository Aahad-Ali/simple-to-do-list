let mainDiv = document.getElementById('main');

let form = document.createElement('form');
mainDiv.appendChild(form);

let span = document.createElement('span');
// span.innerHTML = "PLZ fill data";
span.setAttribute("id", "error")
form.appendChild(span);
let br = document.createElement('br');
form.appendChild(br);

let input = document.createElement('input');
input.setAttribute("id", "inputData");
input.setAttribute("type", "text");
input.setAttribute("name", "text");
input.setAttribute("placeholder", "Enter your To Do list items");

form.appendChild(input);

let btn = document.createElement('input');
let btnText = document.createTextNode('ADD');

btn.setAttribute("id", "button");
btn.setAttribute("type", "button");
btn.setAttribute("value", "ADD");
btn.setAttribute("onClick", "addData()");

form.appendChild(btn);
btn.appendChild(btnText);

let unOrderList = document.createElement('ul');
unOrderList.setAttribute("id", "dataList")
form.appendChild(unOrderList);

function addData() {

    document.getElementById('error').innerHTML = "";

    let getData = document.getElementById('inputData').value;

    if (getData === "") {
        document.getElementById('error').innerHTML = " Enter some info";

    }
    else {
        let ul = document.getElementById('dataList');
        let li = document.createElement('li');
        li.setAttribute("id", "listItems")
        li.style.backgroundColor = "transparent";
        li.textContent = getData;


        let a = document.createElement('a');
        a.textContent = "Delete";
        a.href = "javascript:void(0)";
        // form.appendChild(a)
        li.appendChild(a)

        
        // ul.appendChild(li);

        let position = ul.firstElementChild;

        if (position == null) {
            ul.appendChild(li);

        }
        else {
            ul.insertBefore(li, position);
        }
    }
    document.getElementById('inputData').value = "";

}
let btn1 = document.querySelector('ul');
btn1.addEventListener("click", function (e) {

    let ul = document.getElementById('dataList');
    let li = e.target.parentNode;
    ul.removeChild(li);

});

