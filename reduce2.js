let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//使用reduce来查找数组种元素重复的次数， reduce的第二个参数是初始值，指定了pre的类型 和值 比如这个函数的第二个参数就是对象
let nameNum = names.reduce((pre,cur)=>{
    if(cur in pre){
        pre[cur]++
    }else{
        pre[cur] = 1
    }
    return pre
},{})

// 使用reduce来将二维数组转化成为1维数组
 let arr=[[1,2],[3,4],[5,6]]
let zhuanhua=arr.reduce((pre,cur)=>{
    return  pre.concat(cur);

},[])
console.log(zhuanhua);