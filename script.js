const mainBody = document.querySelectorAll(".main")
// const bookBlock = document.createElement("table")
// const bookInfo = document.createElement("p")
// bookInfo.textContent = `Title: ${title}`
// const tableContent = document.getElementById("currentBooks");


let myLibrary = [{title : "test book1", author: "testauthor1", pages: 10, isRead: "yes"},
                {title : "test book2", author: "testauthor2", pages: 20, isRead: "no"}];

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
    for (let i = 0;i < 2; i++){
        let row = tableContent.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = myLibrary.title[i];
    }
}

displayBooks()