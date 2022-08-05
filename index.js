// Write your solution here!

const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
 
function removeLastCat() {
    return cats.slice(0,2);
}

function removeFirstCat() {
    return cats.slice(1,3);
}