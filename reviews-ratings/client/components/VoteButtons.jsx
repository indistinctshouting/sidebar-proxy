import React from 'react';
import Button from './Button.jsx';
import _ from 'lodash';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 270px;
  height: 30px;
  grid-column-gap: 8px;
`;

export default class VoteButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleButtonClick(count, clicked) {
    if (!count && !clicked) {
      count = 1;
    } else if (!clicked) {
      count += 1;
    } else if (clicked) {
      count -= 1;
    }
    this.setState({
      count,
      clicked: !clicked
    });
  }

  render() {
    return (
      <ButtonsWrapper>
        {
          _.map(this.props.votes, (value, key) => {
            return <Button name={key} count={value} handleButtonClick={this.handleButtonClick}/>;
          })
        }
      </ButtonsWrapper>
    );
  }
}