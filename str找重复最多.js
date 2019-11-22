let str="assdniukjasdbdasvasbdl"
function f(str) {
    var obj={}
    for (let i=0;i<str.length;i++){
        if (!obj[str.charAt(i)]){
            obj[str.charAt(i)]=1
        }else {
            obj[str.charAt(i)]++
        }
    }
    console.log(obj);
}
f(str)