let timing_seconds  =  document.getElementsByClassName("timing")[3];
let timing_ = document.getElementsByClassName("timing")[2]
let timing_minutes  =   document.getElementsByClassName("timing")[0]
let next  =   document.getElementById("next")
let submit  =   document.getElementById("submit")
let quit  =    document.getElementById("quit")
let q_changing  =  document.getElementById("q_change")
let question  =   document.getElementById("question")
let option = document.getElementsByClassName("option")
let option_value=document.getElementsByClassName("options")[0].value
let indicator= document.getElementsByClassName("flexing-div")[0]

answers=['emmiters', 'removeAllListeners(name)', 
        'addListener()', 'process', 'when handlers are registered',
         'sigint', 's.pause', "s.on('end',f)", 
       'False', 'removeListener(name,f)'];
let marks=[];
let score=0;



function timing(){
    setInterval(
        (()=>{
            timing_seconds.innerHTML=parseInt(timing_seconds.innerHTML)-1
        }
        
    ),1000);
   
    
    setInterval(
        (()=>{
            timing_seconds.innerHTML=9}),10000)
    setInterval(()=>{timing_.innerHTML=parseInt(timing_.innerHTML)-1},10000)
    setInterval(()=>{timing_.innerHTML=5},60000)
    setInterval(()=>{timing_minutes.innerHTML=parseInt(timing_minutes.innerHTML)-1},60000)
    

        
}
timing()
function selection1(){
    
    option[0].setAttribute("style","border:3px solid black;color:black")   
    option[1].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[2].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[3].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")
        
    option_value=option[0].innerHTML
    next.style.visibility="visible"
}
function selection2(){
    option[1].setAttribute("style","border:3px solid black;color:black")   
    option[0].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[2].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[3].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")
        
    option_value=option[1].innerHTML
    next.style.visibility="visible"
}
function selection3(){
    option[2].setAttribute("style","border:3px solid black;color:black")   
    option[1].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[0].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[3].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")
        
    option_value=option[2].innerHTML
    next.style.visibility="visible"
}
function selection4(){
    option[3].setAttribute("style","border:3px solid black;color:black")   
    option[1].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[2].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")  
    option[0].setAttribute("style","border:1px solid #00a5ec;color:#00a5ec")
        
    option_value=option[3].innerHTML
    next.style.visibility="visible"
    }
    function question2(){
        question.innerHTML="what function used to deregister event handler 'f' ?"
        option[0].innerHTML="deleteAlleventListners(name)"
        option[1].innerHTML="deleteListener(name,f)"
        option[2].innerHTML="removeListener(name,f)"
        option[3].innerHTML="removeAlleventListners(name)"
       
    }function question3(){
        question.innerHTML="what is the function used to remove all handlers for name events ?"
        option[0].innerHTML="deleteAllListners(name)"
        option[1].innerHTML="deleteListener(name,f)"
        option[2].innerHTML="removeListener(name,f)"
        option[3].innerHTML="removeAllListeners(name)"
       
    }function question4(){
        question.innerHTML="what function is a synonym for on() ?"
        option[0].innerHTML="addListener()"
        option[1].innerHTML="listeners()"
        option[2].innerHTML="once()"
        option[3].innerHTML="add()"
       
       
    }function question5(){
        question.innerHTML="which of the following is an event emitter ?"
        option[0].innerHTML="once"
        option[1].innerHTML="process"
        option[2].innerHTML="listeners"
        option[3].innerHTML="on"
       
    }function question6(){
        question.innerHTML="when do uncaught exceptions generate events ?"
        option[0].innerHTML="when handlers are registered"
        option[1].innerHTML="when handlers are deregistered"
        option[2].innerHTML="when handler function are called"
        option[3].innerHTML="when handlers do not have a matching catch clause"
       
    }function question7(){
        question.innerHTML="which among the following POSIX signals generate events ?"
        option[0].innerHTML="sigdown"
        option[1].innerHTML="sigfloat"
        option[2].innerHTML="sigint"
        option[3].innerHTML="sigshort"
       
    }function question8(){
        question.innerHTML="what is the method used to pause 'data' events ?"
        option[0].innerHTML="s.pause"
        option[1].innerHTML="s.stop"
        option[2].innerHTML="s.halt"
        option[3].innerHTML="s.wait"
       
    }function question9(){
        question.innerHTML="when the 'end' event fires on EOF when no more data will arrive,which function is called ?"
        option[0].innerHTML="s.on('data',f)"
        option[1].innerHTML="s.on('end',f)"
        option[2].innerHTML="s.on('error',f)"
        option[3].innerHTML="s.on('default',f)"
       
    }function question10(){
        question.innerHTML="what will be the  return value of the write() method when the Node cannot write the data immediately and has to buffer it internally ?"
        option[0].innerHTML="0"
        option[1].innerHTML="1"
        option[2].innerHTML="True"
        option[3].innerHTML="False"
       
    }
   function lastpage(){
    
    {for(let i of answers){for(j of marks){if(i==j){score=score+1}}}}
     document.getElementsByClassName("container")[0].innerHTML="<div class=result>sucessfully completed<br><span class='final-1'>you have scored  </span><span class='final'></span><span class='final-1'> out of 10</span></div>"
    let result_div=document.getElementsByClassName("result")[0]
     result_div.setAttribute("style","position:absolute;left:550px;top:250px;font-size:50px;color:#00a5ec")
     document.getElementsByClassName("final-1")[0].setAttribute("style","font-size:30px;position:relative;left:40px")
     document.getElementsByClassName("final-1")[1].setAttribute("style","font-size:30px;position:relative;left:40px")
     final=document.getElementsByClassName("final")[0]
    final.setAttribute("style","font-weight:bolder;font-size:35px;position:relative;left:40px;")
    final.innerHTML=score}
    setTimeout((()=>{lastpage()}),600000)
    
     
