let arr=[12,5,6,1];
function sort(arr) {
    for (let i=0;i<arr.length;i++){
        for (let j=i;j<arr.length;j++){
              if (arr[j]<arr[i]){
                let temp=0;
                temp=arr[j];
                arr[j]=arr[i]
                arr[i]=temp;
              }
        }
    }
    return arr;
}

console.log(sort(arr));