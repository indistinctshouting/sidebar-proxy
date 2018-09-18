import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RatingBox from '../../client/components/RatingBox';

describe('<RatingBox />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<RatingBox />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});