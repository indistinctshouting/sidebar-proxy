import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from '../../client/src/components/Menu';

describe('Menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Menu 
        show={false} 
        menuInfo={{}} 
        name={'restaurant'} 
        hideMenu={() => { return; }}
        />
    )
  })

  it('should render menu component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial div container with class display-none', () => {
    let divContainer = wrapper.find('.display-none');
    expect(divContainer.hasClass('display-none')).toEqual(true);
  });

  it('should have the restaurant name in the header', () => {
    let header = wrapper.find('h4');
    expect(header.text()).toMatch(/Menu For restaurant/);
  });

  it('should have a close button', () => {
    let closeButton = wrapper.find('.close');
    expect(closeButton).toBeDefined();
  });

  it('should not have MenuSection components if the menu object is empty', () => {
    let menuSections = wrapper.find('MenuSection');
    expect(menuSections.exists()).toEqual(false);
  });

  it('should have the correct number of MenuSection components', () => {
    let wrapper = shallow(
      <Menu 
        show={false} 
        menuInfo={{1: {}, 2: {}}} 
        name={'restaurant'} 
        hideMenu={() => { return; }}
      />
    )

    let menuSections = wrapper.find('MenuSection');
    expect(menuSections.length).toEqual(2);
  })
  
});
