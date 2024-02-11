//TODO: RandomMaths para crear emojis. El punto y coma nos debería dar bastante igual
const ORIGINAL_EMOJI_LIST: string[] = ["&#128516;","&#128525;","&#128151;","&#128515;","&#128507;"]

let emojiList: string[] = [...ORIGINAL_EMOJI_LIST]
let selectedIndex;

const askForIndex = () => Number(prompt("Please introduce the element index: "))

// TODO: 
const getEmoji = () => {
    const emojiSelect = document.getElementById('emojis') as HTMLSelectElement;
    const selectedEmoji = emojiSelect.options
    //[emojis.selectedIndex]
    //const emojiText = selectedEmoji.text;
    //return emojiText
}

function displayNotAvailable() {
    alert("This button isn't working currently, please bear with us while we finish building it :)")
}

function updateArray() {
    document.getElementById("new-list").innerHTML = emojiList.toString();
}


//TODO: SWITCH o OPP. Fan o mesmo... 1. Acción 2. Update

function appendElement() {
    emojiList.push(getEmoji());
    updateArray()
}

function insertElement() {
    emojiList.splice(askForIndex(), 0, getEmoji());
    updateArray()
}

function popElement() {
    emojiList.splice(askForIndex(), 1);
    updateArray()
}

function reverseList() {
    emojiList.reverse();
    updateArray()
}

function sortList() {
    emojiList.sort();
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


// ¿Que carallo estou intentando facer aquí?
function retrieveList() {
    let buttons = [...document.querySelectorAll(".list-method-button")];
    buttons.forEach(function(x){x.style.display = "inline";});
    updateArray();
    let retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
    retrieveButtons.forEach(function(x){x.style.display = "none";});
    document.getElementById("new-list").style.letterSpacing = "0.2em";
}

function retrieveOriginalList() {
    emojiList = [...ORIGINAL_EMOJI_LIST];
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