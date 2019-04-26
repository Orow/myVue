function greet(name){
    console.log('Hello, ' + name + '!');
    // 字串模板 string template - 反引號``插入表達式
    console.log(`Hello, ${name}!`)
}
// Expression 表達式
// Statement 陳述式
greet('Tom');  // Hello, Tom!

function greet(name, days){
    console.log(`Hello, ${name}! It's been ${days * 24}hours.`)
    console.log(`Hello, ${name}! ${(days < 7)? '' : 'Long time no see!'}`)
}
greet('Jack', 3);


// 多行字串，ES6反引號中可以多行
const words = `
    dddd
    dddddddddd
    dddddddddddd
`;