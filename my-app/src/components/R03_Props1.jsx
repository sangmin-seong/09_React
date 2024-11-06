import React from 'react'; // imr 자동완성

/* 함수형 컴포넌트
    - 함수명은 무조건 대문자로 시작!(Java 클래스명과 동일)
*/
const PropsEx1 = (props) => {
  console.log("props : ", props);
  console.log("props.num : ", props.num);
  console.log("props.name : ", props.name);

  /* props에는 값 대입이 불가!!! 
    (아래 if문 오류 발생)
  */

  // if(props.name === undefined){
  //   props.name = '기본값';
  //   props.num = '0';
  // }

  return(
    <>
      <h3 className='red'>Props 예제 1</h3>

      {/* undefined 출력X */}
      <p>
        번호 : {props.num === undefined ? 0 : props.num}
         / 
        이름 : {props.name == undefined ? '기본값' : props.name}
      </p>
    </>
  );

}

export default PropsEx1;





