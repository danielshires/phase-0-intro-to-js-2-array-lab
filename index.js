// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    return cats.push(cat)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    const newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice(0, -1)
    return newCats
}

function removeFirstCat() {
    const newCats = cats.slice(1, 3)
    return newCats
}


// console.log(removeFirstCat())

// console.log(cats)
// destructivelyAppendCat('Ralph')
// destructivelyPrependCat('Bob')
// console.log(appendCat("Broom"))