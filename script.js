const mainBody = document.querySelector(".main")
const displayTable = document.getElementById("currentBooks")
const addBook = document.getElementById("inputForm")
const addButton = document.getElementById("addButton")
const modal = document.getElementById("myModal")
const close = document.getElementsByClassName("close")[0]
const submit = document.getElementById("submit")

//form inputs
const bookTitle = document.getElementById("bookName")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const bookIsRead = document.getElementById("pages")

const togglebtn = document.createElement("button")
togglebtn.style.backgroundColor = "lightblue";
togglebtn.style.height = "50px";
togglebtn.style.width = "50px";
togglebtn.innerHTML = "Toggle Read"
togglebtn.style.fontSize = "12px"

let myLibrary = [{title: "test book1", author: "testauthor1", pages: 10, isRead: "yes"},
                {title: "test book2", author: "testauthor2", pages: 20, isRead: "no"},
                {title: "test book3", author: "testauthor3", pages: 30, isRead: "no"}];


function createBook (title, author, nrPages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = nrPages;
    this.isRead = isRead;

    createBook.prototype.info = function() {
        return title, author, nrPages, isRead;
    }
}

function addBookToLibrary() {
    let title = bookTitle.ariaValueText;
    let author = bookAuthor.ariaValueText;
    let pages = bookPages.ariaValueMax;
    let read = bookIsRead.ariaValueText;
    let newBook = createBook(title, author, pages, read);
    myLibrary.push(newBook);
    console.log("added to library")
}

function displayBooks(myLibrary) {
    for (let i = 0;i < myLibrary.length; i++){
        let togglebtn = document.createElement("button")
        togglebtn.style.backgroundColor = "lightblue";
        togglebtn.style.height = "50px";
        togglebtn.style.width = "50px";
        togglebtn.innerHTML = "Toggle Read"
        togglebtn.style.fontSize = "12px"
        // togglebtn.onclick = function() {
        //     let currentRow = this.rowIndex;
        //     if (displayTable[4] === "yes"){
        //         displayTable[4] = "no";
        //     }
        //     else if (currentRow.isRead === "no"){
        //         currentRow.isRead = "yes";
        //         console.log("this works")
        //     }
        // };

        let row = displayTable.insertRow(-1);
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML = myLibrary[i].isRead;
        cell5.appendChild(togglebtn);
        displayTable.appendChild(row)
    }
}


//modal logic
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

close.onclick = function(){
    modal.style.display = "none";
}

addButton.onclick = function() {
    modal.style.display = "grid";
}

submit.onclick = addBookToLibrary();

displayBooks(myLibrary)