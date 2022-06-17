async function selection() {
  const e = document.querySelectorAll(".bar");

  for (let i = 0; i < e.length; i++) {
    let k = i;
    e[i].style.background = "blue";
    for (let j = i + 1; j < e.length; j++) {
      e[j].style.background = "yellow";
      await waitForMe(delay);
      if (parseInt(e[j].style.height) < parseInt(e[k].style.height)) {
        if (k !== i) {
          e[k].style.background = "cyan";
        }
        k = j;
      }
       else {
        e[j].style.background = "cyan";
      }
    }
    await waitForMe(delay);
    swap(e[k], e[i]);
    e[k].style.background = "cyan";
    e[i].style.background = "green";
  }
}

const select = document.querySelector(".selectionSort");
select.addEventListener("click", async function () {
  disableSortBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await selection();
  enableSortBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
