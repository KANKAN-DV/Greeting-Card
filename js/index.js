let str="......用真诚经营爱情，<用执着追求事业，<用善良对待朋友，<用平淡对待磨难，<用虔诚祈盼幸福，<用感恩回报人间，<心随爱走，爱随心愿，<祝福你新年快乐！！！";
	 let strp="";
	 let i=0;
	 /**
	  * 打字效果
	  */
	 function print1()
	 {
	     if(str[i]!='<')
	     {
	         strp+=str[i];
	         document.getElementById("typewrite").innerHTML=strp+'|';
	     }
	     else
	     {
	         document.getElementById("typewrite").innerHTML=strp+"<br><br>"+'|';
	         strp+="<br><br>";
	     }
	     i++;
	 }
	
	 /**
	  * print2作为最后的光标闪动的效果
	  */
	 function print2()
	 {
	     setTimeout(()=>{document.getElementById("typewrite").innerHTML=strp+' ';},100);
	     setTimeout(()=>{document.getElementById("typewrite").innerHTML=strp+'|';},630);
	 }
	
	 /**
	  *setInterval函数控制打字速度
	  */
	 let printid=setInterval(() => {
	     print1();
	     if(i==str.length)
	     clearInterval(printid);
	 },90);  
	 
	 /**
	  * 光标闪动速度，默认模拟电脑正常光标闪动，0.53秒闪一次
	  */
	 setTimeout(() => {
	     id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
	 },(str.length-1)*90);
	 