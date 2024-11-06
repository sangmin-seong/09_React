import React from 'react';


const Child1 = (props) => {

  let {productName, option, price} = props;

  return(
  <>
    <h4>Child1</h4>
    <ul className='info'>
      <li>메뉴명 : {productName} (App.js)</li>
      <li>옵션 : {option} (PropsEx)</li>
      <li>가격 : {price} (PropsEx에서 App.js 값 가공)</li>
    </ul>
  </>
  );
}

const Child2 = (props) => {
  let {productName, addMenu, price} = props;

  return(
    <>
      <h4>Child2</h4>
      <ul className='info'>
      <li>메뉴명 : {productName} (App.js)</li>
      <li>추가메뉴 : {addMenu} (PropsEx)</li>
      <li>가격 : {price} (PropsEx에서 App.js 값 가공)</li>
    </ul>
    </>
  );
}


const PropsEx3 = (props) => {
  // App.js에서 전달받은 값을 Child1/2에 다시 전달
  // -> Props Drilling(상태/속성 내리꽂기)

  let {productName, price} = props;
  return(
    <>
      <Child1 productName ={productName}
              option = '치즈추가'
              price = {Number(price) + 1000}/>
      <Child2 productName = {productName}
              addMenu = '김밥 한 줄'
              price = {Number(price) + 3000}/>
    </>
  );
}

export default PropsEx3;