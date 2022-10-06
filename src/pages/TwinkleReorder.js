import React from 'react';
import HeadButton from '../components/HeadButton';
import styled from 'styled-components';





const StyledButton2 = styled.button`
height: 60px;
width: 100px;
background-color: #ffef82;
font-size: 20px;
font-weight: 700;
font-color:black;
`;

const StyledButton = styled.button`
height: 60px;
width: 250px;
background-color: #ffef82;
font-size: 20px;
font-weight: 700;
font-color:black;
`;


   
function TwinkleOrder() {
  
 return (

<div>
<center>
<br/>
<HeadButton text={'반짝주문'}/>
        <br/>
        <br/>


        
        <img className="bongchu" src="img/bongchu.png" height='250' width='250' borderColor='black'/>
        <br/>
        <br/>
        <StyledButton>봉추찜닭 서울대입구역점</StyledButton>
        <br/>
        <br/>
        <StyledButton2>주문하기</StyledButton2>
        <br/>
        <br/>

</center>
 </div>
 );
}
export default TwinkleOrder;