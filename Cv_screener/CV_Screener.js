const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]
//cv iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
addcv();
//console.log(candidates);

const nextbtn=document.getElementById('nextbtn');
nextbtn.addEventListener('click',addcv)

function addcv(){
    const currcand = candidates.next().value;
   // console.log(currcand);
   if(currcand!=undefined){
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    image.innerHTML=`<img src="${currcand.image}" alt="image" >`;
    profile.innerHTML=`<ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-warning">${currcand.name}</li>
    <li class="list-group-item">${currcand.age} years old</li>
    <li class="list-group-item">Lives in ${currcand.city}</li>
    <li class="list-group-item">Expert in ${currcand.language}</li>
    <li class="list-group-item">With ${currcand.framework}</li>
  </ul>`;
   }
   else{
       alert('End of Application');
       window.location.reload();

   }
}