// create obj without using class
const user = {
    name : "Soe Thi",
    phone : "09893778677",
    email :"soethi@gmail.com"
}
//class with constructor
class User {
    constructor(
        public name:string,
        private phone:string, // cannot call 
        public email:string
    ) {}
}


const user2 = new User("Ye Ye", "09799733096", "ye@gmail.com");

user2.name
user2.email
