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

//remember the book card structure and removes it from the html
const book_div = document.querySelector(".book");
book_div.remove();
book_div.setAttribute("style", "initial");


//produces a new book_card and displays it
function display_book(book){
    if(!book instanceof Book){
        throw new Error("Cannot display a non book object, insert a book object");
    }

    book_div_copy = book_div.cloneNode(true);
    book_div_copy.id = book.id;

    const title = book_div_copy.querySelector(".title");
    title.textContent += ` ${book.title}`;

    const author = book_div_copy.querySelector(".author");
    author.textContent += ` ${book.author}`;

    const pages = book_div_copy.querySelector(".pages");
    pages.textContent += ` ${book.pages}`;

    const read = book_div_copy.querySelector(".read");
    read.textContent += ` ${book.read}`;
    
    document.querySelector("#center-content").appendChild(book_div_copy);
}

function display_books(){
    myLibrary.forEach(element => {
        display_book(element);
    });
}


//test
addBooktoLibrary("a", "t", 35, true);
addBooktoLibrary("b", "t", 35, true);
display_books();



const new_book_button = document.getElementById("new-book");
const new_book_form = document.querySelector("dialog");

new_book_button.addEventListener("click", () => {
    new_book_form.showModal();
});