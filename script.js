// This function clear all the values
function clearScreen() {
	document.getElementById("result").value = "";
}

// This function acts like a backspace button
function deleteChar(){
	document.getElementById("result").value = document.getElementById("result").value.substring(0,document.getElementById("result").value.length-1)
}

//This function gives the log base 10 of a number
function logarithm10(){
	document.getElementById("result").value = Math.log10(document.getElementById("result").value);
}

//This function gives the natural logarithm(ln) of a number
function natural_logarithm(){
	document.getElementById("result").value = Math.log(document.getElementById("result").value);
}

// This function display values
function display(value) {
	document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
	var p = document.getElementById("result").value;
	var q = eval(p);
	document.getElementById("result").value = q;
}