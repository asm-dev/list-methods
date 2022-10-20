array = [1,2,3,4,5]

function updateArray() {
    document.getElementById("new-list").innerHTML = array;
}

function reverseList() {
    array.reverse();
    updateArray()
}

function appendElement() {
    array.push(prompt("Please introduce the element you would like to append: "));
    updateArray()
}

function popElement() {
    array.push(prompt("Please introduce the element index: "));
    updateArray()
}