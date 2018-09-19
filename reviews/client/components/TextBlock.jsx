import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;

const TextBlock = (props) => (
  <TextWrapper>
    {props.text}
  </TextWrapper>
);

export default TextBlock;