var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var DEFAULT_EMOJI_LIST = [
    "&#128516;",
    "&#128525;",
    "&#128151;",
    "&#128515;",
    "&#128507;",
];
var emojiSelect = document.getElementById("emojis");
var emojiList = __spreadArray([], DEFAULT_EMOJI_LIST, true);
var selectedEmoji = emojiSelect.options[emojiSelect.selectedIndex].text;
function onSelectOptionsChange() {
    var select = document.getElementById("emojis");
    console.log(select === null || select === void 0 ? void 0 : select.options);
}
//TODO: validations
function askForIndex() {
    return Number(prompt("Please introduce the element index: "));
}
function displayNotAvailable() {
    alert("This button isn't working currently, please bear with us while we finish building it :)");
}
function updateArray() {
    document.getElementById("new-list").innerHTML = emojiList.toString();
}
//TODO: enum instead of magic strings
function listMethod(method) {
    if (method === "append") {
        emojiList.push(selectedEmoji);
    }
    if (method === "insert") {
        emojiList.splice(askForIndex(), 0, selectedEmoji);
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
    updateArray();
}
function clearList() {
    document.getElementById("new-list").innerHTML =
        "You have cleared the list. The list is now emtpy.";
    var buttons = __spreadArray([], document.querySelectorAll(".list-method-button"), true);
    buttons.forEach(function (x) {
        x.style.display = "none";
    });
    var retrieveButtons = __spreadArray([], document.querySelectorAll(".retrieve-list"), true);
    retrieveButtons.forEach(function (x) {
        x.style.display = "inline";
    });
    document.getElementById("new-list").style.letterSpacing = "normal";
}
// ¿Que carallo estou intentando facer aquí?
function retrieveList() {
    var buttons = __spreadArray([], document.querySelectorAll(".list-method-button"), true);
    buttons.forEach(function (button) { return (button.style.display = "inline"); });
    updateArray();
    var retrieveButtons = __spreadArray([], document.querySelectorAll(".retrieve-list"), true);
    retrieveButtons.forEach(function (x) {
        x.style.display = "none";
    });
    document.getElementById("new-list").style.letterSpacing = "0.2em";
}
function retrieveOriginalList() {
    emojiList = __spreadArray([], DEFAULT_EMOJI_LIST, true);
    retrieveList();
}
function showElements() {
    var detailsList = document.createElement("ul");
    detailsList.classList.add("array-details-list-elements");
    detailsList.style.listStyleType = "none";
    document.body.appendChild(detailsList);
    emojiList.forEach(function (x) {
        var li = document.createElement("li");
        detailsList.appendChild(li).innerHTML =
            "Index: <b>" + emojiList.indexOf(x) + "</b> ---> " + x;
    });
    var totalEmojis = emojiList.length;
    var li = document.createElement("li");
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
