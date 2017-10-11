document.write("<table>")
for(var a = 1;a<=9;a++){
	document.write("<tr>")
	for(var b = 1;b<=a;b++){
		document.write("<td>"+a+"x"+b+"="+a*b+"</td>")
	}
		document.write("</tr>")
	}
document.write("</table>")