$=function () {
    return Fn
}
function Fn(selector) {
    let fristchar=selector.trim().charAt(0)
    let elems;
   if(fristchar=='.'){
       let classname=selector.substring(1)
       elems=document.getElementsByClassName(classname)
   }else {
     elems=document.getElementsByTagName(selector)
   }
    console.log(elems);
    for (let i=0;i<elems.length;i++){
     this[i]=elems[i]

 }
 this.length=elems.length
}
Fn.prototype.html=function(value){
for(let i=0;i<this.length;i++){
  this[i].innerHTML=value
}
 return this
}
Fn.prototype.css=function(obj){
  for (let i=0;i<this.length;i++){
      for(let j in obj){
          this[i].style[j]=obj[j]
      }
  }

}
Fn.prototype.click=function () {
  for (let i=0;i<this.length;i++){
      this[i].addEventListener('click',function f() {
          console.log(1);
      })
  }
}