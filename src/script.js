import { emojiRandomList } from "./operations/emoji-randomiser/emoji-randomiser";
const DEFAULT_EMOJI_LIST = [
    "&#128516;",
    "&#128525;",
    "&#128151;",
    "&#128515;",
    "&#128507;",
];
let emojiList = [...DEFAULT_EMOJI_LIST];
const getDisplayedEmojis = () => {
    return document.getElementById("emojisInDisplay");
};
const getListMethodbuttons = () => {
    const buttons = document.querySelectorAll(".list-method-button");
    return Array.from(buttons);
};
const getRetrieveListButtons = () => {
    const buttons = document.querySelectorAll(".retrieve-list");
    return Array.from(buttons);
};
const getSelectedEmoji = () => {
    const select = document.getElementById("emojisSelect");
    return select.options[select.options.selectedIndex].text;
};
const askForIndex = () => {
    return Number(prompt("Please introduce the element index: "));
};
const onSelectOptionsChange = () => {
    console.log("nice pick!");
};
function displayNotAvailable() {
    alert("This button isn't working currently, please bear with us while we finish building it :)");
}
function substituteByRandom() {
    console.log("hola", getDisplayedEmojis());
    const displayedEmojis = getDisplayedEmojis();
    const randomEmojis = emojiRandomList(DEFAULT_EMOJI_LIST.length);
    if (displayedEmojis) {
        displayedEmojis.innerHTML = randomEmojis.toString();
    }
}
function updateDisplayedEmojis() {
    const displayedEmojis = getDisplayedEmojis();
    if (displayedEmojis) {
        displayedEmojis.innerHTML = emojiList.toString();
    }
}
function listMethod(method) {
    if (method === "append") {
        emojiList.push(getSelectedEmoji());
    }
    if (method === "insert") {
        emojiList.splice(askForIndex(), 0, getSelectedEmoji());
    }
    if (method === "pop") {
        emojiList.splice(askForIndex(), 1);
    }
    if (method === "reverse") {
        emojiList.reverse();
    }
    if (method === "sort") {
        emojiList.sort();
    }
    updateDisplayedEmojis();
}
function clearList() {
    const displayedEmojis = getDisplayedEmojis();
    const listMethodButtons = getListMethodbuttons();
    const retrieveListButtons = getRetrieveListButtons();
    if (displayedEmojis) {
        displayedEmojis.innerHTML =
            "You have cleared the list. The list is now emtpy.";
        displayedEmojis.style.letterSpacing = "normal";
        if (listMethodButtons) {
            listMethodButtons.forEach((button) => (button.style.display = "none"));
        }
        if (retrieveListButtons) {
            retrieveListButtons.forEach((button) => (button.style.display = "inline"));
        }
    }
}
function retrieveList() {
    const displayedEmojis = getDisplayedEmojis();
    const listMethodButtons = getListMethodbuttons();
    const retrieveListButtons = getRetrieveListButtons();
    if (listMethodButtons) {
        listMethodButtons.forEach((button) => (button.style.display = "inline"));
    }
    updateDisplayedEmojis();
    if (retrieveListButtons) {
        retrieveListButtons.forEach((button) => (button.style.display = "none"));
    }
    if (displayedEmojis) {
        displayedEmojis.style.letterSpacing = "0.2em";
    }
}
function retrieveOriginalList() {
    emojiList = [...DEFAULT_EMOJI_LIST];
    retrieveList();
}
function showElements() {
    let detailsList = document.createElement("ul");
    detailsList.classList.add("array-details-list-elements");
    detailsList.style.listStyleType = "none";
    document.body.appendChild(detailsList);
    emojiList.forEach(function (x) {
        let li = document.createElement("li");
        detailsList.appendChild(li).innerHTML =
            "Index: <b>" + emojiList.indexOf(x) + "</b> ---> " + x;
    });
    let totalEmojis = emojiList.length;
    let li = document.createElement("li");
    detailsList.appendChild(li).innerHTML = "Number of items: " + totalEmojis;
}
function removeListDetails() {
    document
        .querySelectorAll(".array-details-list-elements")
        .forEach(function (x) {
        x.remove();
    });
    document
        .querySelectorAll(".array-details-list-indexes")
        .forEach(function (x) {
        x.remove();
    });
}
