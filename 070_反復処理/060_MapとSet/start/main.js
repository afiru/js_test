//object
//キー：文字列
//for in ：〇
//for of ：×

//Map
//キー：制約なし
//for in : ×
//for of : 〇
const map = new Map();
const key1 = {};
map.set(key1, 'value1');
console.log(map.get(key1));

const key2=function(){}
map.set(key2,'value2');
console.log(map.get(key2));

let key3= 0;
map.set(key3,'value3');
console.log(map.get(key3));

let key33;//宣言だけして
map.set(key33=0,'value33');//ここで初期値を入れることも可能
console.log(map.get(key33));

map.delete(key3);
console.log(map.get(key3));

for(const m of map){
    console.log(m);
}
for(const [k,v] of map){
    console.log([k,v]);
}
//Array
//重複値 : 〇
//for in : 〇
//for of : 〇

//Set
//重複値 : ×
//for in : ×
//for of : 〇

const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);
console.log(s.has(key2));//ありなし確認
const arry=Array.from(s)//配列に直す
//const arry = [...s]; 上と同じ（スプレット構文）
console.log(arry);
for(let p of s){
    console.log(p);

}

