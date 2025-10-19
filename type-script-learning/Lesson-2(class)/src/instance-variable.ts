class Person {

    // private readonly firstName:string
    // protected readonly lastName:string

    // constructor(firstName:string, lastName:string) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    // }

     constructor(
        public firstName:string,
        public lastName:string) {
        
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}