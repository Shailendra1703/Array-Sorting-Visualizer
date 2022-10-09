async function partion(e,l,r){
    let i = l-1;
    //pivot
    e[r].style.background = 'red';
    for(let j = l ; j<=r-1;j++)
    {
        e[j].style.background = 'yellow';
        await waitForMe(delay);
        if(paused==1){
            await pauser()
          }
        if(parseInt(e[j].style.height) < parseInt(e[r].style.height)){
            i++;
            swap(e[i],e[j]);
            e[i].style.background = 'orange';

            if(i!=j)
            e[j].style.background = 'orange';
            await waitForMe(delay);
        }
        else{
            e[j].style.background ='blue';
        }
    }
    i++;

    await waitForMe(delay);
    swap(e[i],e[r]);
    e[r].style.background = 'blue';
    e[i].style.background = 'green';

    await waitForMe(delay);

    // for(let k = 0 ; k<e.length;k++){
    //     if(e[k].style.background!='green');
    //        e[k].style.background = 'cyan';
    // }

    return i;   //returning pivot position;
         
}

async function quicksort(e,l,r){
    if(l<r){
        let pivot = await partion(e,l,r);
        await quicksort(e,l,pivot-1);
        await quicksort(e,pivot+1,r);  
    }
    else{
        if(l>=0 && r>=0 && l <e.length && r<e.length){
            e[r].style.background = 'green';
            e[l].style.background = 'green';
        }
    }
}

const quick = document.querySelector('.quickSort');
quick.addEventListener("click",async function(){
    let e = document.querySelectorAll(".bar");
    let l = 0;
    let r = e.length-1;
    disableSortBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    diablePerformanceBtn();
    const startTime = performance.now();
    await quicksort(e,l,r);
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

})