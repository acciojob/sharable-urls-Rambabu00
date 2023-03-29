// your code here
var inputName=document.querySelector("#name").value;
var inputYear=document.querySelector("#year").value;
function ram() {
	if(inputName=="" && inputYear==""){
	document.querySelector("#url").innerHTML="https://localhost:8080/?";
		
	}
	else if(inputName=="" && inputYear!=""){
document.querySelector("#url").textContent="https://localhost:8080/?year=";
	}
	else if(inputName!="" && inputYear==""){
document.querySelector("#url").innerHTML="https://localhost:8080/?"+inputName;
	}
	else if(inputName!="" && inputYear!=""){
document.querySelector("#url").innerHTML="https://localhost:8080/?"+"name="+inputName+"&year="+inputYear;
	}
}