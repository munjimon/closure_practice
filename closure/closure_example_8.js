let i;
for (i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}

// 0.1초마다 i를 출력하는 setTimeout안의 익명 함수
// 언뜻 보기엔 0.1초마다 1씩올라가며 1초만에 10이 나와야 정상이지만
// 결과값은 전부 10이 10번 출력된다
// 이유는 익명함수가 0.1초 뒤에 호출되기 시작하는데
// 그 전에 이미 반복문은 10까지 다 돌아가있는것이며
// 익명함수는 이미 10이 되어버린 i를 참조해 10을 10번 출력하는것이다.

let i;
for (i = 0; i < 10; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, 100);
    })(i);
}

/*
    i를 외부익명함수의 파라미터인 j에게 전달하고
    setTimeout안에 있는 익명함수는 체이닝을 통해 외부익명함수의 j를 참조하여
    정상적으로 1씩 올라가며 출력된다.
*/
