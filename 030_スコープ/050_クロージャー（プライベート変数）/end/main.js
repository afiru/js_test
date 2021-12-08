function incrementFactory() {
    
    let num = 0;//②が実行されたタイミングに初期化されるのでbb();で何度呼び出しても初期化されない

    function a() {
        num = num + 1;
        console.log(num);
    }

    return a;//①関数をreturnで返す
}

const bb = incrementFactory();//②関数を変数に代入する　

bb();//内部で呼び出された関数を呼んでいることになるので②が初期化されなくてすむ
bb();
bb();
bb();