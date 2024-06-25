//Write your pseduo code first! 

// only on click
document.querySelector("#convert").addEventListener('click', run)

function run() {
    // get value out of input
    console.log('Hello World!')
    let temp = document.querySelector('#temp').value
    // convert to fahrenheit
    temp = temp * 9/5 + 32
    // display converted temp
    document.querySelector('#placeToConvert').innerText = temp
}
