export class Book {
/* generatedID:{   title: '', 
            author: '',
            edition: '',
            releaseDate: '',
            resume: ''
        } */
    constructor(public book: {
        title: string, 
        author: string,
        edition: string,
        releaseDate: string,
        resume: string
    }) {}
}