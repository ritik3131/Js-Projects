window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();
recognition.interimResults=true;

let p=document.createElement('p');
const word=document.querySelector('.word');

word.appendChild(p);
recognition.addEventListener('result',e=>{
  //  console.log(e.results);
  const transcript=Array.from(e.results)
  .map(result=>result[0])
  .map(result=>result.transcript)
  .join('');
  console.log(transcript);
  p.innerHTML=transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    word.appendChild(p);
  }
});
recognition.addEventListener('end', recognition.start);
recognition.start();