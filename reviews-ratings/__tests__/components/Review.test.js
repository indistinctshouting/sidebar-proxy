import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Review from '../../client/components/Review';

const fakeReviews = [{ 
  owner: { 
    picture:
     'https://s3.amazonaws.com/uifaces/faces/twitter/dshster/128.jpg',
    name: 'Giovanny Reinger ',
    location: 'Caliton, VT',
    friends: 22,
    reviewCount: 112,
    photos: 37,
    checkIns: 8,
    elite: false 
  },
  upvotes: { useful: 10, funny: 2, cool: 8 },
  _id: '5b92c45cadf6b93d40b1ba6e',
  reviewId: 278,
  restaurantId: 38,
  rating: 3,
  date: '2013-08-13T08:51:59.518Z',
  text:
    'Dolores quo quisquam est cumque corrupti omnis voluptatem. Dolorum reiciendis molestiae sunt velit omnis nihil dolorum atque. Illum suscipit earum excepturi eius harum. Aut nihil tenetur cupiditate aut eos aut. Culpa eveniet dolor delectus natus.',
  updated: false,
  __v: 0 
}];

describe('<Review />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Review review={fakeReviews}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});