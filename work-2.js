// * class 사용시엔 첫 글자 대문자로 사용하는 것이 관례
class WorkTwo {
constructor(a,b){
  this.a = a;
  this.b = b;
  }
// * 규격 함수 만들기
// * value는 a를 지칭한다. 첫번째 매개변수가 있어야 한다. 
set a(value) {
  if(typeof(value) === 'number') {
    return this._a = value;
    } else {
      throw new Error("a는 숫자만 입력이 가능합니다");
      // * new error 또한 생성자 함수 ( 불러오는것)
      // ! 원하지 않는 것은 에러처리 해버리겠다. 에러는 반가운 일이다. 
      // ! 에러 없이 실행되는 것이 사고다.
      // ! 에러를 일부러 발생시키고 있다. 틀린 작성법이 아니다.
    }
  }
  // * 관례적으로 언더바 ( 색터를 통과했다는  뜻)
}

let test = new WorkTwo("짜장",2);
// * number 가 아니기에, 입력되지 않는다. 

console.log(test);