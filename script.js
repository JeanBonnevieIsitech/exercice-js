// fonctions

function findLargestNumber(tabNumber){
    return Math.max(...tabNumber)
}

const sortWords = (tabWords) => tabWords.sort()

function countOccurrences(chaine, charToCount){
    let count=0

    // for (var i=0;i<chaine.length;i++){
    //     if (chaine[i] ==charToCount){
    //         count++
    //     }
    // }

    for (let char of chaine){
        if (char.includes(charToCount)){
            count++
        }
    }

    return count
}

function flattenArray(nestedTab){
    return nestedTab.flat(Infinity)
}

function removeDupes(tabNum){
    const numSet = new Set();
    for (let num of tabNum){
        if (!numSet.has(num)){
            numSet.add(num)
        }
    }

    return numSet
}

function swapVariables(x, y){
    [x, y] = [y ,x]
    return [x,y]

}

function parseObject(anObject){
    tab =[]
    for (attribute of Object.values(anObject)){
        tab.push(attribute)
    }

    return tab
}

function mergeObjects(...Objects){
    return Object.assign(...Objects)
}

function sumArray(tabNum){
    sum = 0
    for (number of tabNum){
        sum+=number
    }

    return sum
}

function sortObject(anObject){
    tab = []
    for (attr of Object.entries(anObject)){
        tab.push(attr)
    }

    return  tab.sort()
}

// Appels

console.log(findLargestNumber([1,6,3,2]))

console.log(sortWords(["Fromage","Arbre","Bibliothèque"]))

console.log(countOccurrences("Bonsoir Paris",'i'))

console.log(flattenArray(
    [1,[2,[[[[[[[[[[[[[[3,4,5,6]]]]]]]]]]]]]]]]
))

console.log(removeDupes([1,1,4,6,8,8,9,3,5,3,2,2]))

console.log(swapVariables(5,12))

console.log(parseObject({a:123,b:456,c:'test'}))

console.log(mergeObjects(
    {a:123,b:456},
    {c:'789',d:'101112'}
))

console.log(sumArray([12,4,6,8]))

console.log(sortObject(
    {b:32,c:"La boule magique",a:true}
))