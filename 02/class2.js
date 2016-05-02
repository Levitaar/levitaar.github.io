function madlib() {

    adj1 = document.getElementById("adj1");
    noun1 = document.getElementById("noun1");
    noun2 = document.getElementById("noun2");

    var para = document.createElement("P");
    var t = document.createTextNode("this is a " + adj1.value + " " + noun1.value + ", it feels like " + noun2.value);
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}