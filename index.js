// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (){
    cats.push("Ralph");
    return (cats);
}

function destructivelyPrependCat (){
    cats.unshift("Bob");
    return(cats);
}
  
function destructivelyRemoveLastCat (){
    cats.pop("Ralph");
    return(cats);
}


function destructivelyRemoveFirstCat (){
    cats.shift("Bob");
    return(cats);
}

function appendCat (George){
   
    return([...cats, George]);
}

function prependCat(Mark) {
    return([Mark ,...cats]);

}

function removeLastCat() {
    var newList = cats.slice(0, cats.length-1)
    return(newList);
}

function removeFirstCat () {
    var newestList = cats.slice(1)
    return (newestList);
}