let i=0;
let btn=document.querySelector('.pause');
let video=document.querySelector('video');
let skipbtn1=document.getElementById("skip1");
let skipbtn2=document.getElementById("skip2");
let speed=document.getElementById("speed");
let length=document.getElementById("length");
let volume=document.getElementById("volume");
let fs=document.getElementById("fs");

setInterval(() => {
    //console.log(video.duration);
    length.value=(video.currentTime)*100/video.duration;        
}, 1000);


btn.addEventListener('click',playvideo);
video.addEventListener('click',playvideo);
speed.addEventListener('change',changespeed);
volume.addEventListener('change',changevolume);
length.addEventListener('change',changelength);
skipbtn1.addEventListener('click',skipvideo1);
skipbtn2.addEventListener('click',skipvideo2);
fs.addEventListener('click',()=>{
    i++;
    if(i%2!=0)
    {
       // console.log(player)
    video.parentElement.style.width="100%";
    video.parentElement.style.marginTop="0";
    //video.style.height="80%";
    }
    else
    {
        video.parentElement.style.width="40%";
        video.parentElement.style.marginTop="10rem";
//video.style.height="40%";   
    }
});

function changespeed()
{
    video.playbackRate=(this.value)/20;
}

function changelength()
{
   video.currentTime=(this.value*video.duration)/100;
}

function changevolume()
{
    video.volume=this.value/100;
}

function skipvideo1()
{
    video.currentTime-=10;
}
function skipvideo2()
{
    video.currentTime+=25;
}
function playvideo(){
    if(video.paused)
    {
          video.play();
          btn.textContent= '❚ ❚';
    }
    else 
    {
        video.pause();
        btn.textContent='►' ;
    }     
};
