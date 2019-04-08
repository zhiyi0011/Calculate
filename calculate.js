window.onload = function () {
    var a1 = document.getElementById("kexue");
    var a2 = document.getElementById("sempleCal");

    var b1 = document.getElementById("btn1");
    var b2 = document.getElementById("btn2");
    b1.onclick = function () {
        a2.style.display = "block";
        a1.style.display = "none";
        b2.style.background = "white";
        b2.style.color = "black";
        b1.style.background = "#181820";
        b1.style.color = "white";
    }
    b2.onclick = function () {
        a2.style.display = "none";
        a1.style.display = "block";
        b1.style.background = "white";
        b1.style.color = "black";
        b2.style.background = "#181820";
        b2.style.color = "white";
    }
}