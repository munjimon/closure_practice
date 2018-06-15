let number_count = (() => {
    let private_number = 0;
    change_number = (number) => private_number += number;

    return {
        plus: () => {
            change_number(1)
        },
        minus: () => {
            change_number(-1)
        },
        value: () => {
            return private_number;
        }
    }
})();

console.log(number_count.value());
number_count.plus();
console.log(number_count.value());
number_count.plus();
console.log(number_count.value());
number_count.minus();
console.log(number_count.value());


/*
    자바스크립트에는 private 키워드를 제공하지 않지만
    클로저를 이용하여 유사하게 구현이 가능하다.
    private_number를 외부에서는 직접 접근이 못하게 차단한 후
    함수객체를 리턴하여 메소드로만 값을 조정 가능하게 만들었다.

    익명함수를 즉시 호출한 뒤 함수객체를 리턴받고
    number_count의 메소드로 사용한다.
*/