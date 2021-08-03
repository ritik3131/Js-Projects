const video=document.querySelector('.player');
const canvas=document.querySelector('.photo');
let ctx=canvas.getContext('2d');
const strip=document.querySelector('.strip');

function getvideo()
{
    navigator.mediaDevices.getUserMedia({ video: true,audio:true})   //It will return a promise
    .then(localMediaStream=>{
        console.log(localMediaStream)
        video.srcObject = localMediaStream;
      video.play();
    }).catch(err=>{
        console.error(`Oh NO!!!`,err);
    });
}
getvideo();

function paintcanvas()
{
    let width =video.videoWidth-100;
    let height= video.videoHeight;
    console.log(width,height);
    canvas.width=width;
    canvas.height=height;
    return setInterval(() => {
        ctx.drawImage(video,0,0,width,height);
        let pixels=ctx.getImageData(0,0,width,height);
        //pixels=redeffect(pixels);
       //ctx.globalAlpha=0.08;
       //pixels=split(pixels);
       pixels=greeneffect(pixels);
        ctx.putImageData(pixels,0,0);
    }, 16);
}

function takephoto()
{

    //taking out the data from canvas
    const data=canvas.toDataURL('image/png');
    console.log(data);
    const link=document.createElement('a');
    link.href=data;
    link.setAttribute('download','handsome');
    //link.textContent='Download Image';
    link.innerHTML=`<img src="${data}" alt="Handsome man">`
    strip.insertBefore(link,strip.firstChild)
}

function redeffect(pixels)
{
    for(i=0;i<pixels.data.length;i+=4)
    {
        pixels.data[i]+=100;
        pixels.data[i+1]-=50;
        pixels.data[i+2]*=0.5;
    }
    return pixels;
}
function greeneffect(pixels)
{
    const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });
    for(i=0;i<pixels.data.length;i+=4)
    {
       red = pixels.data[i];
       green = pixels.data[i+1];
       blue = pixels.data[i+2];
       if(red>=levels.rmin&& green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax)
       {
        pixels.data[i + 3] = 0;
       }
    }
    return pixels;
}
function split(pixels)
{
    for(i=0;i<pixels.data.length;i+=4)
    {
        pixels.data[i-950]=pixels.data[i]; //Red
        pixels.data[i+1500]=pixels.data[i+1];//Green
        pixels.data[i-550]=pixels.data[i+2];//Blue
    }
    return pixels;
}
video.addEventListener('canplay',paintcanvas);