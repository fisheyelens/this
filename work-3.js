//* this 엄청 파보기!

// console.log(this); // * 요상태에서는 암것도 안나온다 {} 만 나온다..


console.log("밑도끝도없는 this : ", this);

function workThree(a, b) {
  console.log("함수 안에 this : ", this);
  return a + b;
}

console.log(workThree(1,2));
