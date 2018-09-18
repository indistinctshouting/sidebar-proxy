import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.div`
  font-weight: normal;
  color: #666;
  text-align: center;
`;

export default class Date extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledDate>
        {this.props.date.slice(0, 10).split('-').reverse().join('/')}
      </StyledDate>
    );
  }
}