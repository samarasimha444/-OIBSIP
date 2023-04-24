let display=document.getElementsByClassName("display-1")[0]
let display_2=document.getElementsByClassName("display-2")[0]
document.getElementById("n-7").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+7}))
document.getElementById("n-8").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+8}))
document.getElementById("n-9").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+9}))
document.getElementById("n-6").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+6}))
document.getElementById("n-5").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+5}))
document.getElementById("n-4").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+4}))
document.getElementById("n-3").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+3}))
document.getElementById("n-2").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+2}))
document.getElementById("n-1").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+1}))
document.getElementById("n-0").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+0}))
document.getElementById("plus").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+'+'}))
document.getElementById("minus").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+'-'}))
document.getElementById("multi").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+'x'}))
document.getElementById("divsion").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+'/'}))
document.getElementById("full-stop").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+'.'}))
document.getElementById("left").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+'('}))
document.getElementById("right").addEventListener("click",(()=>{display.innerHTML=display.innerHTML+')'}))
document.getElementById("arrow").addEventListener("click",(()=>{display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)}))
document.getElementsByClassName("ac")[0].addEventListener("click",(()=>{display.innerHTML=''; display_2.innerHTML=''}))
function parse(str) {
        return Function(`'use strict'; return (${str})`)()
      }     
ans=()=>{display_2.innerHTML=display.innerHTML
s=display.innerHTML.replaceAll("x","*");    
try{let a=parse(s);display.innerHTML=a
if(display.innerHTML.includes(".")){display.innerHTML=display.innerHTML.slice(0,display.innerHTML.indexOf('.')+16)}}catch(error){display_2.innerHTML="ERROR";display.innerHTML=''}
}  
document.getElementById("equal").setAttribute("onclick","ans()")



