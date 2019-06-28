import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import store from 'domain/store';
import FeedItem from '../../views/components/FeedItem';

const mockData = {
  title: 'Title',
  postLink: 'some link',
  thumbnail: null,
  username: 'zZz',
  postedDate: new Date(Date.now()),
  numComments: 20,
};

it('renders title', () => {
  const wrapper = shallow(
      <FeedItem { ...mockData }/>
  );
  expect(wrapper.find('.title')).to.have.lengthOf(1);
});

it('renders link', () => {
  const wrapper = shallow(
      <FeedItem { ...mockData }/>
  );
  expect(wrapper.find('.content a').text()).to.equal(mockData.postLink);
});
