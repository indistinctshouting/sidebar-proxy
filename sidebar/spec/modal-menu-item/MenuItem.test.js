import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../../client/src/components/MenuItem';

describe('MenuItem', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <MenuItem
        details={{
          item_name: 'potato',
          item_price: '500.00',
          item_description: 'it is a potater',
        }}
      />
    )
  })

  it('should render a MenuItem correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a item name bolded in blue', () => {
    let itemName = wrapper.find('.blue-text');
    expect(itemName.text()).toMatch('potato');
  })

  it('should have the price bolded', () => {
    expect(wrapper.containsAnyMatchingElements([
      <strong>500.00</strong>
    ])).toEqual(true);
  })

  it('should have a description in a <p> tag', () => {
    let description = wrapper.find('p');
    expect(description.text()).toMatch('it is a potater');
  });
  
});