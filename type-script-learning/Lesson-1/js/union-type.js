function validate(input) {
    if (input) {
        return { value: true, message: `Valid Input : ${input}` };
    }
    else {
        return { value: false, message: `Invalid Input : ${input}` };
    }
}
console.log(validate("1"));
const beginnerCourse = {
    id: 1,
    name: "Soe Thi",
    level: "Beginner",
    duration: 15
};
//# sourceMappingURL=union-type.js.map