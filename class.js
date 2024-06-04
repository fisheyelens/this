
class ItsMe {
  constructor(){
    this.name = "백지원",
    this.age = 31,
    this.home = "대전"
  }

sentence() {
  return this.name + "은 눈이 아프다";
  }
}

let itsMe = new ItsMe();
console.log(itsMe);

// 결과 : ItsMe { name: '백지원', age: 31, home: '대전' }
// 고정값이 된다. " JAVA 가 된다!! JAVA 변수 선언 이렇게 쓴다"
// * 객체 지향 언어에서는 이게 기본이다.


