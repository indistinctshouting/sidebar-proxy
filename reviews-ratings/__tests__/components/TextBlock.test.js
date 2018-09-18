import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextBlock from '../../client/components/TextBlock';

describe('<TextBlock />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<TextBlock />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});