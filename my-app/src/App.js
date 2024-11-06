import './App.css';
import ClassComponent from './components/R01_ClassComponent';
import FunctionComponent from './components/R02_FunctionComponent';

import Props1 from './components/R03_Props1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';

import StateEx1 from './components/R06_State1';
import StateEx2 from './components/R07_State2';
import StateEx3 from './components/R08_State3';

// -> R01_ClassComponent에서 export된 HTML 요소를
//    ClassCOmponent라고 부르겠다  --> <ClassComponent/> 형태로 사용가능!!!

// 기본적으로 //, /* */ 주석 사용 가능
// 단, HTML 코드가 작성되는 영역에서는 {/* */} 주석 사용 가능



function App() {
  return (
    <>
    {/* JSX(JS에서 HTML 작성하는 것) 주석 */}

    {/* 클래스형 컴포넌트 */}
    {/* <ClassComponent/> */}

    
    {/* <FunctionComponent/> */}
    {/* <Props1 num ='1' name ='홍길동'/>
    <Props1 num ='2' name ='김미영'/>
    <Props1/> */}
    
    <hr/>

    {/* <Props2 name='철수'
            age='29' 
            address='영등포' 
            gender='M'/>

    <Props2 name='영희'
            age='12' 
            address='미아' 
            gender='F'/> */}


    <hr/>

    {/* <Props3 productName ='라면'
            price = '3000'/> */}


    <hr/>

    <StateEx1/>
    <StateEx2 init='0'/>

    <hr/>
    
    <StateEx3/>

    </>
  );
}

export default App;
