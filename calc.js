function FloatAdd(arg1,arg2){var r1,r2,m;try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
m=Math.pow(10,Math.max(r1,r2))
return(arg1*m+arg2*m)/m   
}
function FloatSub(arg1,arg2){var r1,r2,m,n;try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
m=Math.pow(10,Math.max(r1,r2));n=(r1>=r2)?r1:r2;return((arg1*m-arg2*m)/m).toFixed(n);   
}
function FloatMul(arg1,arg2)
{var m=0,s1=arg1.toString(),s2=arg2.toString();try{m+=s1.split(".")[1].length}catch(e){}
try{m+=s2.split(".")[1].length}catch(e){}
return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)    
}
function FloatDiv(arg1,arg2){var t1=0,t2=0,r1,r2;try{t1=arg1.toString().split(".")[1].length}catch(e){}
try{t2=arg2.toString().split(".")[1].length}catch(e){}
with(Math){r1=Number(arg1.toString().replace(".",""))
r2=Number(arg2.toString().replace(".",""))
return(r1/r2)*pow(10,t2-t1);}}
var g_type=0;var endNumber=true;var mem=0,carry=10,layer=0;var hexnum="0123456789abcdef";var angle="d",stack="",level="0";var $c_get=function(tagId){return document.getElementById(tagId);}
var lastOperator="";var isMaxLen=false;function inputkey(key,ent){if(isMaxLen==false){if(lastOperator=="="){$c_get("completeEprsPanel").innerHTML=key;}else{if(lastOperator=="m"){$c_get("completeEprsPanel").innerHTML="";}
$c_get("completeEprsPanel").innerHTML+=key;}
var index=key.charCodeAt(0);if((carry==2&&(index==48||index==49))||(carry==8&&index>=48&&index<=55)||(carry==10&&(index>=48&&index<=57||index==46))||(carry==16&&((index>=48&&index<=57)||(index>=97&&index<=102))))
if(endNumber){endNumber=false;if(index==46){if($c_get('gaoji').value.indexOf(".")!=-1){}else{$c_get('gaoji').value+=key;}}else{$c_get('gaoji').value=key;}}
else if($c_get('gaoji').value==null||$c_get('gaoji').value=="0")
if(index==46){if($c_get('gaoji').value.indexOf(".")!=-1){}else{$c_get('gaoji').value+=key;}}else{$c_get('gaoji').value=key;}
else{if(index==46){if($c_get('gaoji').value.indexOf(".")!=-1){}else{$c_get('gaoji').value+=key;}}else{$c_get('gaoji').value+=key;}}
lastOperator="";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}
if($c_get('gaoji').value.length>16){isMaxLen=true;}}
else{alert("只能输入不大于17位的字符");}}
function changeSign(ent){if($c_get('gaoji').value!="0")
if($c_get('gaoji').value.substr(0,1)=="-")
$c_get('gaoji').value=$c_get('gaoji').value.substr(1);else
$c_get('gaoji').value="-"+ $c_get('gaoji').value;try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function inputfunction(fun,shiftfun,ent){endNumber=true;if($c_get('upperFile').checked)
$c_get('gaoji').value=decto(funcalc(shiftfun,(todec($c_get('gaoji').value,carry))),carry).toFixed(12);else
$c_get('gaoji').value=decto(funcalc(fun,(todec($c_get('gaoji').value,carry))),carry).toFixed(12);$c_get('upperFile').checked=false
$c_get('hyperbolic').checked=false
inputshift();try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function inputtrig(trig,arctrig,hyp,archyp,ent){if($c_get('hyperbolic').checked)
inputfunction(hyp,archyp);else
inputfunction(trig,arctrig);try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function operation(join,newlevel,ent){endNumber=true
var temp=stack.substr(stack.lastIndexOf("(")+ 1)+ $c_get('gaoji').value;while(newlevel!=0&&(newlevel<=(level.charAt(level.length- 1)))){temp=parse(temp);level=level.slice(0,-1);}
if(temp.match(/^(.*\d[\+\-\*\/\%\^\&\|x])?([+-]?[0-9a-f\.]+)$/));$c_get('gaoji').value=RegExp.$2;stack=stack.substr(0,stack.lastIndexOf("(")+ 1)+ temp+ join;$c_get('operator').value=" "+ join+" ";level=level+ newlevel;$c_get("completeEprsPanel").innerHTML+=$c_get('operator').value;lastOperator=join;try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}
isMaxLen=false;}
function addbracket(obj,ent){endNumber=true;document.calc.display.value=0;stack=stack+"(";document.calc.operator.value="   ";level=level+ 0
layer+=1
document.calc.bracket.value="(="+ layer
if(lastOperator=="="){$c_get("completeEprsPanel").innerHTML=obj.value;}else{if(lastOperator=="m"){$c_get("completeEprsPanel").innerHTML="";}
$c_get("completeEprsPanel").innerHTML+=obj.value;}
lastOperator=obj.value;try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function disbracket(obj,ent){endNumber=true;var temp=stack.substr(stack.lastIndexOf("(")+ 1)+ document.calc.display.value;while((level.charAt(level.length- 1))>0)
{temp=parse(temp);level=level.slice(0,-1);}
document.calc.display.value=temp;stack=stack.substr(0,stack.lastIndexOf("("));document.calc.operator.value="   ";level=level.slice(0,-1);layer-=1;if(layer>0)
document.calc.bracket.value="(="+ layer;else
document.calc.bracket.value="";if(lastOperator=="="){$c_get("completeEprsPanel").innerHTML=obj.value;}else{if(lastOperator=="m"){$c_get("completeEprsPanel").innerHTML="";}
$c_get("completeEprsPanel").innerHTML+=obj.value;}
lastOperator=obj.value;try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function result(ent){endNumber=true;while(layer>0)
disbracket();var temp=stack+ $c_get('gaoji').value;while((level.charAt(level.length- 1))>0){temp=parse(temp);level=level.slice(0,-1);}
c_get('gaoji').value=temp;c_get('bracket').value="";c_get('operator').value="";stack="";level="0";lastOperator="=";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}
isMaxLen=false;}
function backspace(ent){try{document.getElementById("completeEprsPanel").innerHTML=document.getElementById("completeEprsPanel").innerHTML.substring(0,document.getElementById("completeEprsPanel").innerHTML.length-1);}catch(e){}
if(!endNumber){if(c_get('gaoji').value.length>1){c_get('gaoji').value=c_get('gaoji').value.substring(0,c_get('gaoji').value.length- 1);}else{c_get('gaoji').value=0;}}
try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}
if(c_get('gaoji').value.length<=16){isMaxLen=false;}}
function clearall(ent){c_get('gaoji').value=0;endNumber=true;stack="";level="0";layer="";c_get('operator').value="";c_get('bracket').value="";document.getElementById("completeEprsPanel").innerHTML="";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}
isMaxLen=false;}
function inputChangCarry(newcarry,ent){endNumber=true;c_get('gaoji').value=(decto(todec(c_get('gaoji').value,carry),newcarry));carry=newcarry;c_get('sin').className=(carry!=10)?'cal_btn  cal_btn_dis ':'cal_btn cal_btn_gre';c_get('cos').className=(carry!=10)?'cal_btn cal_btn_dis ':'cal_btn cal_btn_gre';c_get('tan').className=(carry!=10)?'cal_btn cal_btn_dis ':'cal_btn cal_btn_gre';c_get('bt').className=(carry!=10)?'cal_btn cal_btn_dis ':'cal_btn cal_btn_gre';c_get('pi').className=(carry!=10)?'cal_btn cal_btn_dis ':'cal_btn cal_btn_gre';c_get('e').className=(carry!=10)?'cal_btn cal_btn_dis ':'cal_btn cal_btn_gre';c_get('completeDot').className=(carry!=10)?'cal_btn cal_btn_dis ':'cal_btn ';c_get('complete2').className=(carry<=2)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete3').className=(carry<=2)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete4').className=(carry<=2)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete5').className=(carry<=2)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete6').className=(carry<=2)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete7').className=(carry<=2)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete8').className=(carry<=8)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('complete9').className=(carry<=8)?'cal_btn cal_btn_dis':'cal_btn fontArial';c_get('ka').className=(carry<=10)?'cal_btn cal_btn_dis':'cal_btn cal_btn_gre';c_get('kb').className=(carry<=10)?'cal_btn cal_btn_dis':'cal_btn cal_btn_gre';c_get('kc').className=(carry<=10)?'cal_btn cal_btn_dis':'cal_btn cal_btn_gre';c_get('kd').className=(carry<=10)?'cal_btn cal_btn_dis':'cal_btn cal_btn_gre';c_get('ke').className=(carry<=10)?'cal_btn cal_btn_dis':'cal_btn cal_btn_gre';c_get('kf').className=(carry<=10)?'cal_btn cal_btn_dis':'cal_btn cal_btn_gre';try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function inputChangAngle(angletype,ent){endNumber=true
angle=angletype
if(angle=="d")
c_get('gaoji').value=radiansToDegress(c_get('gaoji').value)
else
c_get('gaoji').value=degressToRadians(c_get('gaoji').value)
endNumber=true
try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function inputshift(ent){if(c_get('upperFile').checked){c_get('bt').innerHTML="deg"
c_get('ln').innerHTML="exp"
c_get('log').innerHTML="expd"
if(c_get('hyperbolic').checked){c_get('sin').innerHTML="ahs"
c_get('cos').innerHTML="ahc"
c_get('tan').innerHTML="aht"}
else{c_get('sin').innerHTML="asin"
c_get('cos').innerHTML="acos"
c_get('tan').innerHTML="atan"}
c_get('sqr').innerHTML="x^.5"
c_get('cube').innerHTML="x^.3"
c_get('changeDecimal').innerHTML="小数"}
else{c_get('bt').innerHTML="d.ms"
c_get('ln').innerHTML="ln"
c_get('log').innerHTML="log"
if(c_get('hyperbolic').checked){c_get('sin').innerHTML="hsin"
c_get('cos').innerHTML="hcos"
c_get('tan').innerHTML="htan"}
else{c_get('sin').innerHTML="sin"
c_get('cos').innerHTML="cos"
c_get('tan').innerHTML="tan"}
c_get('sqr').innerHTML="x^2"
c_get('cube').innerHTML="x^3"
c_get('changeDecimal').innerHTML="取整"}
try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function clearmemory(ent){mem=0
c_get('memory').value=" ";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function getmemory(ent){endNumber=true
c_get('gaoji').value=decto(mem,carry)
try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function putmemory(ent){endNumber=true
if(c_get('gaoji').value!=0)
{mem=todec(c_get('gaoji').value,carry)
c_get('memory').value=" M "}
else
c_get('memory').value="   "
lastOperator="m";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function addmemory(ent){endNumber=true
mem=parseFloat(mem)+parseFloat(todec(c_get('gaoji').value,carry))
if(mem==0)
c_get('memory').value="   "
else
c_get('memory').value=" M "
lastOperator="m";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function multimemory(ent){endNumber=true
mem=parseFloat(mem)*parseFloat(todec(c_get('gaoji').value,carry))
if(mem==0)
c_get('memory').value="   "
else
c_get('memory').value=" M "
lastOperator="m";try{var evnt=ent||window.event;var target=evnt.srcElement||evnt.target;target.blur();}catch(e){}}
function todec(num,oldcarry){if(oldcarry==10||num==0)return(num)
var neg=(num.charAt(0)=="-")
if(neg)num=num.substr(1)
var newnum=0
for(var index=1;index<=num.length;index++)
newnum=newnum*oldcarry+hexnum.indexOf(num.charAt(index-1))
if(neg)
newnum=-newnum
return(newnum)}
function decto(num,newcarry){var neg=(num<0)
if(newcarry==10||num==0)return(num)
num=""+Math.abs(num)
var newnum=""
while(num!=0)
{newnum=hexnum.charAt(num%newcarry)+newnum
num=Math.floor(num/newcarry)}
if(neg)
newnum="-"+newnum
return(newnum)}
function parse(string){if(string.match(/^(.*\d[\+\-\*\/\%\^\&\|x\<])?([+-]?[0-9a-f\.]+)([\+\-\*\/\%\^\&\|x\<])([+-]?[0-9a-f\.]+)$/))
return(RegExp.$1+cypher(RegExp.$2,RegExp.$3,RegExp.$4))
else
return(string)}
function cypher(left,join,right){left=todec(left,carry)
right=todec(right,carry)
if(join=="+")
return(decto(parseFloat(left)+parseFloat(right),carry))
if(join=="-")
return(decto(left-right,carry))
if(join=="*")
return(decto(FloatMul(left,right),carry))
if(join=="/"&&right!=0)
return(decto(FloatDiv(left,right),carry))
if(join=="%")
return(decto(left%right,carry))
if(join=="&")
return(decto(left&right,carry))
if(join=="|")
return(decto(left|right,carry))
if(join=="^")
return(decto(Math.pow(left,right),carry))
if(join=="x")
return(decto(left^right,carry))
if(join=="<")
return(decto(left<<right,carry))
alert("除数不能为零")
return(left)}
function funcalc(fun,num){with(Math){if(fun=="pi")
return(PI)
if(fun=="e")
return(E)
if(fun=="abs")
return(abs(num))
if(fun=="ceil")
return(ceil(num))
if(fun=="round")
return(round(num))
if(fun=="floor")
return(floor(num))
if(fun=="deci")
return(num-floor(num))
if(fun=="ln"&&num>0)
return(log(num))
if(fun=="exp")
return(exp(num))
if(fun=="log"&&num>0)
return(log(num)*LOG10E)
if(fun=="expdec")
return(pow(10,num))
if(fun=="cube")
return(num*num*num)
if(fun=="cubt")
return(pow(num,1/3))
if(fun=="sqr")
return(num*num)
if(fun=="sqrt"&&num>=0)
return(sqrt(num))
if(fun=="!")
return(factorial(num))
if(fun=="recip"&&num!=0)
return(1/num)
if(fun=="dms")
return(dms(num))
if(fun=="deg")
return(deg(num))
if(fun=="~")
return(~num)
if(angle=="d"){if(fun=="sin")
return(sin(degressToRadians(num)))
if(fun=="cos")
return(cos(degressToRadians(num)))
if(fun=="tan")
return(tan(degressToRadians(num)))
if(fun=="arcsin"&&abs(num)<=1)
return(radiansToDegress(asin(num)))
if(fun=="arccos"&&abs(num)<=1)
return(radiansToDegress(acos(num)))
if(fun=="arctan")
return(radiansToDegress(atan(num)))}
else{if(fun=="sin")
return(sin(num))
if(fun=="cos")
return(cos(num))
if(fun=="tan")
return(tan(num))
if(fun=="arcsin"&&abs(num)<=1)
return(asin(num))
if(fun=="arccos"&&abs(num)<=1)
return(acos(num))
if(fun=="arctan")
return(atan(num))}
if(fun=="hypsin")
return((exp(num)-exp(0-num))*0.5)
if(fun=="hypcos")
return((exp(num)+exp(-num))*0.5)
if(fun=="hyptan")
return((exp(num)-exp(-num))/(exp(num)+exp(-num)))
if(fun=="ahypsin"|fun=="hypcos"|fun=="hyptan"){alert("对不起,公式还没有查到!")
return(num)}
alert("超出函数定义范围")
return(num)}}
function factorial(n){n=Math.abs(parseInt(n))
var fac=1
for(;n>0;n-=1)
fac*=n
return(fac)}
function dms(n){var neg=(n<0)
with(Math)
{n=abs(n)
var d=floor(n)
var m=floor(60*(n-d))
var s=(n-d)*60-m}
var dms=d+m/100+s*0.006
if(neg)
dms=-dms
return(dms)}
function deg(n){var neg=(n<0)
with(Math)
{n=abs(n)
var d=floor(n)
var m=floor((n-d)*100)
var s=(n-d)*100-m}
var deg=d+m/60+s/36
if(neg)
deg=-deg
return(deg)}
function degressToRadians(degress){return(degress*Math.PI/180)}
function radiansToDegress(radians){return(radians*180/Math.PI)}
var data={left:"",sign:"",right:"",result:""}
var current=false;var m="";var lastIsMemory=false;var isMaxLength=false;var c_get=function(tagId){return document.getElementById(tagId);}
var c_getByName=function(tagParent,tagName,tagType){var eles="";if(!tagParent){eles=document.getElementsByTagName(tagName);}else{eles=c_get(tagParent).getElementsByTagName(tagName);}
if(tagType){var tags=[];for(var i=0;i<eles.length;i++){if(eles[i].nodeName==tagType){tags.push(eles[i]);}}
return tags;}
return eles;}
var calculator={arith:function(sn){if(parseFloat(data.sign)!=-2){switch(parseFloat(data.sign)){case 0:data.result=FloatAdd(parseFloat(data.left),parseFloat(data.right));break;case 1:data.result=FloatSub(parseFloat(data.left),parseFloat(data.right));break;case 2:data.result=FloatMul(parseFloat(data.left),parseFloat(data.right));break;case 3:data.result=FloatDiv(parseFloat(data.left),parseFloat(data.right));break;}
data.left="";data.sign=sn;data.right="";current=false;c_get("resultIpt").value=data.result;}},foo:function(sn){if(!lastIsMemory){if(data.left==""){if(data.result!=""){data.left=data.result;current=true;}else{return false;}}else{if(data.right==""){current=true;}else{calculator.arith(sn);data.left=data.result;data.sign=sn;data.right="";current=true;}}}else{if(data.left!=""&&data.right!=""){calculator.arith(sn);data.left=data.result;data.sign=sn;data.right="";current=true;}else{data.left=m;current=true;}
lastIsMemory=false;}
data.sign=sn;},input:function(key,type){if(type!=-2){if(data.sign.toString()=="-2"){$c_get("baseEprsPanel").innerHTML=key.innerHTML;}else{if(!lastIsMemory){$c_get("baseEprsPanel").innerHTML+=key.innerHTML;}else{$c_get("baseEprsPanel").innerHTML=key.innerHTML;}}}
switch(type){case-1:if(isMaxLength==false){if(c_get("resultIpt").value.substring(0,1)=="0"&&key.innerHTML=="0"&&c_get("resultIpt").value.length<=1){}else{if(!lastIsMemory){if(current){if((data.right.toString().indexOf(".")!=-1&&key.value==".")){return false;}else{if(key.value=="."&&(data.right==""||data.right=="0")){data.right="0"+ key.value;}else{if(data.right.toString().length<=1&&data.right=="0"){data.right=key.innerHTML}else{data.right+=key.innerHTML;}}
c_get("resultIpt").value=data.right;}}else{if((data.left.toString().indexOf(".")!=-1&&key.value==".")){return false;}else{if(key.value=="."&&(data.left==""||data.left=="0")){data.left="0"+ key.value;}else{if(data.left.toString().length<=1&&data.left=="0"){data.left=key.innerHTML}else{data.left+=key.innerHTML;}}
c_get("resultIpt").value=data.left;}}}else{current=false;data.left=key.innerHTML;c_get("resultIpt").value=data.left;lastIsMemory=false;}
if(data.sign.toString()=="-2"){data.sign="";}
if(c_get("resultIpt").value.length>16){isMaxLength=true;}}}
else{alert("只能输入不大于17位的字符");}
break;case-2:if(data.left!=""&&data.right!=""){calculator.arith(-2);}else{if(data.result!=""&&data.sign!=""&&parseFloat(data.sign)!=-2){data.right=data.left;data.left=data.result;calculator.arith(-2);}}
isMaxLength=false;break;case-3:if(c_get("resultIpt").value.substring(0,1)=="-"){c_get("resultIpt").value=c_get("resultIpt").value.substr(1);}else{c_get("resultIpt").value="-"+ c_get("resultIpt").value;}
if(current==false){if(data.left==""){if(data.result!=""){data.left=data.result;data.left=-Number(data.left);}}else{data.left=c_get("resultIpt").value;}}else{data.right=c_get("resultIpt").value;}
break;case 0:calculator.foo(0);isMaxLength=false;break;case 1:calculator.foo(1);isMaxLength=false;break;case 2:calculator.foo(2);isMaxLength=false;break;case 3:calculator.foo(3);isMaxLength=false;break;}
key.blur();},output:function(pnl,str,isLink){if(isLink){pnl.innerHTML+=str;}else{pnl.innerHTML=str;}},remove:function(){if(current==false){if(data.left.length>0){data.left=data.left.substring(0,data.left.length-1);c_get("resultIpt").value=data.left;}}else{if(data.right.length>0){data.right=data.right.substring(0,data.right.length-1);c_get("resultIpt").value=data.right;}}
try{c_get("baseEprsPanel").innerHTML=c_get("baseEprsPanel").innerHTML.substring(0,c_get("baseEprsPanel").innerHTML.length-1);}catch(e){}
c_get("simpleDel").blur();if(c_get("resultIpt").value.length<=16){isMaxLength=false;}},clearAll:function(){c_get("resultIpt").value=0;current=false;data.left=data.right=data.result="";c_get("baseEprsPanel").innerHTML="";c_get("simpleClearAllBtn").blur();isMaxLength=false;},memory:function(obj,type){switch(type){case 0:if(c_get("resultIpt").value!=""){m=parseFloat(c_get("resultIpt").value);}
lastIsMemory=true;break;case 1:if(m!=""){if(parseFloat(data.sign)!=-2&&data.sign.toString()!=""){if(current){data.right=m;}else{data.left=m;}
c_get("baseEprsPanel").innerHTML+=m;}
c_get("resultIpt").value=m;}
lastIsMemory=true;break;case 2:m="";break;case-1:if(m==""){if(c_get("resultIpt").value!=""){m=parseFloat(c_get("resultIpt").value);}}else{if(c_get("resultIpt").value!=""){m=parseFloat(m)+ parseFloat(c_get("resultIpt").value);}}
lastIsMemory=true;break;case-2:if(m==""){if(c_get("resultIpt").value!=""){m=parseFloat(c_get("resultIpt").value);}}else{if(c_get("resultIpt").value!=""){m=parseFloat(m)*parseFloat(c_get("resultIpt").value);}}
lastIsMemory=true;break;}
obj.blur();}}
var byKeyBoard=function(kyCd,evnt){var $g=function(tagId){return document.getElementById(tagId);}
var cd=Number(kyCd);var chars="simple";if(c_get("calculator_base").style.display=="none"){chars="complete";}
if(cd==48||cd==96){$g(chars+"0").click();return false;}
if(cd==49||cd==97){$g(chars+"1").click();return false;}
if(cd==50||cd==98){$g(chars+"2").click();return false;}
if(cd==51||cd==99){$g(chars+"3").click();return false;}
if(cd==52||cd==100){$g(chars+"4").click();return false;}
if(cd==53||cd==101){$g(chars+"5").click();return false;}
if(cd==54||cd==102){$g(chars+"6").click();return false;}
if(cd==55||cd==103){$g(chars+"7").click();return false;}
if(cd==56||cd==104){$g(chars+"8").click();return false;}
if(cd==57||cd==105){$g(chars+"9").click();return false;}
if(cd==13||cd==187){$g(chars+"Equal").click();return false;}
if(cd==190||cd==110){$g(chars+"Dot").click();return false;}
if(cd==109||cd==189){$g(chars+"Subtr").click();return false;}
switch(kyCd){case 107:$g(chars+"Add").click();break;case 109:$g(chars+"Subtr").click();break;case 189:$g(chars+"Subtr").click();break;case 106:$g(chars+"Multi").click();break;case 111:$g(chars+"Divi").click();break;case 46:$g(chars+"Del").click();break;}}
window.onload=function(){document.onkeydown=function(evn){var evnt=evn||window.event;var keyCode=evnt.keyCode;byKeyBoard(keyCode,evnt);}
inputChangCarry(10);}
