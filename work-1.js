
function workOne(a,b){
  if (typeof(a) === 'number' && typeof(b) === 'number' ){
  
      let local = a+b;
      return local;
    
  } else {
    console.error("매개변수 잘못 작성됨");
  }
};

// * work-2.js 와 비교!
//* 단도직입적인 조건. 조건식을 많이 읽어야 한다