
function incrementFac(){
    let num = 1;
    function increment(){
        num = num+8;
        console.log(num);
    }
    return increment;
}
const increment = incrementFac();
increment();
increment();
increment();

