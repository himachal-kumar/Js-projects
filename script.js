// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let RandomColor = getRandomColor();
//     h3.innerText =RandomColor;

//     let div =document.querySelector(".main")
//      div.style.backgroundColor =RandomColor;
//     console.log("color Update");
// });

// function getRandomColor()
// {
//     let red= Math.floor(Math.random() *255);
//     let green= Math.floor(Math.random() *255);
//     let blue= Math.floor(Math.random() *255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color
// }


let btn = document.querySelector("button");
    btn.addEventListener("click", function (){
    console.dir(this.innertext);
    this.style.backgroundColor="blue"
});

