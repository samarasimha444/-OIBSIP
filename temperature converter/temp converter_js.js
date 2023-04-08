
const button= document.getElementsByTagName("button")[0]
function display(){

let a=document.getElementsByTagName("select")[0].value
let b=document.getElementsByTagName("select")[1].value
let c="celsius"
let k="kelvin"
let f="farehnheit"
let i= document.getElementsByTagName("input")[0].value

i=parseFloat(i)
c_k  =   i+273.15
f_c  = (i-32)*5/9
f_k  = f_c+273.15
k_c  = i-273.15
k_f  = (i * 1.8) - 459.67
c_f  = i*9/5 + 32

if(a==c && b==f){result=c_f}
else if(a==c && b==f) { result=c_f} 
else if (a==c && b==k) {result=c_k} 
else if (a==f && b==c) {result=f_c}
else if (a==f && b==k) {result=f_k}
else if (a==k && b==f) {result=k_f}
else if (a==k && b==c) {result=k_c}
else if(a==b){result=i}

else {result= "some error occured"}
document.getElementsByClassName("result")[0].innerHTML=result}




    








