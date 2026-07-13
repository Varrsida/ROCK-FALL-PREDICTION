function predict(){

    let rainfall = Number(document.getElementById("rainfall").value);
    let slope = Number(document.getElementById("slope").value);
    let vibration = Number(document.getElementById("vibration").value);
    let moisture = Number(document.getElementById("moisture").value);

    let score = rainfall + slope + vibration + moisture;

    if(score >= 150){

        document.getElementById("result").innerHTML =
        "🔴 HIGH RISK OF ROCKFALL";

    }

    else if(score >= 80){

        document.getElementById("result").innerHTML =
        "🟠 MEDIUM RISK OF ROCKFALL";

    }

    else{

        document.getElementById("result").innerHTML =
        "🟢 LOW RISK OF ROCKFALL";

    }

}