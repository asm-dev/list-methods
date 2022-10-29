let array = ["&#128516;","&#128525;","&#128151;","&#128515;","&#128507;"]

function getEmoji() {
    emojis = document.getElementById('emojis');
    emojiText = emojis.options[emojis.selectedIndex].text;
    return emojiText
}

function displayNotAvailable() {
    alert("This button isn't working currently, please bear with us while we finish building it :)")
}

function updateArray() {
    document.getElementById("new-list").innerHTML = array;
}

function appendElement() {
    array.push(getEmoji());
    updateArray()
}

function insertElement() {
    let index = prompt("Please introduce the element index: ")
    array.splice(index, 0, getEmoji());
    updateArray()
}

function popElement() {
    index = prompt("Please introduce the element index: ")
    array.splice(index, 1);
    updateArray()
}

function clearList() {
    document.getElementById("new-list").innerHTML = "You have cleared the list. The list is now emtpy.";
    let buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.display = "none";});
    let retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
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
    let buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.display = "inline";});
    updateArray();
    let retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
    retrieveButtons.forEach(function(x){x.style.display = "none";});
    document.getElementById("new-list").style.letterSpacing = "0.2em";
}

function retrieveOriginalList() {
    array = ["&#128516;","&#128525;","&#128151;","&#128515;","&#128507;"];
    retrieveList()
}


function showElements() {
    detailsList = document.createElement("ul");
    detailsList.classList.add("array-details-list-elements")
    detailsList.style.listStyleType = "none";
    document.body.appendChild(detailsList)
    
        array.forEach(function(x){
            li = document.createElement("li");
            detailsList.appendChild(li).innerHTML = "Index: <b>" + array.indexOf(x) + "</b> ---> " + x
        });
        let totalEmojis = array.length;
        li = document.createElement("li");
        detailsList.appendChild(li).innerHTML = "Number of items: " + totalEmojis;
    }

function removeListDetails() {
    document.querySelectorAll(".array-details-list-elements").forEach(function(x){x.remove()})
    document.querySelectorAll(".array-details-list-indexes").forEach(function(x){x.remove()})
}