async function bubble() {
  const e = document.querySelectorAll(".bar");
  for (let i = 0; i < e.length - 1; i++) {
    for (let j = 0; j < e.length - i - 1; j++) {
      e[j].style.background = "var(--bars-sorting-blue-color)";
      e[j + 1].style.background = " var(--bars-sorting-red-color)";

      if (parseInt(e[j].style.height) > parseInt(e[j + 1].style.height)) {
        await waitForMe(delay);
        swap(e[j], e[j + 1]);
      }
      e[j].style.background = "var(--bars-color)";
      e[j + 1].style.background = "var(--bars-color)";
    }
    e[e.length - 1 - i].style.background = "var(--bars-sorted-color)";
  }
  e[0].style.background = "var(--bars-sorted-color)";
}

const bubBtn = document.querySelector(".bubbleSort");

bubBtn.addEventListener("click", async function () {
  disableSortBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  diablePerformanceBtn()
  const startTime = performance.now();
  await bubble();
  const endTime = performance.now();
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds.`);
  var text = document.getElementById("content");
  const p = document.querySelectorAll(".bar");
  var time = (endTime - startTime)/1000;
  text.textContent = "Array Consist of "+ p.length+" elements and got sorted in "+time.toPrecision(2)+" seconds with a Speed Delay of " + delay+" miliseconds";
  enableSortBtn();
  enablePerformanceBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
