import React, { createContext, useContext } from 'react'

/* Context 객체 생성(createContext) */
const TestContext = createContext();



/* 후손 컴포넌트 */
const GrandChild = () => {

  // TestContext에서 제공하는 값을 가져와 
  // text 변수에 저장
  const text = useContext(TestContext);

  return(
    <>
      <h3>GrandChild Component</h3>
      <em>{text}</em>
    </>
  );
}


/* 자식 컴포넌트 */
const Child = () => {
  return(
    <>
      <h3>Child Component</h3>
      <GrandChild/>
    </>
  );
}


/* 부모 컨포넌트 */
const Parent = () => {
  return(

    /* context 객체 를 이용해서 하위 모든 컴포넌트에 value를 제공 */
    <TestContext.Provider value='Parent에서 전달한 값'>
      <h3>Parent Component</h3>
      <Child/>

    </TestContext.Provider>
   
  );
}



export default Parent;