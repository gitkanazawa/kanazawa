
function Quarter(majang){

	var d = new Date();
	var Ran=Math.floor(112/1000*d.getMilliseconds());
//repeat as Init One
TempArray=majang.slice(Ran,112);
majang=TempArray.concat(majang.slice(0,Ran));
	Quarters=   new Array(4);
	Quarters[0]=new Array(28);
	Quarters[1]=new Array(28);
	Quarters[2]=new Array(28);
	Quarters[3]=new Array(28);
	for(m=0;m<4;m++){//--------四循环开始-------------

TempArray12=majang.slice(m*28  ,m*28+7);
TempArray34=majang.slice(m*28+7,m*28+14);
TempArray4231= new Array(14);
	k=0
	for(i=0;i<7;i++){
	TempArray4231[k]=TempArray34[TempArray34.length-1];
			 TempArray34.pop();
			 k++;
	TempArray4231[k]=TempArray12[TempArray12.length-1];
			 TempArray12.pop();
			 k++;}
TempArray8675= new Array(14);
TempArray56=majang.slice(m*28+14,m*28+21);
TempArray78=majang.slice(m*28+21,m*28+28);
	k=0
	for(i=0;i<7;i++){
	TempArray8675[k]=TempArray78[TempArray78.length-1];
			 TempArray78.pop();
			 k++;
	TempArray8675[k]=TempArray56[TempArray56.length-1];
			 TempArray56.pop();
			 k++;}
TempArray75=TempArray8675.slice(0,6);
TempArray86=TempArray8675.slice(6,14);
TempArray4231=TempArray4231.concat(TempArray86);
Quarters[m]=  TempArray75.concat(TempArray4231);
	}//-----------------四循环结束---------------------
Quarter4=Quarters[0];
Quarter4=Quarter4.concat(Quarters[1]);
Quarter4=Quarter4.concat(Quarters[2]);
Quarter4=Quarter4.concat(Quarters[3]);

return Quarter4;
}
