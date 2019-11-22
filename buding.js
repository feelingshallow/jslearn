 function pick( src,...keys ){
                let target = Object.create( null );//创建一个空对象,跟new Object不同
                 for( let i = 0, len = arguments.length; i < len; i++ ){
                         target[keys[i]] = src[keys[i]];
           }
                 return target;
            }
        let user = {
                name : 'ghostwu',
                 age : 22,
                sex : 'man',
           };
        var obj = pick( user, 'name', 'age' ); //拷贝user对象的name和age属性
        console.log( obj ); //{name: "ghostwu", age: 22}
