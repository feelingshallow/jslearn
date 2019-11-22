function arrFunc(){
    var arr=[];
    for(var i=0;i<10;i++){
        arr[i]=function(num){
            return function () {
              return num;
            };
        }(i);
    }
    return arr;
}


console.log(arrFunc());