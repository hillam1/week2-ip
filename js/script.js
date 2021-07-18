

    let sex = (document.getElementById("gender").value);
    let day = parseInt.(document.getElementById("day").value);
    let month = parseInt.(document.getElementById("month").value);
    let year = parseInt.(document.getElementById("year").value);
    let century =parseInt.(document.getElementById("century").value);
}

let dayOfBirth = function(century,year,month,day) {
    return dayOfBirth =  ((( (century/4) -2*century-1) + ((5*year/4) ) + ((26*month+1)/10)) + day ) % 7).toFixed(0);
}

let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "ama"]


    let name = "";
    if (sex = "male")
        for (let dayOfBirth= 0; dayOfBirth < male.length; i++) {
            name += male[i] + "<br>";
        
        document.getElementById("output").innerHTML = "your name is" +nalet dayOfBirth = function(century,year,month,day) {
            return dayOfBirth =  ((( (century/4) -2*century-1)