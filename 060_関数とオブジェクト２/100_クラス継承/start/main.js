class Person{
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  hello(){
    console.log('こんにちは'+this.name);
  }
}
//プロトタイプ継承のクラス版
class Japanese extends Person{
    constructor(name, age, gender){
      super(name, age,gender);//Person.call(this, name, age);をクラスで呼ぶときはsuper　
      this.gender = gender;
    }
    hello() {
      super.hello();//super 親のコンストラクタやメソッドを呼ぶ関数
      console.log('Konnichiwa ' + this.name);
    }
    bye() {
      console.log('Sayonara ' + this.name);
    }
}


const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();
taro.hello();

