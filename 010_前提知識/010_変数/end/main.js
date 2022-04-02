/* 
function ab(){
    let count=0;
    for(let i=0;i>10;i++){
        
         setTimeout(ab,1000);
        
    }
           
} */

/* class Counter {
    constructor() {
        this.count = 0;
    }
    // `increment`メソッドをクラスに定義する
    increment() {
        // `this`は`Counter`のインスタンスを参照する
        this.count++;
    }
}
const counterA = new Counter();
const counterB = new Counter(); */



 /* function hello(name){
    console.log("--");
}
function fn(cb){
    cb();
}
setTimeout(function(){
    let count = 0;
    return count ++;
    fn(hello);
    //console.log(count);
 for(let key in count){
        console.log(key, count[key]);
        //console.log(count);
    } 
    
},1000); 

// let a = (1 + 2) * 3;
*/
/* let a = 0;
let b; 
 //let b = ++a;
 a = b = a + 1;
 //let b = a++;
//a = (b = a) + 1;
 console.log(a, b); */

/* function fn() {
	let a = 0;
	return a++;
}

console.log(!(fn() * 5));



function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);  */

/* function countUp(){
    let count = 0;
    if(count > 10){ 
        count +2;
        return count;
    }else{
        return alert("10だよ");
    }
} */


//fn(countUp);



