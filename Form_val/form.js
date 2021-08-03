
let uname=document.getElementById('uname');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let form=document.querySelector('form');
let submitbtn=document.getElementById('submitbtn');
//console.log(uname,email,phone);
let vname='false';
let vemail='false';
let vphone='false';
//print();

uname.addEventListener('blur',()=>{
   // console.log("Name is blurred");

   //valid name here.
let reg=/^[a-z]([0-9a-zA-Z]){0,10}$/;
let str=uname.value;
console.log(str,reg);
if(reg.test(str)){
    uname.classList.remove('is-invalid');
    uname.classList.add('is-valid');
    vname='true';
   // console.log('match');
}
else 
{
    uname.classList.add('is-invalid');
    //console.log('no match');
    vname='false';
    //uname.classList.add('is-valid'); 
}
});
email.addEventListener('blur',()=>{
    // console.log("Name is blurred");
    let reg=/^[a-z]\w+\d+@\w+\.\w+$/;
    let str=email.value;
    console.log(str,reg);
    if(reg.test(str)){
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        vemail='true';
       // console.log('match');
    }
    else 
    {
        email.classList.add('is-invalid');
        //console.log('no match');
        vemail='false';
        //uname.classList.add('is-valid'); 
    }
    //valid email here.
    
 });
 phone.addEventListener('blur',()=>{
    // console.log("Name is blurred");
 
    //valid phone here.
    let reg=/^([0-9]){10}$/;
let str=phone.value;
console.log(str,reg);
if(reg.test(str)){
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
    vphone='true';
    console.log('match');
}
else 
{
    phone.classList.add('is-invalid');
    console.log('no match');
    vphone='false';
    //uname.classList.add('is-valid'); 
}
    
 });

 submitbtn.addEventListener('click',(e)=>{   
      e.preventDefault();
     let succes=document.getElementById('success');
     if( vname=='true'&& vemail=='true'&&vphone=='true'){
     succes.innerHTML=`<div
     id="success"
     class="alert alert-warning alert-dismissible fade show"
     role="alert"
   >
     <strong>Success!</strong> Your travel request has been successfully
     submitted.
     <button
       type="button"
       class="btn-close"
       data-bs-dismiss="alert"
       aria-label="Close"
     ></button>`;
     setInterval(() => {
      succes.innerHTML='';
     }, 5000);
     form.reset();
     phone.classList.remove('is-valid');
     uname.classList.remove('is-valid');
     email.classList.remove('is-valid'); 
    }
     else 
     {
        succes.innerHTML=`<div
        id="success"
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>Not submitted!</strong> Enter the Details correctly
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>`  
        phone.classList.add('is-invalid');
        uname.classList.add('is-invalid');
        email.classList.add('is-invalid');
        setInterval(() => {
          succes.innerHTML='';
         }, 5000);   
     }

 });
 let printbtn=document.getElementById('printbtn');
 printbtn.addEventListener('click',()=>{
     print();
 });