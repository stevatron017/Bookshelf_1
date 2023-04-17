// re-render entire bookshelf with new comment
// loop over comments
// book render should loop over comments and append to book outside of event listener
//treat the same as auth: language
//event listener should push comment to commments array 
// and re-render bookshelf 
// 

class Book{
    constructor(author, language, subject, title, bookshelf){
        this.author = author; 
        this.language = language; 
        this.subject = subject; 
        this.title = title; 
        this.numPages = 0; 
        this.category = 'Novel'; 
        this.comments = [];
        this.bookshelf = bookshelf; 
    }


    render(){

        // function isNovel(){
        //     if(this.numPages < 100){
        //         this.category = "Short Story"
        //     }
        // };
        const bookWrapper = document.createElement("div");
        bookWrapper.classList.add("book-wrapper");
        //        //
        //styling bookwrapper
        bookWrapper.style.borderStyle = "solid";
        bookWrapper.style.margin = "10px";
        bookWrapper.style.borderRadius = "10px";
        bookWrapper.style.padding = "10px";
        bookWrapper.style.backgroundColor = "black";
        bookWrapper.style.opacity = .7;


        // const commentWrapper = createElement("div");

        const randPages = Math.floor(Math.random() * 500); 
        //
        //we'll use these
        //author
        const auth = document.createElement("div"); 
        auth.textContent = `Author: ${this.author}`;
        auth.classList.add("book-ele");

        //language
        const lang = document.createElement("div"); 
        lang.textContent = `language: ${this.language}`; 
        lang.classList.add("book-ele");
        lang.classList.add("lang-subj-cat");

        //subject
        const subj = document.createElement("div"); 
        subj.textContent = `subject: ${this.subject}`;
        subj.classList.add("book-ele");
        
        //title
        const tit = document.createElement("div"); 
        tit.textContent = `title: ${this.title}`;
        tit.classList.add("book-ele"); 

        //numPages
        const numPages = document.createElement("p"); 
        numPages.textContent = `${randPages} pages`; 
        numPages.classList.add("num-pages");
        numPages.classList.add("book-ele");
        numPages.classList.add("lang-subj-cat")

        
        
        ///category
        const category = document.createElement("div"); 
        if(randPages>100){
            category.textContent="Novel"
        }else{
            category.textContent="Short Story"
        }
        category.classList.add("category");
        category.classList.add("lang-subj-cat");
        category.classList.add("book-ele");
        
        
        ///commentsButton
        const commentsButton = document.createElement("button"); 
        commentsButton.textContent = "MAKE COMMENT";
        commentsButton.classList.add("button");
        commentsButton.classList.add("book-ele");
        commentsButton.classList.add("comment-button");
        
        //comments
        const commSection = document.createElement("ul");
        commSection.textContent = `HERE ARE COMMENTS: ${this.comments}`;
        commSection.classList.add("comm-section");
        commSection.classList.add("book-ele");
        
        ///commentsBox
        const commentBox = document.createElement("input");         
        commentBox.maxLength = "280";
        commentBox.classList.add("book-ele");
        commentBox.classList.add("comment-box");
        commentBox.style.display = "none";
        
        ///create submitButton 
        const submitButton = document.createElement("button");
        submitButton.textContent = "submit";
        submitButton.style.display = "none"; 
        submitButton.classList.add("button");
        submitButton.classList.add("book-ele");

        const enterSubmit = document.createElement("div");
        enterSubmit.classList.add("enter-submit"); 
        enterSubmit.append(commentBox, submitButton); 
        
        ///commentsButton
        commentsButton.addEventListener("click", ()=>{
            console.log("MakeCommentButton");
            commentBox.style.display = "block";
            submitButton.style.display = "block";
            
        ///submitButton operation
        submitButton.addEventListener("click", ()=>{
            console.log("submitComment"); 
            this.comments.push(commentBox.value);
            console.log(commentBox.value);
            console.log(this.comments); 
                for(const comment of this.comments){
                    let newComment = document.createElement("li"); 
                    newComment.classList.add("newComment");
                    newComment.textContent = comment; 
                    commentBox.style.display = "none"; 
                    submitButton.style.display = "none"; 
                    
                    commSection.append(newComment); 
                    commentBox.value = ""; 
                    
                }
                // commSection.replaceChildren(newComment);
                
            })  
        })
        //divs for comments stuff 
        const commentMonkey = document.createElement("div");
        commentMonkey.classList.add("comment-monkey");
        commentMonkey.append(commentsButton, enterSubmit, commSection);

        ///lang-subj-cat 
        const langNumCat = document.createElement("div"); 
        
        langNumCat.append(lang, numPages, category);
        langNumCat.classList.add("lang-subj-cat");
        langNumCat.classList.add("langNumCat");
        
        /////
        //book card 
        const bookCard = document.createElement("div"); 
        bookCard.classList.add("book-card"); 
        bookCard.append(tit, auth, subj, langNumCat); 

        bookWrapper.append(bookCard, commentMonkey); 
        return bookWrapper; 
    }
}

///comment section

        // const comments = document.createElement("button"); 
        // comments.textContent = "COMMENT"; 
        
        // const commentBox = document.createElement("input"); 
        // commentBox.maxLength = "280" ; 

        // commentBox.style.visibility = "hidden"; 

        // const addComment = document.createElement("button"); 
        // addComment.textContent = "add comment"; 
        
        // commentBox.append(addComment);


        // comments.addEventListener("click", ()=>{
        //     console.log("comment"); 
        //     commentBox.style.visibility = "visible";
        //     comments.style.visibility = "hidden"; 
        // })

        // addComment.addEventListener("click", ()=>{
        //     console.log("clck");
        //     comments.style.visibility = "visible"

        //     commentBox.value = new Comment(); 
        //     commentWrapper.append(commentBox.value);
        // })


///Adding 'Comment class'
////open box button
/////write comment field
//////submit button
//////display comments


// class Comment{
//     constructor(open, field, submit, display){
//         this.open = open;
//         this.field = field; 
//         this.submit = submit; 
//         this.display = display;  
//     }
//     render(){
//         const field = document.createElement('field'); 
//         field.textContent = "THE COMMENTS FIELD"

//     }
//     addComment(){
//         // this.something.push()
//     }
// } 