indicator.style.width="40px"
function indicating(){
          next.style.visibility="hidden";
         for(let i of option){i.setAttribute("style","border:1px solid #00a5ec ;color:#00a5ec")}

         indicator.style.width=(parseInt(indicator.style.width.match(/\d+/g))+40)+"px"
    
            q_changing.innerHTML=parseInt(q_changing.innerHTML)+1;
            if(q_changing.innerHTML=='10'){question2()}
            else if(q_changing.innerHTML=='1'){question2()}
            else if(q_changing.innerHTML=='2'){question3()}
            else if(q_changing.innerHTML=='3'){question4()}
            else if(q_changing.innerHTML=='4'){question5()}
            else if(q_changing.innerHTML=='5'){question6()}
            else if(q_changing.innerHTML=='6'){question7()}
            else if(q_changing.innerHTML=='7'){question8()}
            else if(q_changing.innerHTML=='8'){question9()}
            else if(q_changing.innerHTML=='9'){question10()}
            else if(q_changing.innerHTML=='11'){lastpage()}
            marks.push(option_value)            
}
let quit1;
  function quit_(){
    quit1= document.createElement("div")
    quit1.setAttribute("class","toquit")
   quit1.innerHTML="Do you want to quit ?<br><button class='cancel' onclick='cancel()'>cancel</button><button class='cancel' onclick=lastpage(),cancel()>Quit</button>"
   document.body.appendChild(quit1)
   quit1.setAttribute("Style","z-index:1;position:absolute;left:870px;top:10px;height:110px;font-size:25px;color:#00a5ec;border:3px solid #00a5ec;padding:20px")
   for(let i of document.getElementsByClassName("cancel")){i.setAttribute("style","font-size:25px;color:white;border:none;background-color:#00a5ec;padding:15px;margin:25px 30px 30px 0px;border-radius:15px;")}
  }
  
function cancel(){
    quit1.style.visibility='hidden'}

