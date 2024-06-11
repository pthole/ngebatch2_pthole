// Cursor Park (anyone not typing put your cursor here)
var someAcademitesWithAges = [
    { name: 'Aisha', age: 8 }, // ages in months!
    { name: 'Oscar', age: 9 },
    { name: 'Wiggins', age: 44 },
    { name: 'Gatsby', age: 56 }
];
// Reduce the array to only the total age in months of all the doggie Academites
// TODO
// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
function sortByName(arr) {
    return arr.sort(function (a, b) { return a.name.localeCompare(b.name); });
}
var sortedName = sortByName(someAcademitesWithAges);
console.log(sortedName);
// TODO
// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
function sortByAge(arr) {
    return arr.sort(function (a, b) { return a.age - b.age; });
}
var sortedAge = sortByAge(someAcademitesWithAges);
console.log(sortedAge);
// TODO
// EOF
