
var plusOne = function(digits) {
   var num=  parseInt(digits.join(""))

    num+=1;
    let str=num.toString();

   let arr= str.split("")

    return arr.map(Number)
};
var arr=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(arr));