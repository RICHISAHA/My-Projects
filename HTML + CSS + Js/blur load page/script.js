const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    // console.log(load);
    loadText.innerText = `${load}%`
    
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}