class Person{
  constructor(name,age){
      this.name = name;
      this.age = age;
  }
  hello() {
    console.log('hello ' + this.name);
  }
}

const bob = new Person('bobo' , 23)
console.log(bob.hello)
//シンタックスシュガー↑
/* 
コンストラクタ関数
function Person(name, age) {
  this.name = name;
  this.age = age;
} */

/* 
メソッド
Person.prototype.hello = function() {
  console.log('hello ' + this.name);
} */