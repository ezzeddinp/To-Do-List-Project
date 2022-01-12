var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); //create an element "li"
    li.appendChild(document.createTextNode(input.value)); // makes text from input field the li text
    ul.appendChild(li); // adds li to ul
    input.value = ""; // Reset text input field


    // START STRIKETHROUGH
    function crossOut() {
        li.classList.toggle('done');
    }

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH

    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON


    // ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add('delete')
    }
    // END ADD CLASS DELETE
}

function addListAfterClick() {
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a list
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress)

