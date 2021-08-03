//Api key:ee479578ad6248a88b9854e6d74a1cdc

//Grab the news content
let newsaccordion = document.getElementById("newsaccordion");

//Creating xhr object
const xhr = new XMLHttpRequest();
let source = "bbc-news";
let apikeys = "2b5f38189a4a41458e0da6127e1fb8f4";

//open the object
xhr.open("GET", "asd.txt", true);

//onprogress to know the progress of obj
xhr.onprogress = function () {
  console.log("On progress");
};

//what to do when respond is ready
//Onload
xhr.onload = function () {
  if (xhr.status == 200) {
    let json = JSON.parse(this.responseText);
    let article = json.articles;
    let newshtml = "";
    //console.log(article);
    article.forEach(function(element ,index) {
      //console.log(article[news]);
      str = `<div class="accordion-item">
<h2 class="accordion-header" id="flush-heading${index}">
  <button
    class="accordion-button collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#flush-collapse${index}"
    aria-expanded="false"
    aria-controls="flush-collapse${index}"
  >
  <b style="color: blue;">Breaking News: ${index+1}</b>	&nbsp;${element["title"]}
  </button>
</h2>
<div
  id="flush-collapse${index}"
  class="accordion-collapse collapse"
  aria-labelledby="flush-heading${index}"
  data-bs-parent="#newsaccordion"
>
  <div class="accordion-body">
  <p>${element["content"]}<a href="${element["url"]}" target="_blank">Read more here</a></p>
  </div>
</div>
</div>`;
newshtml+=str;
    });
    newsaccordion.innerHTML=newshtml;
  } else {
    console.log("Some error occured!!!");
  }
}      
xhr.send();

//searching item
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('accordion-item');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

