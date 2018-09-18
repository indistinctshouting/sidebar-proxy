import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReviewList from '../../client/components/ReviewList';

describe('<ReviewList />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<ReviewList />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});