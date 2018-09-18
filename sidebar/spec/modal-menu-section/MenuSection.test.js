import React from 'react';
import { shallow } from 'enzyme';
import MenuSection from '../../client/src/components/MenuSection';

describe('MenuSection', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      < MenuSection
        section={'potatoes'}
        items={[{item_name: 1}, {item_name: 2}, {item_name: 3}]}
      />
    )
  })

  it('should render menu component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an h4 tag with the section name', () => {
    let sectionName = wrapper.find('h4');
    expect(sectionName.text()).toMatch('potatoes');
  });

  it('should have as many MenuItems as the length of items', () => {
    let sections = wrapper.find('MenuItem');
    expect(sections.length).toEqual(3);
  });

});