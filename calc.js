	
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;
var o=0;
var p=0;


function sum1(){
  a=document.getElementById("first").value;
  b=document.getElementById("third").value;
  c=document.getElementById("fifth").value;
  d=document.getElementById("seven").value;
  e=document.getElementById("nine").value;
  f=document.getElementById("eleven").value;
  g=document.getElementById("thirteen").value;
  h=Number(a)+Number(b)+Number(c)+Number(d)+Number(e)+Number(f)+Number(g);
  document.getElementById("fifteen").value=h;
  i=document.getElementById("second").value;
  j=document.getElementById("fourth").value;
  k=document.getElementById("sixth").value;
  l=document.getElementById("eight").value;
  m=document.getElementById("ten").value;
  n=document.getElementById("twelve").value;
  o=document.getElementById("fourteen").value;
  p=Number(i)+Number(j)+Number(k)+Number(l)+Number(m)+Number(n)+Number(o);
  document.getElementById("sixteen").value=p;
  q=(p/h)*100;
  document.getElementById("seventeen").value=q;
}
