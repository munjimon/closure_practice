function Hello(name) {
    this._name = name;
}
Hello.prototype.say = function() {
    console.log('Hello, ' + this._name);
}
var hello1 = new Hello('승민');
var hello2 = new Hello('현섭');
var hello3 = new Hello('유근');

hello1.say(); // 'Hello, 승민'
hello2.say(); // 'Hello, 현섭'
hello3.say(); // 'Hello, 유근'
hello1._name = 'anonymous';
hello1.say(); // 'Hello, anonymous'

// Private 변수로 사용하고 싶은 _name 변수지만 외부에서 쉽게 접근하여 값을 바꾸기 쉽다.
// 클로저를 사용하여 은닉화 해보자.



function hello(name) {
    var _name = name;
    return function() {
        console.log('Hello, ' + _name);
    };
}
var hello1 = hello('승민');
var hello2 = hello('현섭');
var hello3 = hello('유근');
hello1(); // 'Hello, 승민'
hello2(); // 'Hello, 현섭'
hello3(); // 'Hello, 유근'

// _name에 대해서는 직접 접근하지 못하도록 바꾼 모습이다.


let hello = name => {
    let _name = name;
    return () => console.log('Hello, ' + _name);
}
let hello1 = hello('승민');
let hello2 = hello('현섭');
let hello3 = hello('유근');
hello1(); // 'Hello, 승민'
hello2(); // 'Hello, 현섭'
hello3(); // 'Hello, 유근'

//ES6 문법 적용





