var double = function(x){
    return x*2;
}

// 箭頭函數
const double = (x) => {
    return x*2;
}

// 參數如果只有一個可以省略小括號
const double = x => {
    return x*2;
}

// 如果函式本體只有一行，而且是return可以接在箭頭後面
const double = x => x*2;

// arr.amp
arr.map(function(elm, idx){
    return elm + idx;
});

arr.map((elm, idx) => elm + idx);

// 監聽
btn.addEventListener('click', () => console.log('Hi'));


// 自動綁定-箭頭函式內部的 this 與外部相同
const a = () => {
    console.log(this);
}
console.log(this);

// 視情況
var b = function(){
    console.log(this);
}
console.log(this);

// this
// this就是context 函式的情境

// 直接執行：window(global)
var name = 'Heisenburg'
var sayMyName = function(){
    console.log(this.name);
}

// 作為物件的成員函式執行：this就是該物件
var teacher = {
    name: 'White',
}
teacher.sayMyName = sayMyName;

sayMyName(); // Heisenburg
teacher.sayMyName(); // White

// <button id='btn' name='God damn right'>Response</button>
// 作為 dom 的監聽函式執行：this就是該 dom
btn.addEventListener('click', sayMyName);
// God damn right

// 如果都用箭頭函式，this就都會是window下，this.name為Heisenburg