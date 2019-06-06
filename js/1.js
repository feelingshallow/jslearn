 window.onload=function(){
let box=document.querySelector('.box')
console.log(box);
     box.addEventListener('click',function () {
         box.style.background='red'
})
     box.addEventListener('click',fn)
       function fn() {
           box.style.height='150px'
       }



 }