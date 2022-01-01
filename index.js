const outer = document.querySelector(".outer");
const listOfBoxes = document.querySelectorAll(".box");

function clickHandler(event) {
  for (let i = 0; i < listOfBoxes.length; i++) {
    const box = listOfBoxes[i];
    box.classList.remove("bgColor");
  }

  if (event.target.className === "box") {
    const box = event.target;

    const boxes = box.parentElement.children;
    let index;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] === box) {
        index = i;
        break;
      }
    }

    let row = Math.floor(index / 4);
    let column = index % 4;

    downRight(row, column, boxes);
    downLeft(row, column, boxes);
    upRight(row, column, boxes);
    upLeft(row, column, boxes);
  }
}

function downRight(row, column, boxes) {
  row++;
  column++;
  while (row < 4 && column < 4) {
    boxes[4 * row + column].classList.add("bgColor");
    row++;
    column++;
  }
}

function downLeft(row, column, boxes) {
  row++;
  column--;
  while (row < 4 && column >= 0) {
    boxes[4 * row + column].classList.add("bgColor");
    row++;
    column--;
  }
}

function upRight(row, column, boxes) {
  row--;
  column++;
  while (row >= 0 && column < 4) {
    boxes[4 * row + column].classList.add("bgColor");
    row--;
    column++;
  }
}

function upLeft(row, column, boxes) {
  row--;
  column--;
  while (row >= 0 && column >= 0) {
    boxes[4 * row + column].classList.add("bgColor");
    row--;
    column--;
  }
}

outer.addEventListener("click", clickHandler);
