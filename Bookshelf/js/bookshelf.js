class Bookshelf{
    constructor(){
        this.book = []; 
    }

    seed(bookData){
        for(const book of bookData){
            const newBook = new Book(book.author, book.language, book.subject, book.title, this);

            this.book.push(newBook); 

        }
    }

    addBook(aBook){
        this.book.push(aBook);
    }

    ///rturns an array
    ///for each element in array
    ///if key != eng
    ///return key.length 
    byLanguage(arr){
        return arr.reduce((acc, cur)=>{
            if(acc.hasOwnProperty(cur.language)){
                acc[cur.language].push(cur.title);
            }else{
                acc[cur.language] = [cur.title];
            }
            return acc;
        }, {});
    }


    render(){
        const bookWrapper = document.createElement('div'); 

        for (const book of this.book){
            bookWrapper.append(book.render())
        }

        document.body.append(bookWrapper); 

    }
}
