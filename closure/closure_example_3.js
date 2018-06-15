
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
        // 받아온 파라미터 firstName과 lastName을 사용하는 모습
    }
    return makeFullName;
}

var closure = showName("Michael", "Jackson");  // Your name is Michael Jackson
console.log(closure());


// 내부함수이자 클로저인 makeFullname을 리턴하는 외부함수 showName 예제이다.





showName = (firstName,lastName) => {
    const nameIntro = "Your name is ";
    // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
    makeFullName = () => console.log(nameIntro + firstName + " " + lastName);
    return makeFullName;
}

showName("Michael", "Jackson");  // Your name is Michael Jackson


//ES6 문법 적용