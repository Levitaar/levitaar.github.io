function madlib() {

    adj1 = document.getElementById("adj1");
    noun1 = document.getElementById("noun1");

    var para = document.createElement("P");
    var t = document.createTextNode("this is a " + adj1.value + " " + noun1.value ", if feels like"
    );
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}