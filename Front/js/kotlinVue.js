var adaptMethods = function(obj){
    if (obj!=null){
        for (let prop of Object.getOwnPropertyNames(obj)){
            let func = obj[prop];
            obj[prop]=function(...args){
                return func(...args,this)
            }
        }
    }

    return obj
}
var adaptHooks = function(hook){
    return !hook? null: function(){
        return hook(this)
    };
}

var createVue = function(obj){
    new Vue(obj)
}
let __Array = []
__Array.__proto__.add=function(v){
    this.push(v)
}

Object.defineProperty(__Array.__proto__, 'size', {
    get: function(){
        return this.length
    }
});