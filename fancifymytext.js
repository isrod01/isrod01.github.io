function makebigger() {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function fancy() {
    document.getElementById("textbox").style.color = 'blue';
    document.getElementById("textbox").style.textDecoration = "underline";
    document.getElementById("textbox").style.fontWeight = "bold";
}

function normal() {
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.fontWeight = "normal";
    document.getElementById("textbox").style.textDecoration = "none";
}

function mooify() {
    var str = document.getElementById("textbox");
    var parts = str.value.split(".");  
    str.value = parts.join("-Moo");
}