function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.id = crypto.randomUUID();
}

const myLibrary = [];

function addBooktoLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.unshift(newBook);
}


const new_book_button = document.getElementById("new-book");

new_book_button.addEventListener("click", () => {alert("cliccato");});