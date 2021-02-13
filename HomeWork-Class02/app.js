// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs

let button = document.getElementById("btn");

button.addEventListener("click", function(){
    
    let colorTitle = document.getElementById("color").value;
    let textTitle = document.getElementById("textForHeader").value;
    let fontSizeTitle = document.getElementById("fontSize").value;
    let divTitle = document.getElementById("divTitle");

    divTitle.innerHTML = `<h1> ${textTitle} </h1>`
    divTitle.style.color = colorTitle;
    divTitle.style.fontSize = fontSizeTitle; 
});


