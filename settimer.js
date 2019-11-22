f();
function f() {
    console.log(2)
    setTimeout(function () {
         f();
    },2000)
}