import Books from "./modules/Books.js";

const displayBook = document.querySelector(".display-books");
const form = document.querySelector("form");

// create an object
const listBooks = new Books();
const onPageReload = () => {
  displayBook.innerHTML = listBooks.books
    .map(
      (book) =>
        `<div class="display">
        <p>
          '${book.title}' by ${book.author}
        </p>
        <button id="btn" class="remove-btn">
          Remove
        </button>
      </div>`
    )
    .join("");

  if (listBooks.books.length === 0) {
    displayBook.style.cssText = "border: none;";
  } else {
    displayBook.style.cssText = "border: 3px solid black;";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const bookObj = {
    title,
    author,
  };
  listBooks.addBook(bookObj);
  onPageReload();
  form.reset();
});

// const btn = document.querySelector(".display");
// const removeBook = (bookId) => {
//   listBooks.removeBook(bookId);
//   onPageReload();
// };

displayBook.addEventListener("click", (e) => {
  if (e.target.className === "remove-btn") {
    listBooks.removeBook(e);
    onPageReload();
  }
});

onPageReload();
document.querySelector("span").innerHTML = new Date();
