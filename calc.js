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
var lastOperator="";var isMaxLen=false;



var data={left:"",sign:"",right:"",result:""}
var current=false;var m="";var isMaxLength=false;
var c_get=function(tagId){return document.getElementById(tagId);}
//var lastIsMemory=false;

var calculator={
//arith:function(sn){if(parseFloat(data.sign)!=-2){switch(parseFloat(data.sign)){case 0:data.result=FloatAdd(parseFloat(data.left),parseFloat(data.right));break;case 1:data.result=FloatSub(parseFloat(data.left),parseFloat(data.right));break;case 2:data.result=FloatMul(parseFloat(data.left),parseFloat(data.right));break;case 3:data.result=FloatDiv(parseFloat(data.left),parseFloat(data.right));break;}
//data.left="";data.sign=sn;data.right="";current=false;c_get("resultIpt").value=data.result;}},

arith: function(sn) {
    if (parseFloat(data.sign) != -2) {
        switch (parseFloat(data.sign)) {
            case 0:
                data.result = FloatAdd(parseFloat(data.left), parseFloat(data.right));
                break;
            case 1:
                data.result = FloatSub(parseFloat(data.left), parseFloat(data.right));
                break;
            case 2:
                data.result = FloatMul(parseFloat(data.left), parseFloat(data.right));
                break;
            case 3:
                data.result = FloatDiv(parseFloat(data.left), parseFloat(data.right));
                break;
        }

        data.left = "";
        data.sign = sn;
        data.right = "";
        current = false;
        c_get("resultIpt").value = data.result;
    }
},

foo: function(sn) {
    if (data.left == "") {
        if (data.result != "") {
            data.left = data.result;
            current = true;
        } else {
            return false;
        }
    } else {
        if (data.right == "") {
            current = true;
        } else {
            calculator.arith(sn);
            data.left = data.result;
            data.sign = sn;
            data.right = "";
            current = true;
        }
    }

    data.sign = sn;
},


input:function(key,type){
if(type!=-2){
    if(data.sign.toString()=="-2"){
        $c_get("baseEprsPanel").innerHTML=key.innerHTML;
    }else{
        $c_get("baseEprsPanel").innerHTML+=key.innerHTML;}}

//debug
//alert(lastIsMemory);
switch(type){


case-1:
    if (isMaxLength == true) {alert("只能输入不大于17位的字符");break;}
    if (c_get("resultIpt").value.substring(0, 1) == "0" && key.innerHTML == "0" && c_get("resultIpt").value.length <= 1) {break;}

    if (current) {
        // alert('here');
        if ((data.right.toString().indexOf(".") != -1 && key.value == ".")) {
            return false;
        } else {
            if (key.value == "." && (data.right == "" || data.right == "0")) {
                data.right = "0" + key.value;
            } else {
                if (data.right.toString().length <= 1 && data.right == "0") {
                    data.right = key.innerHTML;
                } else {
                    data.right += key.innerHTML;
                }
            }
            c_get("resultIpt").value = data.right;
        }
    } else {
//        alert('here');
        if ((data.left.toString().indexOf(".") != -1 && key.value == ".")) {
            return false;
        } else {
            if (key.value == "." && (data.left == "" || data.left == "0")) {
                data.left = "0" + key.value;
            } else {
                if (data.left.toString().length <= 1 && data.left == "0") {
                    data.left = key.innerHTML;
                } else {
                    data.left += key.innerHTML;
                }
            }
            c_get("resultIpt").value = data.left;
        }


    if(data.sign.toString()=="-2"){data.sign="";}
    if(c_get("resultIpt").value.length>16){isMaxLength=true;}}
    break;

case-2:if(data.left!=""&&data.right!=""){calculator.arith(-2);}
       else{if(data.result!=""&&data.sign!=""&&parseFloat(data.sign)!=-2){
            data.right=data.left;data.left=data.result;
            calculator.arith(-2);}}
       isMaxLength=false;break;

case 0:calculator.foo(0);isMaxLength=false;break;
case 1:calculator.foo(1);isMaxLength=false;break;
case 2:calculator.foo(2);isMaxLength=false;break;
case 3:calculator.foo(3);isMaxLength=false;break;}
key.blur();},

clearAll: function() {
    c_get("resultIpt").value = 0;
    current = false;
    data.left = data.right = data.result = "";
    c_get("baseEprsPanel").innerHTML = "";
    c_get("simpleClearAllBtn").blur();
    isMaxLength = false;
},
}

//var byKeyBoard=function(kyCd,evnt){var $g=function(tagId){return document.getElementById(tagId);}
//var cd=Number(kyCd);var chars="simple";if(c_get("calculator_base").style.display=="none"){chars="complete";}
//if(cd==48||cd==96){$g(chars+"0").click();return false;}
//if(cd==49||cd==97){$g(chars+"1").click();return false;}
//if(cd==50||cd==98){$g(chars+"2").click();return false;}
//if(cd==51||cd==99){$g(chars+"3").click();return false;}
//if(cd==52||cd==100){$g(chars+"4").click();return false;}
//if(cd==53||cd==101){$g(chars+"5").click();return false;}
//if(cd==54||cd==102){$g(chars+"6").click();return false;}
//if(cd==55||cd==103){$g(chars+"7").click();return false;}
//if(cd==56||cd==104){$g(chars+"8").click();return false;}
//if(cd==57||cd==105){$g(chars+"9").click();return false;}
//if(cd==13||cd==187){$g(chars+"Equal").click();return false;}
//if(cd==190||cd==110){$g(chars+"Dot").click();return false;}
//if(cd==109||cd==189){$g(chars+"Subtr").click();return false;}
//switch(kyCd){case 107:$g(chars+"Add").click();break;case 109:$g(chars+"Subtr").click();break;case 189:$g(chars+"Subtr").click();break;case 106:$g(chars+"Multi").click();break;case 111:$g(chars+"Divi").click();break;case 46:$g(chars+"Del").click();break;}}
//window.onload=function(){document.onkeydown=function(evn){var evnt=evn||window.event;var keyCode=evnt.keyCode;byKeyBoard(keyCode,evnt);}
//inputChangCarry(10);}
