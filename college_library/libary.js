//constructor
let i = 0;
function booklib(title, author, type) {
  this.name = title;
  this.author = author;
  this.type = type;
}
function Display() {}

let display = new Display();

Display.prototype.addls = function (book) {
  console.log("In the addlocal");
  let books = localStorage.getItem("books");
  if (books == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(books);
  }
  noteobj.push(book);
  console.log(noteobj);
  localStorage.setItem("books", JSON.stringify(noteobj));
  book.author = "";
  book.name = "";
  book.type = "";
  this.add();
};

Display.prototype.add = function () {
  let tablebody = document.getElementById("tablebody");
  let ulstring = "";
  tablebody.innerHTML = "";
  let books = localStorage.getItem("books");
  if (books == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(books);
  }
  tablebody.innerHTML += ` <h1>Your Book</h1>
    <thead class="table-dark"> 
    <tr>
      <th scope="col">Sl.no</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Type</th>
    </tr>
  </thead>`;
  noteobj.forEach(function (element, index) {
    console.log(element);
    ulstring += ` <tr>
    <th scope="row">${index + 1}</th>
    <td>${element.name}</td>
    <td>${element.author}</td>
    <td>${element.type}</td>
    <button id="${index}"onclick="deletelib(this.id)" class="btn btn-dark" >Delete book:${index+1}</button>
    </tr>`;
  });

  i++;
  tablebody.innerHTML += ulstring;
};
Display.prototype.clear = function () {
  libaryform.reset();
};

Display.prototype.altersub = function () {
  let msg = document.getElementById("msg");
  msg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>Congruates</strong> You have added book successfully!!!!
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`;
  setTimeout(() => {
    msg.innerHTML = ``;
  }, 2000);
};

//delete the file
function deletelib (index) {
  let books=localStorage.getItem("books");
    if(books==null )
    {
        noteobj=[];
    }
    else
    {
        noteobj=JSON.parse(books);
    }
    noteobj.splice(index,1);
    localStorage.setItem("books",JSON.stringify( noteobj));
    display.add();
}

let libaryform = document.getElementById("libaryform");
libaryform.addEventListener("submit", libaryformsubmit);

function libaryformsubmit(e) {
  e.preventDefault();
  console.log("Form Submitted");
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("authorname").value;
  let computer = document.getElementById("computer");
  let literature = document.getElementById("literature");
  let fiction = document.getElementById("fiction");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (computer.checked) {
    type = computer.value;
  } else {
    type = literature.value;
  }
  let book = new booklib(name, author, type);
  display.addls(book);
  // display.add();
  display.altersub();
  display.clear();
  //console.log(book);
}
display.add();
