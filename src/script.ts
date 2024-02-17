import { emojiRandomList } from "./operations/emoji-randomiser/emoji-randomiser";

const DEFAULT_EMOJI_LIST: string[] = [
  "&#128516;",
  "&#128525;",
  "&#128151;",
  "&#128515;",
  "&#128507;",
];

let emojiList: string[] = [...DEFAULT_EMOJI_LIST];

const getDisplayedEmojis = (): HTMLElement | null => {
  return document.getElementById("emojisInDisplay");
};

const getListMethodbuttons = (): HTMLElement[] | null => {
  return [...document.querySelectorAll(".list-method-button")] as HTMLElement[];
};

const getRetrieveListButtons = (): HTMLElement[] | null => {
  return [...document.querySelectorAll(".retrieve-list")] as HTMLElement[];
};

const getSelectedEmoji = (): string => {
  const select = document.getElementById("emojisSelect") as HTMLSelectElement;
  return select.options[select.options.selectedIndex].text;
};

const askForIndex = (): number => {
  return Number(prompt("Please introduce the element index: "));
};

const onSelectOptionsChange = (): void => {
  console.log("nice pick!");
};

function displayNotAvailable(): void {
  alert(
    "This button isn't working currently, please bear with us while we finish building it :)"
  );
}

function substituteByRandom(): void {
  const displayedEmojis = getDisplayedEmojis();
  const randomEmojis = emojiRandomList(DEFAULT_EMOJI_LIST.length);

  if (displayedEmojis) {
    displayedEmojis.innerHTML = randomEmojis.toString();
  }
}

function updateDisplayedEmojis(): void {
  const displayedEmojis = getDisplayedEmojis();

  if (displayedEmojis) {
    displayedEmojis.innerHTML = emojiList.toString();
  }
}

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
  updateDisplayedEmojis();
}

function clearList(): void {
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
      retrieveListButtons.forEach(
        (button) => (button.style.display = "inline")
      );
    }
  }
}

function retrieveList(): void {
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

function retrieveOriginalList(): void {
  emojiList = [...DEFAULT_EMOJI_LIST];
  retrieveList();
}

function showElements(): void {
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

function removeListDetails(): void {
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
