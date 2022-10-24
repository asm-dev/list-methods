array = [1,2,3,4,5]

function displayNotAvailable() {
    alert("This button isn't working corrently, please bear with us while we finish building it :)")
}

function updateArray() {
    document.getElementById("new-list").innerHTML = array;
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
    document.getElementById("new-list").innerHTML = "You have cleared the list. The list is now emtpy.";
    buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.display = "none";});
    retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
    retrieveButtons.forEach(function(x){x.style.display = "inline";});
    document.getElementById("new-list").style.letterSpacing = "normal";
}

function reverseList() {
    array.reverse();
    updateArray()
}

function sortList() {
    array.sort();
    updateArray()
}

function retrieveList() {
    buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.display = "inline";});
    updateArray();
    retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
    retrieveButtons.forEach(function(x){x.style.display = "none";});
    document.getElementById("new-list").style.letterSpacing = "0.2em";
}

function retrieveOriginalList() {
    array = [1,2,3,4,5];
    retrieveList()
}

//Show len

function showElements(items) {
    detailsList = document.createElement("ul");
    detailsList.classList.add("array-details-list-elements")
    detailsList.style.listStyleType = "none";
    document.body.appendChild(detailsList)
    if (items == "items") {
        array.forEach(function(x){
            li = document.createElement("li");
            detailsList.appendChild(li).innerHTML = x;
        });
    } else {
        array.forEach(function(x){
            li = document.createElement("li");
            detailsList.appendChild(li).innerHTML = "Index: <b>" + array.indexOf(x) + "</b> ---> " + x
        })
    }
}

function removeListDetails() {
    document.querySelectorAll(".array-details-list-elements").forEach(function(x){x.remove()})
    document.querySelectorAll(".array-details-list-indexes").forEach(function(x){x.remove()})
}