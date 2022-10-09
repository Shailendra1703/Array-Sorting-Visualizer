async function selection() {
  const e = document.querySelectorAll(".bar");

  for (let i = 0; i < e.length; i++) {
    let k = i;
    e[i].style.background = "--bars-sorting-blue-color";
    for (let j = i + 1; j < e.length; j++) {
      e[j].style.background = "yellow";
      await waitForMe(delay);
      if (parseInt(e[j].style.height) < parseInt(e[k].style.height)) {
        if (k !== i) {
          e[k].style.background = "var(--bars-color)";
        }
        k = j;
      }
       else {
        e[j].style.background = "var(--bars-color)";
      }
    }
    await waitForMe(delay);
    swap(e[k], e[i]);
    e[k].style.background = "var(--bars-color)";
    e[i].style.background = "var(--bars-sorted-color)";
  }
}

const select = document.querySelector(".selectionSort");
select.addEventListener("click", async function () {
  disableSortBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  diablePerformanceBtn()
  const startTime = performance.now();
  await selection();
  const endTime = performance.now();
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds.`);
  var text = document.getElementById("content");
  const p = document.querySelectorAll(".bar");
  var time = (endTime - startTime)/1000;
  text.textContent = "Array Consist of "+ p.length+" elements and got sorted in "+time.toPrecision(2)+" seconds with a Speed Delay of " + delay+" miliseconds.";
  enableSortBtn();
  enablePerformanceBtn()
  enableNewArrayBtn();
  enableSizeSlider();
});
