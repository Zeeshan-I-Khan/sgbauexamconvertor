var numerator;
var denominator;
numerator=document.getElementById("scored");
denominator=document.getElementById("outoff");

var button;
button=document.getElementById("convert");

var rbutton;
rbutton=document.getElementById("reset");

function convert()
{
    var a=parseInt(numerator.value);
    var b=parseInt(denominator.value);
    var finalmarks;
    finalmarks=(a*80)/b;
    console.log(a);
    console.log(b);
    console.log(finalmarks);
    document.getElementById("actual").value=finalmarks;
}

function reset()
{
    document.getElementById("scored").value="";
    document.getElementById("outoff").value="";
    document.getElementById("actual").value="";
}

button.addEventListener("click", convert);
rbutton.addEventListener("click", reset);


