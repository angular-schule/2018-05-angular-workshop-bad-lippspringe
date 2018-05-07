export class Book  {

    constructor(
        public isbn: string,
        public title: string,
        public description: string,
        public rating: number = 0
    ) {    
    }

    setTest() {
        this.isbn = "1234";
        var x = () => { return this.isbn }
    }


    // DDD style
    rateUp() {
        this.isbn = this.isbn + 1;  
    }
}

export interface IBook {
    isbn: string,
    title: string,
    description: string,
    rating: number    
}