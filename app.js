function sumTwoMinElem(array) {
    if (Array.isArray(array)){
        if (array.length > 1){
            return getSumMinTwoElements(array);
        }
        else if (array.length === 1){
            return array[0];
        }
        else{
            return 'Array is empty';
        }
    }
    else {
        return array;
    }
}


function getSumMinTwoElements(array){
    let useArray = array.slice();
    let min1 = Math.min.apply(Math, useArray);
    let ind = useArray.findIndex(item => (+item) === min1);
    useArray.splice(ind, 1);
    let min2 = Math.min.apply(Math, useArray);
    return (+min1)+(+min2);
}


module.exports = {
    sumTwoMinElem
}


function main(){
    var arr = [1,2,3,4,5];
    console.log(sumTwoMinElem(arr));
}

main()
