// enum Level {
//     Basic = "Basic", 
//     Intermediate = "Intermediate", 
//     Advance = "Advance"
// }
// console.log(Level.Basic)
// console.log(Level.Intermediate)
// console.log(Level.Advance)
var Level;
(function (Level) {
    Level[Level["Basic"] = 0] = "Basic";
    Level[Level["Intermediate"] = 1] = "Intermediate";
    Level[Level["Advance"] = 2] = "Advance";
})(Level || (Level = {}));
console.log(Level[0]);
console.log(Level[1]);
console.log(Level[2]);
console.log(Level);
//# sourceMappingURL=enum-type.js.map