function F(a, b) {
    this.a = a;
    this.b = b;
    return {a: 1};
}

const a = new F(1,2);


console.log(a);