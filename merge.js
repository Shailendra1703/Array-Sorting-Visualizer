async function merging(e, l, mid, r) {
  const n1 = mid - l + 1;
  const n2 = r - mid;
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitForMe(delay);
    e[i + l].style.background = 'orange';
    left[i] = e[l + i].style.height;
  }

  for (let i = 0; i < n2; i++) {
    await waitForMe(delay);
    e[i + mid + 1].style.background = 'yellow';
    right[i] = e[mid + 1 + i].style.height;
  }

  await waitForMe(delay);
  let i = 0,
    j = 0,
    k = l;

  while (i < n1 && j < n2) {
    await waitForMe(delay);

    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 === e.length) {
        e[k].style.background = 'var(--bars-sorted-color)';
      } else {
        e[k].style.background = 'lightgreen';
      }
      e[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (n1 + n2 === e.length) {
        e[k].style.background = 'var(--bars-sorted-color)';
      } else {
        e[k].style.background = 'lightgreen';
      }
      e[k].style.height = right[j];
      j++;
      k++;
    }
  }

  while (i < n1) {
    if (n1 + n2 === e.length) {
      e[k].style.background = 'var(--bars-sorted-color)';
    } else {
      e[k].style.background = 'lightgreen';
    }
    e[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    if (n1 + n2 === e.length) {
      e[k].style.background = 'var(--bars-sorted-color)';
    } else {
      e[k].style.background = 'lightgreen';
    }
    e[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(e, l, r) {
  if (l < r) {
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(e, l, m);
    await mergeSort(e, m + 1, r);
    await merging(e, l, m, r);
  } else {
    return;
  }
}

const mergeBtn = document.querySelector('.mergeSort');

mergeBtn.addEventListener('click', async function () {
  let e = document.querySelectorAll('.bar');
  let l = 0;
  let r = e.length - 1;

  disableSortBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  diablePerformanceBtn();
  const startTime = performance.now();
  await mergeSort(e, l, r);
  const endTime = performance.now();
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds.`);
  var text = document.getElementById('content');
  const p = document.querySelectorAll('.bar');
  var time = (endTime - startTime) / 1000;
  text.textContent =
    'Array Consist of ' +
    p.length +
    ' elements and got sorted in ' +
    time.toPrecision(2) +
    ' seconds with a Speed Delay of ' +
    delay +
    ' miliseconds.';
  enableSortBtn();
  enablePerformanceBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
