class Book{
    constructor(author, language, subject, title){
        this.author = author; 
        this.language = language; 
        this.subject = subject; 
        this.title = title; 
    }

    render(){
        const bookWrapper = document.createElement("div"); 

        const h1 = document.createElement("h1"); 
        h1.textContent = `Author: ${this.author}`; 

        const h2 = document.createElement("h2"); 
        h2.textContent = `language: ${this.language}`; 

        const h3 = document.createElement("h3"); 
        h3.textContent = `subject: ${this.subject}`; 

        const h4 = document.createElement("h4"); 
        h4.textContent = `title: ${this.title}`; 

        bookWrapper.append(h1, h2, h3, h4); 

        return bookWrapper; 
    }
}

const book1 = new Book("steven", "esperanto", "bugs", "steven's bugs of the world"); 


