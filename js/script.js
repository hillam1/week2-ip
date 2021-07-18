function onSubmit() {
    let sex = document.getElementById("sex").value;
    let DD = parseInt(document.getElementById("day").value);
    let MM = parseInt(document.getElementById("month").value);
    let year = document.getElementById("year").value;
    let YY = parseInt(year.slice(2, 4));
    let CC = parseInt(year.slice(0, 2));

    const male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

    const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]    

    let day = dayIndex(CC, YY, MM, CC);
}
function dayIndex(CC, MM, MM, DD) {
    return ( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7).toFixed(0);
    if sex = "male" && for (let day = 0; day < male.length; day++) {
        text += male[i] + "<br>";
      }
      
    else && for (let day = 0; day < female.length; day++){
        text +=female{i} +
    }