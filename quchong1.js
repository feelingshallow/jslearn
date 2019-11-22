// 第一种方法使用Set数据结构进行去重
// function unique(arr) {
//      return Array.from(new Set(arr))
// }

// 第二种方法嵌套循环使用splice去重
//  function unique(arr) {
//      for (var i=0;i<arr.length;i++){
//           for (var j=i+1;j<arr.length;j++){
//               if (arr[i]===arr[j]){
//                   arr.splice(j,1);
//                   j--;
//               }
//           }
//      }
//      return arr
//  }
// 第三中方法使用index of去重 index of 方法找到第一次出现的值的下标通过下标引入到新数组
//   function unique(arr) {
//       let array=[];
//       for (let i=0;i<arr.length;i++){
//          if (array.indexOf(arr[i])===-1){
//              array.push(arr[i])
//          }
//       }
//       return array
//   }
 //第四种方法 先将数组进行排序然后 对两个值进行比较 推到新数组去
// function unique(arr) {
//     for (let i=0;i<arr.length;i++){
//         for (let j=i+1;j<arr.length;j++){
//             if (arr[i]>arr[j]){
//                   let temp=0;
//                   temp=arr[i]
//                   arr[i]=arr[j]
//                  arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// function f(arr) {
//   let array=[]
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]!==arr[i+1]){
//             array.push(arr[i])
//         }
//     }
//     return array
// }
//第5种方法 使用reduce()方法
var arr=[1,1,2,3,2,5,6,5,3]
let newArr=arr.reduce((pre,cur)=>{
    if (!pre.includes(cur)) {
      return pre.concat(cur)
    }else {
      return pre
    }
},[])

console.log(newArr);
