//Union Type
type ValidationResult = {
    value: boolean
    message: string
} | string

function validate(input:string): ValidationResult {
    
    if(input) {
        return {value : true, message : `Valid Input : ${input}`}
    } else {
        return {value : false, message : `Invalid Input : ${input}`}
    }
}

console.log(validate("1"))

// Intersertion Type

type CourseForm = {
    name : string
    level: string
    duration: number
}

type Course = {
    id : number
} & CourseForm

const beginnerCourse: Course = {
    id: 1,
    name: "Soe Thi",
    level: "Beginner",
    duration: 15
}