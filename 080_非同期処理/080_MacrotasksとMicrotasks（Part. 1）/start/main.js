/*
④マイクロタスク（タスクキュー）
順番が回ってきたらすべてのジョブを実行
グローバルコンテキスト終了後
setTimeout
setInterval
requestAnimationFrame(フレームに合わせて非同期処理)
*/
setTimeout(function task1() {
  console.log('task1');
});
/*
マクロタスク（ジョブキュー）
順番が回ってきたら一つずつタスクを実行
Promise
queueMicrotask
MutationObserver
*/
new Promise(function promise(resolve) {
  /*①非同期処理同期的に処理*/
  console.log('promise');
  resolve();
   /*③グローバルコンテキスト終了後*/
}).then(function job1() {
  console.log('job1');
});
 /*②グローバルコンテキスト*/
console.log('global end');
