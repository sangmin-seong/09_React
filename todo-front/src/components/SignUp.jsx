import React, { useState } from 'react';

import axios from 'axios';

/* [axios]
  - 비동기로 서버에 HTTP 요청을 보내고 응답을 처리하는데 
    유용한 라이브러리(브라우져, Node.js 모두 사용가능)
 
  - fetch는 js 기본 내장 되어있지만
    axios는 별도 설치(라이브러리 다운로드) 필요

  - fetch보다 간단하고 추가적인 기능을 제공
*/


/* 회원가입 컴포넌트 */
const SignUpComponent = () => {

  /* 상태변수 선언 */
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [name, setName] = useState('');

  // 아이디 중복 여부 결과를 저장할 변수
  const [idValidation, setIdValidation] = useState(false);

  // 회원가입 성공 여부를 저장할 변수
  const [result, setResult] = useState('');

  
  /**
   * 아이디 입력 시 중복검사 수행 
   * @param {*} e 
   */
  const idCheckHandler = e => {
    const inputId = e.target.value.trim(); // 입력된 값(공백제거)
    
    setId(inputId);

    if(inputId.length < 4) { // 4글자 미만인 경우
      setIdValidation(false); // 유효하지 않다고 기록
      return;
    }

    /* 비동기로 아이디 중복 검사 수행(axios) */
    axios.get(`http://localhost:8080/todo/idCheck?id=${inputId}`)
    .then(response => {
      // console.log(response);
      // console.log(response.data);

      const result = response.data; // 0 이면 중복 X, 1 이면 중복 O

      if(Number(result) === 0) setIdValidation(true);
      else                     setIdValidation(false);
    })
    .catch(err => console.error(err));
  }

  /* 가입버튼 클릭 동작 - 유효성 검사 */
  const signUpHandler = () => {

    // 아이디가 유효하지 않은 경우
    if(idValidation === false){
      alert('아이디가 유효하지 않습니다.');
      return;
    }

    // 비밀번호, 비밀번호 확인 중 하나라도 작성되지 않은 경우
    // 빈칸이 존재할 때
    if(pw.length === 0 || pwCheck.length === 0){
      alert('비밀번호가 입력되지 않았습니다.');
      return;
    }

    // 비밀번호/ 비밀번호 확인 값이 일치하지 않을 경우
    if(pw != pwCheck){
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    
    if(name.trim().length === 0){
      alert('이름이 입력되지 않았습니다.');
      return;
    }

    /* axios를 이용해서 비동기로 가입 요청 */
    axios.post(`http://localhost:8080/todo/signUp`, {
      "todoMemberId" : id,
      "todoMemberPw" : pw,
      "todoMemberName" : name
    })
    .then(response => {
      const result = response.data;

      if(Number(result) > 0){
        setResult(`${name}님의 회원가입을 환영합니다.`);

        // 가입 성공 시 입력했던 값 지우기
        setId('');
        setPw('');
        setPwCheck('');
        setName('');
      }else{
        setResult('실패');
      }
    })
    .catch(err => console.error(err));

  }


  return(
    <div className="signup-container">
      <label >
        ID : 
        <input type="text"
               onChange={idCheckHandler}
               className={idValidation ? '' : 'id-error'}
               value={id}/>        
      </label>
      <label >
        PW : 
        <input type="password"
               onChange={ (e) => {setPw(e.target.value)}} 
               value={pw}/>        
      </label>
      <label >
        PW Check : 
        <input type="password"
               onChange={ (e) => {setPwCheck(e.target.value)}}
               value={pwCheck}/>        
      </label>
      <label >
        NAME :
        <input type="text"
               onChange={ (e) => {setName(e.target.value)}} 
               value={name}/>        
      </label>
      <button onClick={signUpHandler}>가입하기</button>

      <hr/>

      {/* 회원가입 결과 메시지 */}
      <h3>{result}</h3>
    </div>
  )
}



export default SignUpComponent;