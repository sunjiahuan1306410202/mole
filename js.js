function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}
gamelength=30; 
timerID=null 
var playing=false; 
var numholes=6*10; 
var currentpos=-1; 
function clrholes() { 
for(var k=0;k<document.dmz.elements.length;k++) 
document.dmz.elements[k].checked=false; 
} 
function stoptimer() { 
if(playing) 
clearTimeout(timerID); 
} 
function showtime(remtime) { 
document.cpanel.timeleft.value=remtime; 
if(playing) { 
if(remtime==0) { 
stopgame(); 
return; 
} 
else { 
temp=remtime-1; 
timerID=setTimeout("showtime(temp)",1200); 
      } 
   } 
} 
function stopgame() { 
stoptimer(); 
playing=false; 
document.cpanel.timeleft.value=0; 
clrholes(); 
display("游戏结束"); 
alert('游戏结束.\n你一共得了:  '+totalhits); 
} 
function play() { 
stoptimer(); 
if(playing) { 
stopgame(); 
return; 
} 
playing=true; 
clrholes(); 
totalhits=0; 
document.cpanel.score.value=totalhits; 
display("游戏ing"); 
launch(); 
showtime(gamelength); 
} 
function display(msg) { 
document.cpanel.state.value=msg; 
} 
function launch() { 
var launched=false; 
while(!launched) { 
mynum=random(); 
if(mynum!=currentpos) { 
document.dmz.elements[mynum].checked=true; 
currentpos=mynum; 
launched=true; 
      } 
   } 
} 

function hithead(id) { 
if(playing==false) { 
clrholes(); 
display("Push Start to Play"); 
return; 
} 
if(currentpos!=id) { 
totalhits+=-1; 
document.cpanel.score.value=totalhits; 
document.dmz.elements[id].checked=false; 
} 
else { 
totalhits+=1; 
document.cpanel.score.value=totalhits; 
launch(); 
document.dmz.elements[id].checked=false; 
   } 
} 

function random() { 
return(Math.floor(Math.random()*100%numholes)); 
} 