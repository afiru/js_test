const s = Symbol();
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: 'value4'//[]:変数をオブジェクトとして定義する書き方
}

Object.prototype.method = function() {}
Object.defineProperty(Object.prototype, 'method', {
	enumerable: false
});

// Object.defineProperty(obj, 'prop1', {
// 	enumerable: false
// });列挙対象から外すにはdefineProperty()


// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty');
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(e)

for(let key in obj) {
	// if(obj.hasOwnProperty(key)) {hasOwnProperty()でobjにkeyがある場合にループ処理
		console.log(key, obj[key]);
	// }
}