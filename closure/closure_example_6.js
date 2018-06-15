first = (str , str2) => {
    second = () => "hello " + str + " " + str2 + "?";
    return second;
}

let catcher = first("park","gun");
console.log(catcher());


// 내부함수 second가 first의 파라미터 2개를 가져와 문자열을 이어붙이는 함수.
// 역시나 클로저의 역할을 수행하고 있다.
