var cel = document.getElementById("cel");

var fah = document.getElementById("fah");

var shVal = document.querySelector("#showVal");

cel.addEventListener("input", function() {
    //Get Value of Celsius in c
    let c = this.value;

    let f = (c * 9 / 5) + 32;

    if(!Number.isInteger(f)){
        f = f.toFixed(1);
    }

    fah.value = f;
});

cel.addEventListener("input", function() {
    //Get Value of Celsius in c
    let cc = this.value;

    if(cc<=19){
        shVal.style.color = "blue";
        shVal.innerHTML = "Review: Temperature is to Cold!";
    }
    else if(cc == 20){
        shVal.style.color = "Green";
        shVal.innerHTML = "Review: Temperature is Cold!";
    }
    else if(cc>20 && cc<=40){
        shVal.style.color = "purple";
        shVal.innerHTML = "Review: Temperature is Normal!";
    }
    else if(cc>40 && cc<=60){
        shVal.style.color = "yellow";
        shVal.innerHTML = "Review: Temperature is Hot!";
    }
    else if(cc>60 && cc<=100){
        shVal.style.color = "orange";
        shVal.innerHTML = "Review: Temperature is to Hot!";
    }
    else{
        shVal.innerHTML = " ";
    }

    fah.value = f;
});

fah.addEventListener("input", function () {
    //Get Value of Fahrenheit in f
    let f = this.value;

    let c = (f - 32) * 5 / 9;

    if(!Number.isInteger(c)){
        c = c.toFixed(1);
    }

    cel.value = c;
});