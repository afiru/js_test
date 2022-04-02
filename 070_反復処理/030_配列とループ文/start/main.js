var intervalId; //タイマー番号をグローバル変数として宣言
//startボタンを押すと5秒間隔でalert()が実行
function startInterval(){
	intervalID = setInterval('counter();', 1000);
}
 
//stopボタンを押すとタイマーを停止
function stopInterval(){
	clearInterval(intervalID);
}
let count = 0;
const txt = document.querySelector('h5');
function counter() {
    
    console.log(count);
    txt.textContent = count++;
}
