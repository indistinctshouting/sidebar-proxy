import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const UpdatedFlagWrapper = styled.div`
  font-weight: 700;
  color: #666;
  .updated-icon {
    font-weight: 400;
    color: #f15c00;
  }
`;

const UpdatedFlag = ({updated}) => {
  if (updated) {
    return (
      <UpdatedFlagWrapper>
        <FontAwesomeIcon className="updated-icon" icon={faSync}/> Updated review
      </UpdatedFlagWrapper>
    );
  } else {
    return null;
  }
};

export default UpdatedFlag;