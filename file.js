let bgElement=document.getElementById("cardContainerId");
let celsiusIdElement=document.getElementById("celsiusId");
let fahrenheitIdElement=document.getElementById("fahrenheitId");
let kelvinIdElement=document.getElementById("kelvinId");


let errorIdElement=document.getElementById("errorId");

let buttionIdElement=document.getElementById("buttionId");


function calculationFunction(){
    
    let celsius=celsiusIdElement.value;
    let fahrenheitValue= (parseInt(celsius)*(9/5)+32);
    let kelvinValue = parseInt(celsius) + 273.15;
    kelvinIdElement.value=kelvinValue;
    fahrenheitIdElement.value=fahrenheitValue;
    celsiusIdElement    .style.color="black";
    celsiusIdElement.style.fontSize="20px";
    celsiusIdElement.style.fontWeight="bold";
    kelvinIdElement.style.color="green";
    kelvinIdElement.style.fontWeight="bold";
    kelvinIdElement.style.fontSize="20px";
    fahrenheitIdElement.style.color="green";
    fahrenheitIdElement.style.fontWeight="bold";
    fahrenheitIdElement.style.fontSize="20px";
    

}

function fromFahrenheit(){
    let fahrenheit=parseInt(fahrenheitIdElement.value);
    let celsius=(fahrenheit-32)*(5/9);
    let kelvin=(fahrenheit+459.67)*(5/9);
    kelvinIdElement.value=kelvin;
    celsiusIdElement.value=celsius;
    celsiusIdElement.style.fontSize="20px";
    celsiusIdElement.style.fontWeight="bold";
    kelvinIdElement.style.color="green";
    kelvinIdElement.style.fontWeight="bold";
    kelvinIdElement.style.fontSize="20px";
    celsiusIdElement.style.color="green";
    fahrenheitIdElement.style.color="black";
    fahrenheitIdElement.style.fontWeight="bold";
    fahrenheitIdElement.style.fontSize="20px";

}
function fromkelvin(){
    let kelvin=parseInt(kelvinIdElement.value);
    let fahrenheit=(kelvin*(9/5))-459.67;
    let celsius=kelvin-273.15;
    fahrenheitIdElement.value=fahrenheit;
    celsiusIdElement.value=celsius;
    celsiusIdElement.style.fontSize="20px";
    celsiusIdElement.style.fontWeight="bold";
    kelvinIdElement.style.color="black";
    kelvinIdElement.style.fontWeight="bold";
    kelvinIdElement.style.fontSize="20px";
    celsiusIdElement.style.color="green";
    fahrenheitIdElement.style.color="green";
    fahrenheitIdElement.style.fontWeight="bold";
    fahrenheitIdElement.style.fontSize="20px";
}

celsiusIdElement.addEventListener("keyup",calculationFunction);
fahrenheitIdElement.addEventListener("keyup",fromFahrenheit);
kelvinIdElement.addEventListener("keyup",fromkelvin);