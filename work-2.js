// * class 사용시엔 첫 글자 대문자로 사용하는 것이 관례
// class WorkTwo {
// constructor(a,b){
//   this.a = a;
//   this.b = b;
//   }
// // * 규격 함수 만들기
// // * value는 a를 지칭한다. 첫번째 매개변수가 있어야 한다. 
// set a(value) {
//   if(typeof(value) === 'number') {
//     return this._a = value;
//     } else {
//       throw new Error("a는 숫자만 입력이 가능합니다");
//       // * new error 또한 생성자 함수 ( 불러오는것)
//       // ! 원하지 않는 것은 에러처리 해버리겠다. 에러는 반가운 일이다. 
//       // ! 에러 없이 실행되는 것이 사고다.
//       // ! 에러를 일부러 발생시키고 있다. 틀린 작성법이 아니다.
//     }
//   }
//   // * 관례적으로 언더바 ( 색터를 통과했다는  뜻)
// }

// let test = new WorkTwo("짜장",2);
// // * number 가 아니기에, 입력되지 않는다. 

// console.log(test);



// set b(value) {
//   if(typeof(value) === 'number') {
//     return this._b = value;
//     } else {
//       throw new Error("b는 숫자만 입력이 가능합니다");
//     }
//   }
// }

// // * 객체가 없다면 허락받지 못한다

// let test = new WorkTwo(1,"짬뽕");

// console.log(test);


// * 안돼서 ㄱ=밑에 강사코드 받음

// set b(value) {
//   if(typeof(value) === 'number') {
//     return this._b = value;
//     } else {
//       throw new Error("b는 숫자만 입력이 가능합니다");
//     }
//   }
// }

// // * 객체가 없다면 허락받지 못한다

// let test = new WorkTwo(1, 2);
// console.log(test);
// console.dir(test);
// console.log(test._a + test._b);


// // * 강사코드 

// class WorkTwo {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   set a(value) {
//     if(typeof(value) === "number") {
//       return this._a = value;
//     } else {
//       throw new Error("a는 숫자만 입력 가능합니다.");
//     }
//   }

//   set b(value) {
//     if(typeof(value) === "number") {
//       return this._b = value;
//     } else {
//       throw new Error("b는 숫자만 입력 가능합니다.");
//     }
//   }
// }

// add(){
//   return this._a + this._b;
// }


// let test = new WorkTwo(1, 2);
// console.log(test);
// console.dir(test);
// // * add 쓰면 이제 console.log(test.add()); 로만 써도 ㅇㅋ

// * 강사 전체 코드

class WorkTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if(typeof(value) === "number") {
      return this._a = value;
    } else {
      throw new Error("a는 숫자만 입력 가능합니다.");
    }
  }

  set b(value) {
    if(typeof(value) === "number") {
      return this._b = value;
    } else {
      throw new Error("b는 숫자만 입력 가능합니다.");
    }
  }

  add() {
    return this._a + this._b;
  }

}

let test = new WorkTwo(1, 2);
// console.log(test);
console.dir(test);
// console.log(test.add());



// 결과 : WorkTwo { _a: 1, _b: 2 } 'WorkTwo'가 제대로 맞는디 또 확인하는 것 
console.log(test instanceof WorkTwo);


// 덧셈 하나 하자고, "규격"을 만드는 이상한 짓 중
// 1. 타입을 여지 없이 만듦
// 2. 함수가 아닌 -> 매서드로 만듦
// ** 원하는 것이 아니면 절대로 가동되지 않음
// -> 인증 받은 형태. 까다로운 절차를 거친.

// * set 만 보면 깔끔함