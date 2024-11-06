import React, {useState} from "react";

// 함수형 컴포넌트
// 1. 함수 생성하기
// 2. return 구문에 출력하고자 하는 html 코드 작성
// 3. 만든 함수를 export default 지정하기

function FunctionEx(){

  // 구조 분해 할당
  // - 배열, 객체에 저장된 값을 각각의 변수에 꺼내서 할당하는 기술
  // ex) 객체
  // const obj = {a:10, b:10};
  // const {a, b} = obj;

  // ex) 배열
  // const arr = [100, 200];
  // const [first, second] = arr;
  const [count, setCount] = useState(0);
     // [0, count 값을 바꿀 수 있는 메서드]
  
  // 클릭 시 count 1 감소
  const clickHandler = () => {
    setCount( () => {return count - 1} )
  }

  return(
    <>
      <h2>함수형 컴포넌트 입니다!!!</h2>
      <h2>{count}</h2>
      <button onClick={clickHandler}>1 감소</button>
    </>
  );
}

export default FunctionEx;