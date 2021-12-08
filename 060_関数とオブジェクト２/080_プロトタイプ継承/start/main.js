function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name,age){
  Person.call(this,name,age)
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function(){
  
}

const taro = new Japanese('たろ',23);
console.log(taro);
taro.hello('こんちは');
taro.bye();