//* this 엄청 파보기!

//  1  //
// console.log(this); // * 요상태에서는 암것도 안나온다 {} 만 나온다..


//  2  //
console.log("밑도끝도없는 this : ", this);

function workThree(a, b) {
  console.log("함수 안에 this : ", this);
  return a + b;
}

console.log(workThree(1,2));


//  3  //
// * 객체 리터럴 만들기
let itsMe = {
  name : "백지원",
  age : 29,
  home : "대전",
  test : this,
  sentence : function() {
  // * 익명함수가 객체의 키로 할당된것 . sentence라는 식별자가 있는.사실상 이름이 있긴 한데 문법상으로는 이름없는 함수
  // * 키 안에 있기 때매 매서드랃고 해주는 것
  return this.name + "은 배고프다.";

  }
}


console.dir("객체에서 보는 this : ", itsMe );
// * 결과 : '객체에서 보는 this : '


//  4  //
console.log("메서드로 보는 this : ", itsMe.sentence());


