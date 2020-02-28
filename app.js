const circle = document.getElementById("object");


function getKey(e)
{
    console.log("The key code is: " + e.keyCode);
}

document.onkeyup = getKey;