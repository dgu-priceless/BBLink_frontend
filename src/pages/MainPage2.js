import React from 'react';
import SearchInput from '../components/SearchInput';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components'; 
const MainPage2=()=> {
    const navigate=useNavigate();

    const StyledButton = styled.button`
    height: 60px;
    width: 300px;
    background-color: #ffef82;
    border-color:#ffef82;
    font-size: 25px;
    font-weight: 700;
    border-radius:50px;
  `;

  const StyledButton2 = styled.button`
  height: 50px;
  width: 80px;
  background-color: #ffef82;
  border-color:#ffef82;
  font-size: 20px;
  font-weight: 700;
`;

const StyledButton3 = styled.button`
height: 100px;
width: 300px;
background-color: #ffef82;
border-color:#ffef82;
font-size: 20px;
font-weight: 700;
`;

 return (

<div className="MainPage">
<center>
    <br/>

    <p style={{ fontSize: 13 }}>
    ▼서울특별시 중구 장충동2가 193-86 현대빌라 201호
      </p>

 <SearchInput/>
 &nbsp;&nbsp;
 <StyledButton2 onClick={()=>{
navigate('/SelectPage')
}
}>검색</StyledButton2>

 <br/>
 <br/>
 <StyledButton onClick={()=>{
navigate('/CategoryPage')
}
}>배달</StyledButton>

 <br/>
 <br/>
 <StyledButton onClick={()=>{
navigate('/CategoryPage')
}
}>포장</StyledButton>

   <img className="deliverynow" src="img/deliv.png" height='190' width='350'/>
       
        <p style={{ fontSize: 21 }}>
        음식이 10분 뒤에 도착할 예정입니다. {"\n"}
        잠시만 기다려주세요! {"\n"}
      </p>
</center>
<br/>
<br/>
 <br/>
 </div>
 );
}
export default MainPage2;
