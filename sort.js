function swap(i, j) {
  let temp = i.style.height;
  i.style.height = j.style.height;
  j.style.height = temp;
}



function enableSortBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
}

function disableSortBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
}

function disableSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider() {
  document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}
function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

function diablePerformanceBtn() {
  document.querySelector(".performance").disabled = true;
}
function enablePerformanceBtn() {
  document.querySelector(".performance").disabled = false;
}

function clear(){
  var text = document.getElementById("content");
  text.textContent = "..."
}

function waitForMe(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}

let arraySize = document.querySelector("#arr_sz");
// console.log(arraySize.value);
arraySize.addEventListener("input", () => {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener("input", () => {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

function createNewArray(Total_bars = 60) {
  deleteOldBars();

  array = [];
  for (let i = 0; i < Total_bars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);

  const bars = document.querySelector("#bars");

  for (let i = 0; i < Total_bars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add("barNo${i}");
    bars.appendChild(bar);
  }
}

function deleteOldBars() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  console.log("From newarray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSortBtn();
  enableSizeSlider();
  clear();
  createNewArray(arraySize.value);
});

let title = document.querySelector('#title')

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent.includes('Sort')) {
      title.textContent = button.textContent
    }
  })
}) 