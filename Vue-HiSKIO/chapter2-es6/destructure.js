// 解構賦值 Destructure Assignment
const nums = [1, 2, 3];

// 原本
const first = nums[0];
const second = nums[1];
// 陣列解構，與上面結果相同
const [first, second] = nums;

// 或是用let
let first;
let second;
[first, second] = nums;
const result = first * second;
// ---------------------------------------


// 預設值
const nums = [10, 20];
const [first, second, third =30] = nums;


// ---------------------------------------
// 忽略元素
const nums = [1, 2, 3, 4];
const [, second] = nums;

// ---------------------------------------
// 變數交換
let a = 1;
let b = 2;

// 原本
let tmp = a;
a = b;
b = tmp;

//解構賦值陣列交換
[a, b] = [b, a]


// ---------------------------------------
// 剩餘部分
const nums = [1, 2, 3, 4];
// 除了first以外都取出
const [first, ...others] = nums;
first === 1;
others // [2,3,4];

// -------------------------------------------------------------------
// 物件解構
const point = {
    x: 100,
    y: 150,
};
// 原本
const x = point.x;

// 物件解構
const {x, y} = point;

// 預設值
const {x, y, z =0} = point;

// 指派新名稱
// 原本
const px = point.x

// 重新命名機制
const {x:px, y:py} = point;

// -------------------------------------------------------------------
// 解構函式參數
function distance(point){
    // 原本
    return Math.sprt(point.x*point.x + point.y*point.y);
    // 解構
    const{x, y} = point;
    return Math.sprt(x*x + y*y);
}

// 解構
function distance({x,y}){
    return Math.sprt(x*x + y*y);
}


