//TODO: let user get more options
const DEFAULT_EMOJI_LIST: string[] = [
  "&#128516;",
  "&#128525;",
  "&#128151;",
  "&#128515;",
  "&#128507;",
];

let emojiList: string[] = [...DEFAULT_EMOJI_LIST];

const getSelectedEmoji = (): string => {
  const select = document.getElementById("emojis") as HTMLSelectElement;
  return select.options[select.options.selectedIndex].text;
};

//TODO: validations
function askForIndex(): number {
  return Number(prompt("Please introduce the element index: "));
}

function displayNotAvailable(): void {
  alert(
    "This button isn't working currently, please bear with us while we finish building it :)"
  );
}

function updateArray(): void {
  const newList = document.getElementById("new-list") as HTMLElement;
  newList.innerHTML = emojiList.toString();
}

//TODO: enum instead of magic strings
function listMethod(method: string): void {
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
