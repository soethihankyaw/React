interface Item {
    readonly id: number
    readonly name: string
}

function showItem(item:Item) {
    console.log(`id : ${item.id} | name : ${item.name}`)
}

class Product {

    constructor(readonly id: number, readonly name: string, price: number) {
        
    }
}

class SaleItem implements Item {
    constructor(
        public id: number,
        public name: string
) { 
    }
}

showItem(new SaleItem(1, "Tiger"))
showItem(new Product(2, "ABC", 10000))
showItem({id :3 , name : "French Fry"})

function defineShape(arg: {name:string, value?: number, [name:string]: any}) {
    console.log(arg.name) 
    console.log(arg.value)
}

defineShape({name: "This is the testing", value: 30, order: "Desc" , others: true})
// make interface using type
type ApiResponse = {
    success: boolean
    message:string
}

//Function Type
interface Calculator {
    (a:number, b:number): number
}

let plus:Calculator = (a, b) => a + b
let minus:Calculator = (a, b) => a - b

console.log(plus(10, 5))
console.log(minus(10, 5))