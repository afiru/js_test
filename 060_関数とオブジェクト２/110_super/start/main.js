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

class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
//console.log(taro);
//taro.bye();

const american = {
    hello(){
        
        console.log(this.name);
    }
}
const bob = {
    name:'Bob',
    hello(){
        console.log('こんにちは'+this.name);
    }
}
Object.setPrototypeOf(american,bob);
american.hello();
// const american = {
//     hello() {
//         console.log('hello ' + this.name);
//     }
// }

// const bob = {
//     name: 'Bob',
//     hello() {
//         super.hello();
//     }
// }
