async function insertion() {
  const e = document.querySelectorAll(".bar");
  e[0].style.background = "green";
  for (let i = 1; i < e.length; i++) {
    if(paused==1){
      await pauser()
    }
    let j = i - 1;
    let x = e[i].style.height;
    e[i].style.background = "blue";
    await waitForMe(delay);

    while (j > -1 && parseInt(e[j].style.height) > parseInt(x)) {
      if(paused==1){
        await pauser()
      }
      e[j].style.background = "blue";
      e[j + 1].style.height = e[j].style.height;
      j--;

      await waitForMe(delay);

      for (let k = i; k >= 0; k--) e[k].style.background = "green";
    }
    e[j + 1].style.height = x;
    e[i].style.background = "green";
  }
}

const ins = document.querySelector(".insertionSort");
ins.addEventListener("click", async function () {
  disableSortBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  diablePerformanceBtn()
  const startTime = performance.now();
  await insertion();
  const endTime = performance.now();
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds.`);
  var text = document.getElementById("content");
  const p = document.querySelectorAll(".bar");
  var time = (endTime - startTime)/1000;
  text.textContent = "Array Consist of "+ p.length+" elements and got sorted in "+time.toPrecision(2)+" seconds with a Speed Delay of " + delay+" miliseconds.";
  enableSortBtn();
  enablePerformanceBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
