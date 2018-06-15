let secret = secretCode => {
    return {
        saySecretCode () {
            console.log(secretCode)
        }
    }
}
const theSecret = secret('CSS Tricks is amazing')
theSecret.saySecretCode()


// 함수가 아닌 함수객체를 반환하여 theSecret에 담아 메서드로 사용하는 형식이다.
// function 키워드가 없음에도 에러가없는 이유는 함수 리턴이 아닌 함수객체 리턴이기 때문이다.
