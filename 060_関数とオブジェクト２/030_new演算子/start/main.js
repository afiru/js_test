function F(a, b) {
    this.a = a;
    this.b = b;
    //return 1;//returnの値がオブジェクト以外の場合、 returnがない場合と同じF{a:a,b:2}が表示される
    return {};
}

F.prototype.c = function(){  
}

function newOpi(C, ...args){
    console.log(this);
    const _this = Object.create(C.prototype);
    console.log(_this);
    const result = C.apply(_this, args);
    console.log(_this);
}
const instant = newOpi(F,2,3);
console.log(instant);
//F {a: 1, b: 2}a: 1b: 2__Prototype__ Object c: ƒ () 
//コンストラクタにreturn {}があった場合はprototypeが存在しないことになる
function newOpe(C, ...args){
    const _this = Object.create(C.prototype);//コピーして空の要素を作る
    const result = C.apply(_this, args);
    //console.log(typeof result);
    if(typeof result === "Object" && result !== null){
        return result;
    };
    return _this;

}

const instance = newOpe(F,1,2);


//console.log(instance);