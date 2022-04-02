class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
    
    bye() {
        console.log('Sayonara ' + this.name);
    }
}

class Japanese extends Person{
    constructor(name,age,gender){
        super(name,age);//親のを継承したクラス内で呼び出す時に利用
        //this.gentder = gender;//superキーワードの前にthisの記述をするsuperを利用できなくなるので後述すること
    }
    hello() {
        super.hello();//メソッド内でもsuperで親のメソッドを初期化して利用することができる
        const arry = {0:"いちご",1:"みかん",2:"パイナップル"};//superで呼び出したものにたしてみた
        console.log('Konnichiwa ' + this.name+ arry[0]);
    }
}
const taro = new Japanese("Taro",13,"おんな");
taro.hello();
console.log(taro);

//オブジェクト同士でsuperの利用もできる
const american = {
    hello(){
        console.log('hello' + this.name);
    }
}
const bob = {
    name:'ぼぶ',
    hello(){
        //console.log('hello' + this.name);
        super.hello();
    }
}

Object.setPrototypeOf(bob,american);
//Object.setPrototypeOf(オブジェクト01,オブジェクト01をprototypeにするオブジェクト);
//第一引数に指定したオブジェクトが、第二引数のオブジェクトの内部プロパティ[prototype]に設定
bob.hello();
//console.log(Object.getPrototypeOf(bob));







