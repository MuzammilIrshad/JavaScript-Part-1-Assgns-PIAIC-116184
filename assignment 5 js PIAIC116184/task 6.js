// JavaScript source code
function mirror(arr1) {
    var arr2 = arr1.slice(0).reverse();
    var arr3 = arr1.concat(arr2);
    //console.log(arr2);
    //console.log(arr1);
    console.log(arr3);
}
mirror([0, 5, 6, 7]);
mirror([1, 2, 3, 4]);