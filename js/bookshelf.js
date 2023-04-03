class Bookshelf{
    constructor(){
        this.book = []; 
    }

    seed(bookData){
        for(const book of bookData){
            const newBook = new Book(book.author, book.language, book.subject, book.title);

            this.book.push(newBook); 

        }
    }

    addBook(book){
        this.books.push(book);
    }

    render(){
        const bookWrapper = document.createElement('div'); 

        for (const book of this.book){
            bookWrapper.append(book.render())
        }

        document.body.append(bookWrapper); 

    }
}