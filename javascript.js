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

    book_div.id = book.id;

    const title = book_div.querySelector(".title");
    title.textContent += ` ${book.title}`;

    const author = book_div.querySelector(".author");
    author.textContent += ` ${book.author}`;

    const pages = book_div.querySelector(".pages");
    pages.textContent += ` ${book.pages}`;

    const read = book_div.querySelector(".read");
    read.textContent += ` ${book.read}`;
    
    document.querySelector("#center-content").appendChild(book_div);
}



const new_book_button = document.getElementById("new-book");

new_book_button.addEventListener("click", () => {alert("cliccato");});