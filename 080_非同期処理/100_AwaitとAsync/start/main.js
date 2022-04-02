
function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init(){
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  if(val === null){
    throw new Error();
  }
  return val;//initにthenでつなぐためにreturnでvalをかえした
}
init().then(function(val){
  console.log('hello'+val);
});
/* sleep(0).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}) */
