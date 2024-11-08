import React, { useState } from 'react';

const StateReview2 = () => {
  
  const [todoList, setTodoList] = useState([]);
  
  
  // StateReview2에서만 사용가능한 자식 컴포넌트
  const InputTodo = () => {
    
    // input 태그의 값을 저장할 상태 변수
    const [inputText, setInputText] = useState('');

      
    // 추가하기 버튼 동작
    const addTodoHandler = () => {

      // 할일이 추가되지 않은 경우
      if(inputText.trim().length === 0) return( alert("내용을 입력하세요.") );

      const todo = {"text" : inputText, "complete" : false};
      
      // 기존 todoList + 새로운 todo 추가된 배열 생성
      const newTodoList = [...todoList, todo];

      // 새 배열을 todoList에 대입
      setTodoList(newTodoList);

      setInputText('');
    }
    return(
      <div>
        <h3>할 일 추가</h3>
        <input type="text"
               onChange={(e)=>{ setInputText(e.target.value) }}
                />
        <button onClick={addTodoHandler}>추가하기</button>
      </div>
    );
  }

  /* 체크 변경 시 수행하는 함수 */
  const todoChange = (index) => {

    // todoList 배열 깊은 복사
    const tempTodoList = [...todoList];

    // index번째 요소에 저장된 completed 값을 반대로 변경
    tempTodoList[index].completed = !tempTodoList[index].completed;

    // todoList를 tempTodoList로 변경
    setTodoList(tempTodoList);
  }
  
  return(
    <div>
      {/* 자식 컴포넌트 추가 */}
      <InputTodo/>

      <ul>
          {/* <li>
            <input type="checkbox" />
            <span>프로젝트</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>점심먹기</span>
          </li> */}
        {todoList?.map( (item, index) => {
          return(
            <li key={index}>
              <input type="checkbox"
                     onChange={ () => { todoChange(index) } } />
              <span className={item.completed ? 'completed' : ''}>{item.text}</span>
            </li>
          );
        } )}
      </ul>
    </div>
  );
}

export default StateReview2;