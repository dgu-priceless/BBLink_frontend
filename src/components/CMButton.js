import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
 height: 50px;
 width: 200px;
 border-radius: 10px;
 border: 2px solid black;
 background-color: #FFEF82;
 font-size: 16px;
 font-weight: 700;
`;
function CMButton(props) {
 return <StyledButton>{props.text}</StyledButton>;
}
export default CMButton;