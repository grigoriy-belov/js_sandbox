function arraySort(array) {
    let copyArr = [];
    while(array.length >0) {
        copyArr.push(array.splice(array.indexOf(Math.min(...array), 1))[0]);
    }
    array = copyArr;    
    return array;
}

let arr = [5,4,3,2,1];
console.log(arraySort(arr));