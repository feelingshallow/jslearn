var quickSort = function(arr) {
    if (arr.length<=1){
        return arr;
    }
     var pivotIndex=Math.floor(arr.length/2);
     var pivot=arr.splice(pivotIndex,1)[0];
     var right=[];
     var left=[];
     for (var i=0;i<arr.length;i++){
         if (arr[i]<pivot){
             left.push(arr[i]);
         }else{
             right.push(arr[i])
         }
     }
     return  quickSort(left).concat([pivot], quickSort(right));
};
let arr=[12,5,62,48,3,56];
console.log(quickSort(arr));