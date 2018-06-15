function celebrityID() {
    let celebrityID = 999;
    // 우리는 몇개의 내부 함수를 가진 객체를 리턴할것입니다.
    // 모든 내부함수는 외부변수에 접근할 수 있습니다.
    return {
        getID: function() {
            // 이 내부함수는 갱신된 celebrityID변수를 리턴합니다.
            // 이것은 changeThdID함수가 값을 변경한 이후에도 celebrityID의 현재값을 리턴합니다.
            return celebrityID;
        },
        setID: function(theNewID) {
            // 이 내부함수는 외부함수의 값을 언제든지 변경할 것입니다.
            celebrityID = theNewID;
        }
    }
}
let mjID = celebrityID(); // 이 시점에, celebrityID외부 함수가 리턴됩니다.
console.log(mjID.getID()); // 999
mjID.setID(567); // 외부함수의 변수를 변경합니다.
console.log(mjID.getID()); // 567; 변경된 celebrityID변수를 리턴합니다.


// celebrityID를 외부로부터 값 직접변경이 불가능 하도록 클로저를 응용한 예제
// 내부함수인 getID와 setID는 체이닝을 통해 celebrityID에 접근이 가능하지만
// 메소드를 거치지 않고 celebrity를 수정하는 방법은 거의 없다.


