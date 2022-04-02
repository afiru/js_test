const arry = ['a', 'b', 'c'];

for(let a of arry){
    console.log(a);
}
for(let b in arry){
    console.log(b);
}

const obj = {
    prop1: 'value1',
    prop1: 'value2',
    prop1: 'value2'
}

/* for(let c of obj){
    console.log(c);
} */
for(let d in obj){
    console.log(d);
}

//オブジェクトのプロパティをとるときはin
//配列などはof

const s = new Set();
s.add(key1);
console.log("---");
