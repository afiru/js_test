window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        //console.log('Hello ' + this.name);
    }
}


function fn(ref){
    console.log(person);
    //let v = person.hello;
}
fn(person);
