const DEFAULT_EMOJI_LIST: string[] = [
  "&#128516;",
  "&#128525;",
  "&#128151;",
  "&#128515;",
  "&#128507;",
];

let emojiSelect = document.getElementById("emojis") as HTMLSelectElement;

let emojiList: string[] = [...DEFAULT_EMOJI_LIST];

let selectedEmoji: string = emojiSelect.options[emojiSelect.selectedIndex].text;

// Get when a new emoji is selected
window.addEventListener("emojiChange", () => {
  console.log("change!");
  selectedEmoji = emojiSelect.options[emojiSelect.selectedIndex].text;
});

function askForIndex() {
  Number(prompt("Please introduce the element index: "));
}

function displayNotAvailable(): void {
  alert(
    "This button isn't working currently, please bear with us while we finish building it :)"
  );
}

function updateArray(): void {
  document.getElementById("new-list").innerHTML = emojiList.toString();
}

//TODO: enum instead of magic strings
function listMethod(method: string): void {
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
  let buttons = [...document.querySelectorAll(".list-method-button")];
  buttons.forEach(function (x) {
    x.style.display = "none";
  });
  let retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
  retrieveButtons.forEach(function (x) {
    x.style.display = "inline";
  });
  document.getElementById("new-list").style.letterSpacing = "normal";
}

// ¿Que carallo estou intentando facer aquí?
function retrieveList() {
  let buttons = [
    ...document.querySelectorAll(".list-method-button"),
  ] as HTMLElement[];
  buttons.forEach((button) => (button.style.display = "inline"));

  updateArray();
  let retrieveButtons = [...document.querySelectorAll(".retrieve-list")];
  retrieveButtons.forEach(function (x) {
    x.style.display = "none";
  });
  document.getElementById("new-list").style.letterSpacing = "0.2em";
}

function retrieveOriginalList() {
  emojiList = [...DEFAULT_EMOJI_LIST];
  retrieveList();
}

function showElements() {
  detailsList = document.createElement("ul");
  detailsList.classList.add("array-details-list-elements");
  detailsList.style.listStyleType = "none";
  document.body.appendChild(detailsList);

  emojiList.forEach(function (x) {
    li = document.createElement("li");
    detailsList.appendChild(li).innerHTML =
      "Index: <b>" + array.indexOf(x) + "</b> ---> " + x;
  });
  let totalEmojis = array.length;
  li = document.createElement("li");
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
