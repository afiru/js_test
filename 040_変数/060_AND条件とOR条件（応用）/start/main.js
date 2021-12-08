function hello(name){
    name = name || 'Tom';
        console.log('hello'+name);
}
hello();
function hello2(name){
    if(!name){
        name = 'Tom'
        console.log('hello'+name);
    }    
}
hello2(); 
function hello3(name='Tom'){
    console.log('hello'+name);  
}
hello3();

