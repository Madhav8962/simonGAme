let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
h4=document.querySelector('h4');
document.addEventListener('keypress',function (){
if(started==false){
started=true;
levelup();
}
});
function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)
}
function levelup(){
    userseq=[];
level++;
h4.innerText=`level ${level}`;
//random index
let rndidx=Math.floor(Math.random()*3);
rndcolor=btns[rndidx];
rndbtn=document.querySelector(`.${rndcolor}`);
gameseq.push(rndcolor);
console.log(gameseq);

// console.log(rndidx);
// console.log(rndcolor);
// console.log(rndbtn);


btnflash(rndbtn);
}
function checkans(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout( levelup,1000);

        }
       
        
    }else{
        h4.innerText="game over .press any key to restart";
        reset();
    }
}
function btnpress(){
   // console.log(this);
    let btn=this;
    btnflash(btn);
     usercolor=btn.getAttribute("id");
     console.log(usercolor);
     
     userseq.push(usercolor);
     checkans(userseq.length-1);
     
    
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
 btn.addEventListener('click',btnpress)
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}