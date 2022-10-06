import React from 'react';
import HeadButton from '../components/HeadButton';
import styled from 'styled-components';

const StyledButton = styled.button`
height: 40px;
width: 200px;
background-color: #ffef82;
font-size: 15px;
font-weight: 700;
font-color:black;
`;

function DeliveryNow() {
 return (

<div>
<center>

    <br/>
<HeadButton text={'배달현황'}/>
        <br/>
        <br/>
        <p style={{ fontSize: 21 }}>
        가게명: 백남옥손만두-신당점
      </p>
        <StyledButton>매장 전화연결</StyledButton>
        <br/>
        <br/>
        <StyledButton>라이더 전화연결</StyledButton>
    
        <img className="deliverynow" src="img/deliv.png" height='200' width='350'/>
        <br/>
        <p style={{ fontSize: 21 }}>
        음식이 10분 뒤에 도착할 예정입니다. {"\n"}
        잠시만 기다려주세요! {"\n"}
      </p>

</center>
 </div>
 );
}
export default DeliveryNow;
