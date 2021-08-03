console.log( bin2dec(1000));
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
let res=document.getElementById('res');
let answer;
//let expression;
let flag=0;
let btn0=document.getElementById('btn0');
btn0.addEventListener('click',()=>{
    if(flag==1)
     {res.innerHTML='';
     flag=0;}
    res.innerHTML += btn0.innerHTML;
});

let btn1=document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    if(flag==1)
     {res.innerHTML='';
     flag=0;}
    res.innerHTML += btn1.innerHTML;
});

let btnClr=document.getElementById('btnClr');
btnClr.addEventListener('click',()=>{
    res.innerHTML = '';
});

let btnEql=document.getElementById('btnEql');
btnEql.addEventListener('click',()=>{
     let expres=res.innerHTML;
    console.log( expres.indexOf('+'));
    if( expres.indexOf('+')!=-1){
    let num1=expres.slice(1,expres.indexOf('+'));
    let num2=expres.slice(expres.indexOf('+')+1)
    add(num1,num2);
    }
    else if( expres.indexOf('-')!=-1){
        let num1=expres.slice(1,expres.indexOf('-'));
        let num2=expres.slice(expres.indexOf('-')+1)
        sub(num1,num2);
        }
        else if( expres.indexOf('*')!=-1){
            let num1=expres.slice(1,expres.indexOf('*'));
            let num2=expres.slice(expres.indexOf('*')+1)
            multiple(num1,num2);
            }
            else if( expres.indexOf('/')!=-1){
                let num1=expres.slice(1,expres.indexOf('/'));
                let num2=expres.slice(expres.indexOf('/')+1)
                divide(num1,num2);
                }
   // console.log(num1,num2);
    res.innerHTML = answer;
    flag=1;
});

let btnSum=document.getElementById('btnSum');
btnSum.addEventListener('click',()=>{
    res.innerHTML += btnSum.innerHTML;
});

let btnMul=document.getElementById('btnMul');
btnMul.addEventListener('click',()=>{
    res.innerHTML += btnMul.innerHTML;
});

let btnDiv=document.getElementById('btnDiv');
btnDiv.addEventListener('click',()=>{
    res.innerHTML += btnDiv.innerHTML;
});

let btnSub=document.getElementById('btnSub');
btnSub.addEventListener('click',()=>{
    res.innerHTML += btnSub.innerHTML;
});
function add(num1,num2){
    //console.log(parseInt( bin2dec(num1)));
    //console.log(parseInt( bin2dec(num2)));
    console.log("Inside ADD");
    answerdec=parseInt( bin2dec(num1))+parseInt( bin2dec(num2));
    //console.log(answerdec);
    answer = dec2bin(answerdec);
}
function sub(num1,num2){
    //console.log(parseInt( bin2dec(num1)));
    //console.log(parseInt( bin2dec(num2)));
    console.log("Inside Subract");
    answerdec=parseInt( bin2dec(num1))-parseInt( bin2dec(num2));
    //console.log(answerdec);
    answer = dec2bin(answerdec);
}
function multiple(num1,num2){
    console.log("Inside Multiple");
    answerdec=parseInt( bin2dec(num1))*parseInt( bin2dec(num2));
    answer = dec2bin(answerdec);
}
function divide(num1,num2){
    console.log("Inside Divide");
    answer=Math.floor(parseInt(num1)/parseInt(num2));
}
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
function dec2bin(bin){
    return parseInt(bin, 10).toString(2);
  }