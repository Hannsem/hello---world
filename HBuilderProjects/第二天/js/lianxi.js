
 /*for(var i=1;i<=9;i++){
 	for(var b=1;b<=9;b++){
 		if(i>=b){document.write(b +'*'+ i +'='+i*b + '<span style="display:inline-block;width:20px;"></span>') }
 	   	
 	}
 	document.write('<br/>')
 }*/

	for (var i=0;i<6;i++){
		for (var c=6;c>i;c--) {
			document.write( '<span style="color:#FFFFFF">*</span>')
		}
	for (var b=1;b<=2*i-1;b++){
	if(i==5){
		document.write('*')
	}else if(b==1 || b==2*i-1)
	{
		document.write('*')
	
	}else{
		document.write('<span style="color:#FFFFFF">*</span>')
	}
	}
		document.write('<br/>')
		
	}
	
document.write('<br/>');document.write('<br/>');

for(var q=0;q<7;q++){
	for(var w=0;w<17;w++)
	if(q==0||w==0||q==6||w==16){
		document.write('*')
	}else{
		document.write('<span style="color:#FFFFFF">*</span>')
	}
	document.write('<br/>')
}

document.write('<br/>');document.write('<br/>');document.write('<br/>');document.write('<br/>');
	for (var i=0;i<6;i++){
		for (var c=6;c>i;c--) {
			document.write( '<span style="color:#FFFFFF">*</span>')
		}
	for (var b=1;b<=2*i-1;b++){
	if(b==1 || b==2*i-1)
	{
		document.write('*')
	
	}else{
		document.write('<span style="color:#FFFFFF">*</span>')
	}
	}
		document.write('<br/>')
		
	}
for(var p=1;p<6;p++){
	for(var u=-1;u<p;u++){
		document.write('<span style="color:#FFFFFF">*</span>')
	}
	for(var t=0;t<7-2*p+2;t++){
		if(t==0|| t==7-2*p+1){
			document.write('*')
		}
		else
		{document.write('<span style="color:#FFFFFF">*</span>')}
	}
	document.write('<br/>')
}


