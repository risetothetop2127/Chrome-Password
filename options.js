// Saves options to chrome.storage

window.onload=function(){ 

if(localStorage.getItem("dynamic")=='0'){
document.getElementById('topnote').innerHTML='default password will be prompted during startup';}
else{
document.getElementById('dp').checked=true;
document.getElementById('topnote').innerHTML='dynamic password is enabled currently. Uncheck if you want to disable it';
}
}

function save_options() {

  var old = document.getElementById('old').value;
  var newPassVal = document.getElementById('new').value;
  document.getElementById('note').style.display='block';
 
   if(old == ""  || newPassVal =="" ){
	 
  document.getElementById('note').style.display='block';
  document.getElementById('note').innerHTML='enter old and new passwords';
  }
  
  
  else if(old==localStorage.getItem("newPass")){
	  
	 
	  
	  localStorage.setItem("newPass", newPassVal);
	  document.getElementById('note').innerHTML='password saved';
	  document.getElementById('old').value='';
	  document.getElementById('new').value='';
	  document.getElementById('save').style.display='none';
	  
	  
  }
  else{
	  
	  document.getElementById('note').innerHTML='incorrect old password';
	  
  }
  

}



function save_options1() {

 // localStorage.setItem("newPass", '6');
  var oldval = document.getElementById('old1').value;
  
 var value1=check(); 
 
 
   if(oldval == ""){
	 
  document.getElementById('note1').style.display='block';
  document.getElementById('note1').innerHTML='enter master password';
 
  }else if(value1==false){
	  
	 document.getElementById('note1').style.display='block';
  document.getElementById('note1').innerHTML='select any one option';
	  
  }
  else if(oldval!=localStorage.getItem("newPass")){
	  
	   document.getElementById('note1').innerHTML='incorrect old password';
  }else if(oldval==localStorage.getItem("newPass")){
	  
	 
	  var newnum; 
	  var d = new Date();
	  var n = d.getMinutes(); var n1 = Math.floor(n/10); var n2=n%10; 
	  
	  
	  
	  if(value1==4){ if(isNaN(document.getElementById('num1').value)){alert("please enter a NUMBER"); return false;};
		  newnum =  Number(document.getElementById('num1').value); 
	  }else if(value1==5){   if(isNaN(document.getElementById('num2').value)){alert("please enter a NUMBER"); return false;};
		  newnum =  Number(document.getElementById('num2').value);   
	  }else if(value1==6){   if(isNaN(document.getElementById('num3').value)){alert("please enter a NUMBER"); return false;};
		  newnum =  Number(document.getElementById('num3').value);     
	  }else if(value1==7){    if(isNaN(document.getElementById('num4').value)){alert("please enter a NUMBER"); return false;};
		  newnum =  Number(document.getElementById('num4').value);  
	  }
	  
	  
	  
	  localStorage.setItem("newPass1", newnum);
	 
	  localStorage.setItem("dynamic", value1);
	  document.getElementById('contents').style.display="none";
	  document.getElementById('topnote').innerHTML='Password saved. dynamic password will be prompted during startup';
	  
  }
   
  
}


function check() {
var r = document.getElementsByName("dyna")
var c = -1

for(var i=0; i < r.length; i++){
   if(r[i].checked) {
      c = i; return r[i].value;
   }
}
if (c == -1) {return false;}
}


function callme(e){
	
	if(e.path[0].id=='dp'){
		
		if(e.path[0].checked){
		 //localStorage.setItem("dynamic", '1');
		 document.getElementById('contents').style.display="block";}
		 else{
		localStorage.setItem("dynamic", '0');	
        document.getElementById('topnote').innerHTML='default password will be prompted during startup';	
		document.getElementById('contents').style.display="none";
		 }
		
	
	
	}else{
	
	
	var s= e.path[0].id.charAt(3);
	
 document.getElementById('num1').disabled=true;	 document.getElementById('num1').value='';
 document.getElementById('num2').disabled=true;	document.getElementById('num2').value='';
 document.getElementById('num3').disabled=true;	document.getElementById('num3').value='';
 document.getElementById('num4').disabled=true;	document.getElementById('num4').value='';
 document.getElementById('num'+s).disabled=false;
  document.getElementById('num'+s).value='0';
}	
}



function callme2(){
	
 document.getElementById('num1').disabled=true;	 document.getElementById('num1').value='';
 document.getElementById('num2').disabled=true;	document.getElementById('num2').value='';
 document.getElementById('num3').disabled=true;	document.getElementById('num3').value='';
 document.getElementById('num4').disabled=true;	document.getElementById('num4').value='';
	
}
  
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('save1').addEventListener('click',
    save_options1);
	
document.getElementById('esh1').addEventListener('click',
    callme);
document.getElementById('esh2').addEventListener('click',
    callme);
document.getElementById('esh3').addEventListener('click',
    callme);
document.getElementById('esh4').addEventListener('click',
    callme);
document.getElementById('dp').addEventListener('click',
    callme);
document.getElementById('esh5').addEventListener('click',
    callme2);
document.getElementById('esh6').addEventListener('click',
    callme2);
document.getElementById('esh7').addEventListener('click',
    callme2);
	
