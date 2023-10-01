// Add event listener for the "Add Book" button
document.querySelector('.js-add-book-button')
    .addEventListener('click', ()=>{
      addBook();
    });


//create array to store books
const bookList =[
  {bookName: "book1", 
  author: "Author1", 
  year: "2021", 
  price: "500"},

  {bookName: "book2", 
  author: "Author2", 
  year: "1990", 
  price: "400"},

  {bookName: "book3", 
  author: "Author3", 
  year: "2023", 
  price: "700"}
];


//for first time open website, will show all book that user have
renderBookList();

function renderBookList(){
  let bookDisplayHTML='';
    bookList.forEach((bookObject, index)=>{
      const{bookName, author, year, price} = bookObject;
      const html =`
      <div class="book-container">
        <span class="book-number">#${index+1}</span>

          <div class="book-info">
          <span> BookName :</span>${bookName}
          </div>

          <div class="book-info">
            <span>Author :</span>${author} 
            <span>Year :</span>${year} 
            <span>Price :</span>${price} 
          </div>

        <button class="delete-book-button js-delete-book-button">Delete</button>
        
        <button class="edit-book-button js-edit-book-button" data-index="${index}">Edit</button>

      </div>
      `;
      bookDisplayHTML +=html;
        });
  
      document.querySelector('.js-Book-list')
      .innerHTML=bookDisplayHTML;

      //Create delete button
        document.querySelectorAll('.js-delete-book-button')
          .forEach((deleteButton, index)=>{
          deleteButton.addEventListener('click', ()=> {
            bookList.splice(index,1);
              renderBookList();
                alert("Delete book finish!");
            });
        });

        //Create Edit button
        document.querySelectorAll('.js-edit-book-button')
        .forEach((editButton, index)=>{
          editButton.addEventListener('click', ()=> {
            editBook(index);//call editBook function
            renderBookList();
          });
        });
    

  //Create EditBook function

  function editBook(index) {
    const book = bookList[index];
    const newBookName = prompt("Enter the new book name:", book["bookName"]);
    const newWriter = prompt("Enter the new writer:", book["author"]);
    const newPrice = (prompt("Enter the new price:", book["price"]));
    const newPublicationYear = (prompt("Enter the new publication year:", book["year"]));

    // Check if the user edit new values (not null) before updating
    if (newBookName !== null) {
      book["bookName"] = newBookName;
      }
      if (newWriter !== null) {
          book["author"] = newWriter;
      }
      if (newPrice !== null) {
          book["price"] = newPrice;
      }
      if (newPublicationYear !== null) {
          book["year"] = newPublicationYear;
      }

    // Refresh the book display
    renderBookList();

    // Show "Edit book finish!" alert
    alert("Edit book finish!");
}




}


    //Add New book function
    function addBook() {
    const inputElement = document.querySelector('.js-bookName-input')
    const bookName=inputElement.value;

    const authorinputElement = document.querySelector('.js-author-input')
    const author=authorinputElement.value;

    const yearinputElement = document.querySelector('.js-year-input')
    const year=yearinputElement.value;

    const priceinputElement = document.querySelector('.js-price-input')
    const price=priceinputElement.value;

    // Check if any field is empty
    if (!bookName || !author || !year || !price) {
      alert("Please fill all information");
      return; // Exit the function
      }

    // Check if "year" and "price" inputs contain only numbers
    if (!isValidNumber(year) || !isValidNumber(price)) {
      alert("Year and Price must be numeric values");
      return; // Exit the function
    }

    bookList.push({
      bookName: bookName,
      author: author,
      year: year,
      price: price
    });



    ///when click add, will clear input fields
    inputElement.value=''; 
    authorinputElement.value =''; 
    yearinputElement.value ='';
    priceinputElement.value='';

    //display all of books
    
      renderBookList()
      alert("Add book finish!");

    // Function to validate if a string is a numeric value
    function isValidNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  
  }