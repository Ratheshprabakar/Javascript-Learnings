function add()
{
	var a=document.getElementById("number1").value;
	var b=document.getElementById("number2").value;
	document.getElementById("result").innerHTML=parseInt(a)+parseInt(b);
}
function subtract()
{
	var a=document.getElementById("number1").value;
	var b=document.getElementById("number2").value;
	document.getElementById("result").innerHTML=parseInt(a)-parseInt(b);
}
function multiply()
{
	var a=document.getElementById("number1").value;
	var b=document.getElementById("number2").value;
	document.getElementById("result").innerHTML=parseInt(a)*parseInt(b);
}
function divide()
{
	var a=document.getElementById("number1").value;
	var b=document.getElementById("number2").value;
	document.getElementById("result").innerHTML=parseInt(a)/parseInt(b);
}
function modulo()
{
	var a=document.getElementById("number1").value;
	var b=document.getElementById("number2").value;
	document.getElementById("result").innerHTML=parseInt(a)%parseInt(b);
}