const aBookshelf = new Bookshelf(); 

aBookshelf.seed(bookData); 

aBookshelf.render(); 

//ADD BOOK
const addTit = document.getElementById("add-title"); 
const addLan = document.getElementById("add-language"); 
const addAut = document.getElementById("add-author"); 
const addSub = document.getElementById("add-subject"); 

const addButt = document.getElementById("add-button"); 

const bookshelfInstance = new Bookshelf(); 

addButt.addEventListener("click", ()=>{
    console.log(addTit.value); 
    const newBook = new Book(addTit.value, addLan.value, addAut.value, addSub.value); 
    bookshelfInstance.addBook(newBook); 
    bookshelfInstance.render();

})
///
///sort books by language
const bookshelfByLanguage = aBookshelf.byLanguage(bookData);
console.log(bookshelfByLanguage); 
// console.log(bookshelfByLanguage.byLanguage(bookData));

console.log(bookData.length);

console.log(aBookshelf);

console.log(aBookshelf.byLanguage(bookData));
let nonEn = document.getElementById("non-en");
console.log(nonEn);


const langButt = document.getElementById("lang-butt"); 

    ///trying Object.entries
    let anArray = [];
    for(const[key, value] of Object.entries(bookshelfByLanguage)){
        if(key !== 'en'){
        console.log(`${key}: ${value.length}`);
        console.log(value);
        // nonEn.textContent = (`Non En Books: ${key}: ${value.length}`); 
        anArray.push(value.length);
    }
      console.log(`anArray ${anArray}`);
      console.log(anArray.length);
      
      ///get number of elements in anArray
      const sum = anArray.reduce((acc, cur)=> acc + cur, 0); 
      console.log(sum);
      nonEn.textContent = (`Non English Books: ${sum}`); 
    
    }


