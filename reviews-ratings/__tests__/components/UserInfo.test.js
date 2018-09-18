import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserInfo from '../../client/components/UserInfo';

const fakeOwner = { 
  picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/dshster/128.jpg',
  name: 'Giovanny Reinger ',
  location: 'Caliton, VT',
  friends: 22,
  reviewCount: 112,
  photos: 37,
  checkIns: 8,
  elite: false 
};

describe('<UserInfo />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<UserInfo owner={fakeOwner}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});