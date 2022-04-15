let addBookBtn = document.querySelector('.addBookButton');
let myTable = document.querySelector('#table');
let addToLibraryBtn = document.querySelector('#addToLibraryBtn');
let closeBtn = document.querySelector('#closeBtn');

let library = [
    { title: "Harry Potter", author: "JK Rowling", pageCount: 500, readStatus: "No" },
    { title: "Lord of The Rings", author: "JRR Tolkien", pageCount: 300, readStatus: "Yes" },
    { title: "The Bible", author: "Disciples", pageCount: 1000, readStatus: "No" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupery", pageCount: 250, readStatus: "Yes" },
    { title: "Scouting For Boys", author: "Robert Baden-Powell", pageCount: 150, readStatus: "Yes" }
];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}


function createSection(book) {
    let containerDiv = document.querySelector('.containerDiv');
    let newSection = document.createElement('div');
    newSection.className = ('sectionDiv');
    let bookValues = Object.values(book);
    let bookTitle = document.createElement('div');
    bookTitle.className = "sectionBookTitle sectionText";
    bookTitle.textContent = bookValues[0];

    let bookAuthor = document.createElement('div');
    bookAuthor.textContent = bookValues[1];
    bookAuthor.className = "sectionBookAuthor sectionText";

    let bookPageCount = document.createElement('div');
    bookPageCount.textContent = bookValues[2];
    bookPageCount.className = "sectionBookPageCount sectionText";

    let bookReadStatus = document.createElement('div');
    bookReadStatus.textContent = bookValues[3];
    bookReadStatus.className = "sectionBookReadStatus sectionText";

    console.log(bookTitle, bookAuthor, bookPageCount, bookReadStatus);

    newSection.appendChild(bookTitle);
    newSection.appendChild(bookAuthor);
    newSection.appendChild(bookPageCount);
    newSection.appendChild(bookReadStatus);

    containerDiv.appendChild(newSection);
    document.body.appendChild(containerDiv);
}

function addBookToLibrary(book) {
    library.push(book);
    console.log(library);
    createSection(book);
}


addBookBtn.addEventListener('click', () => {
    document.getElementById("myForm").style.display = "block"
});

addToLibraryBtn.addEventListener('click', () => {
    let formDataTitle = document.querySelector('#bookTitle').value;
    let formDataAuthor = "By " + document.querySelector('#bookAuthor').value;
    let formDataPageCount = parseInt(document.querySelector('#bookPageCount').value) + " pages";
    let formDataReadStatus = "Read: " + document.querySelector('#bookReadStatus').value;

    let newBook = new Book(formDataTitle, formDataAuthor, formDataPageCount, formDataReadStatus);
    addBookToLibrary(newBook);

    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPageCount').value = "";
    document.getElementById('bookReadStatus').value = "";
});

closeBtn.addEventListener('click', () => {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPageCount').value = "";
    document.getElementById('bookReadStatus').value = "";
})

