
function outerFunction () {
    const outer = 'I see the outer variable!'
    function innerFunction() {
        console.log(outer)
    }
    return innerFunction
}
outerFunction()();// I see the outer variable!


// outerFunction에서 나온 클로저인 innerFunction을 실행하는 함수
// outerFunction()으로 리턴값 함수를 전달 받은후 ()로 즉시 실행하여 콘솔을 출력한다.
// 물론 이미 생명주기가 끝난 outerfunction의 자유변수인 outer를 출력할 수 있기때문에 클로저의 역할을 한다고 볼 수 있다.




