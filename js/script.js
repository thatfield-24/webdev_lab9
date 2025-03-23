function init(){
//add your javascript between these two lines of code
 var button = document.getElementById('entrybutton');
 
 function textAlert(){
	 var userinput = document.getElementById('entryinput');
	 document.getElementById('textoutput').innerHTML = userinput.value;
	 alert("Tristan Hatfield: " + userinput.value);
 }
 
 button.addEventListener('click', textAlert)
}

window.addEventListener('load', init);

