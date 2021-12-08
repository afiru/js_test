class Person{
  constructer(name, age) {
      this.name = name;
      this.age = age;
  }
  hello(){
    console.log('hello'+this.name);
  }
}

const taro = new Person('Taro', 23);
console.log(taro);
