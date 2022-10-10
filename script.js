const mainBody = document.querySelector(".main")
const displayTable = document.getElementById("currentBooks")
const addBook = document.getElementById("inputForm")
const addButton = document.getElementById("addButton")
const modal = document.getElementById("myModal")
const close = document.getElementsByClassName("close")[0]



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
    
}

function displayBooks(myLibrary) {
    for (let i = 0;i < myLibrary.length; i++){
        let row = displayTable.insertRow(-1);
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML = myLibrary[i].isRead;
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


displayBooks(myLibrary)