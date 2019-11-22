let arr=[5,3,5,46,134,1,385,4,3,42,1]
function sort(arr) {
    for (let i=0;i<arr.length-1;i++){
        for (let j=0;j<arr.length-1-i;j++){
                if (arr[j]>arr[j+1]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
            }
        }
    }
    return arr;
}

console.log(sort(arr));