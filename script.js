array = [1,2,3,4,5]

function updateArray() {
    document.getElementById("new-list").innerHTML = array;
}

function reverseList() {
    array.reverse();
    updateArray()
}

function sortList() {
    array.sort();
    updateArray()
}

function appendElement() {
    array.push(prompt("Please introduce the element you would like to append: "));
    updateArray()
}

function popElement() {
    index = prompt("Please introduce the element index: ")
    array.splice(index, 1);
    updateArray()
}

function insertElement() {
    element = prompt("Please introduce the element you would like to append: ");
    index = prompt("Please introduce the element index: ")
    array.splice(index, 0, element);
    updateArray()
}

function clearList() {
    document.getElementById("new-list").innerHTML = "You have cleared the list. Meaning that the list is emtpy.";
    buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.visibility = "hidden";});
    retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
    retrieveButtons.forEach(function(x){x.style.visibility = "visible";});
}

function retrieveList() {
    buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.visibility = "visible";});
    updateArray();
    retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
    retrieveButtons.forEach(function(x){x.style.visibility = "hidden";});
}

function retrieveOriginalList() {
    array = [1,2,3,4,5];
    retrieveList()
}

// write function to show lenght, items with index

