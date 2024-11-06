import React, {Component} from 'react';
// -> node_moduls 폴더에서 'react'관련 모듈 중
//    React, Component를 얻어와 사용
//    사용시 이름도 (React, Component)


/*  [클래스 형 컴포넌트 만들기] 
  1. extends Component (import 받은 Component 상속하기)
  2. render() 함수 작성(필수!!!!) 
  3. 만든 클래스를 export default 지정하기
*/

class ComponentEx extends Component{

  // 생성자 함수
  constructor(props){
    super(props);

    this.state = {count:0};
  }

  /* 이벤트 핸들러 */
  clickHandler = () => {
    this.setState({count : this.state.count +1});
  }


  // render() 함수
  // - return 되는 HTML 코드를 화면에 출력하는 함수
  render(){
    return(
      <>
      {/* <></> == fragment(해석되면 사라짐, 묶음 용도) */}
      <h2>클래스형 Component입니다!!!</h2>
      <h2>{this.state.count}</h2>
      <button onClick={this.clickHandler}>1 증가</button>
      </>
    );
  }
}

export default ComponentEx;