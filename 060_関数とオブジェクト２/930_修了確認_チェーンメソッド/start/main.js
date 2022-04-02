/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
class Calculator{
	constructor(){
		this.val = null;
	}
	set(val){
		if(val===null){
			this.val = val;
		}else{
			this.val+val;
			console.log(this.val+val);
			console.log("aaa");
		}
	}
	
}
const calc = new Calculator();

calc.set(10)
	//.plus()
	//.set(3)
/* 	.multiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2) */
