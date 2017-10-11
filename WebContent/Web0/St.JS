function app(){
	var num= document.getElementById("num").value;
	var name= document.getElementById("name").value;
	var age= document.getElementById("age").value;
	
	var table = document.getElementById("kl")
	var row = table.rows.length;
	var i = 1;
	var newTr = tab.insertRow(row);
	var newTd1 = newTr.insertCell();
	newTd1.innerHTML=i;
	var newTd2 = newTr.insertCell();
	newTd1.innerHTML=num;
	var newTd3 = newTr.insertCell();
	newTd1.innerHTML=name;
	var newTd4 = newTr.insertCell();
	newTd1.innerHTML=age;
	var newTd5 = newTr.insertCell();
	 
	var Btt=document.createElement("input");
	Btt.type = "button"
    newTd5.appendChild(Btt);
    	
}