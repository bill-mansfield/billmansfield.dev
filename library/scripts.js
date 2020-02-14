/*
Library
*/

let library = [];

/*
Dom trash
*/

var bookcase = document.getElementById("autoshelf");
var shelf = document.createElement("div");

/*
Book Constuctor
*/

// addBookToLibrary("heck", "yes", 123, true, "noinfo");

function submitForm() {
    var formTitle = document.getElementById("title").value;
    var formAuthor = document.getElementById("author").value;
    var formPages = document.getElementById("pages").value;
        if (document.getElementById("isReadTrue").checked) {
            var formIsRead = true;
        } else {
            var formIsRead = false;
        }
    var formInfo = document.getElementById("info").value;
    addBookToLibrary(formTitle, formAuthor, formPages, formIsRead, formInfo);
    renderNewBook();
}

function Book(title, author, pages, isRead, info) {
    this.title     = title;
    this.author    = author;
    this.pages     = pages;
    this.isRead    = isRead;
    this.info      = info;
}

function addBookToLibrary(title, author, pages, isRead, info) {
    library.push(new Book(title, author, pages, isRead, info));
}

var iterate = 0;
function renderNewBook() {
    var shelf = document.createElement("div");

    for (i=0; i<5; i++) {
        var newBook = library[library.length-1];
        var arr = Object.values(newBook);
        var arrKeys = Object.keys(newBook);

        var paragraph = document.createElement("p");
        var span = document.createElement("span");
        span.innerHTML = arrKeys[i];
        paragraph.innerHTML = arr[i];
        
        if (arrKeys[i] === "isRead") {
            paragraph.setAttribute("isreadstatus", arr[i]);
            paragraph.setAttribute("id", arr[0]);
        }
        shelf.appendChild(span);
        shelf.appendChild(paragraph);
    }

    var removebtn = document.createElement("button");
    removebtn.innerHTML = "Remove";
    var changeReadStatus = document.createElement("button");
    changeReadStatus.innerHTML = "Change read status?";
    changeReadStatus.setAttribute("index", iterate);
    changeReadStatus.addEventListener("click", updateIsRead);
    removebtn.setAttribute("index", iterate);
    removebtn.addEventListener("click", removeBook);
    shelf.setAttribute("id", iterate);
    shelf.appendChild(removebtn);
    shelf.appendChild(changeReadStatus);
    bookcase.appendChild(shelf);
    iterate++;
}

function updateIsRead() {
    var parentID = this.getAttribute("index");
    var selectedBook = library[parentID];

    if (selectedBook.isRead === true) {
        selectedBook.isRead = false;
        document.getElementById(selectedBook.title).innerHTML = "false";
    } else {
        selectedBook.isRead = true;
        document.getElementById(selectedBook.title).innerHTML = "true";
    }
}

function removeBook() {
    var parentID = this.getAttribute("index");
    document.getElementById(parentID).remove();
}

function render() { 
    var c = 0;
    library.forEach(element => {
        var shelf = document.createElement("div");
        for (i=0; i<5; i++) {
            var arr = Object.values(element);
            var paragraph = document.createElement("p");

            paragraph.innerHTML = arr[i];
            shelf.appendChild(paragraph);
        }
        c++;
        var removebtn = document.createElement("button");

        removebtn.innerHTML = "Remove";
        removebtn.setAttribute("index", c);
        removebtn.addEventListener("click", removeBook);
        shelf.appendChild(removebtn);
        bookcase.appendChild(shelf);
    });
}

render();

//testing ssh key with passphrase