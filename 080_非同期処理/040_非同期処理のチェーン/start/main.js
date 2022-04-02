function sleep(callback){
    setTimeout(function(){
        console.log("--")
        callback();
    },1000);
}

sleep(function(){
    console.log("back");
});
    