const person = {
    name: 'Tom',
    bye() {
        console.log('Bye ' + this.name);
    },
    //↑正しいbye(){}無名関数の書き方は　省略する
    hello: function (greeting) {
        //console.log(greeting + '' + this.name);
        return greeting + '' + this.name;
    },
    konchiwa: function (konchiwa) {
        console.log(konchiwa);
    },
   /*  アロー関数
   hello1s(greeting) {
        //console.log(greeting +  ' ' + this.name);
        //return greeting +  ' ' + this.name;
        const a = () => console.log(greeting +  ' ' + this.name);
        return a;
    } */
    hello1s: function() {
        setTimeout(this.hello.bind(this,'hello'),1000)
    }

    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * `person.hello1s()` 
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
}
//setTimeout(person.hello1s("hello"),1000);
//setTimeout(person.hello1s("hello"),1000);
person.hello1s();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
//console.log(person);
//setTimeout(person.hello.bind(null,"hello"),1000);
//setTimeout(person.hello.bind(person,"hello"),1000);
//setTimeout(person.konchiwa.bind(person,"こんちわ"),1000);
// setTimeoutは第一引数に関数をとる

 
/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
 //alert(person.hello("Hello"));
 //alertの引数は文字列
 
/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
//setTimeout(person.bye.bind(person), 1000);