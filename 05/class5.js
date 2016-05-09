

function wordSearch() {

  var TrumpRegex = /[trump]/i;

  var str = document.getElementById("textinput");

  var searchd = TrumpRegex.test(str.value);

  document.getElementById("output").innerHTML = searchd;
}