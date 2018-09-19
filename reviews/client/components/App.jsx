import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset}
`;

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.28571em;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #333;
`;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  
  componentDidMount() {
    let restaurantId = window.location.pathname.split('/')[2];
    this.getReviewData(restaurantId);
  }

  getReviewData(id) {
    axios.get(`http://localhost:3002/restaurant/${id}/reviews`)
      .then((response) => {
        this.setState({
          reviews: response.data
        });
      });
  }

  render() {
    return (
      <Wrapper>
        <ReviewList reviews={this.state.reviews}/>
      </Wrapper>
    );
  }
}