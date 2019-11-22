let arr=[55,2,6,45,1,4,51,]
function sort(arr) {
    var preIndex,current;
   for (let i=0;i<arr.length;i++){
       preIndex=i-1;
       current=arr[i];
       while (preIndex>=0&&arr[preIndex]>current){
           arr[preIndex+1]=arr[preIndex]; //在这里preindex+1的值其实就是current
           preIndex--;//
       }
       arr[preIndex+1]=current;//current 不变
   }
    return arr;
}

console.log(sort(arr));