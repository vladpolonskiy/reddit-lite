import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import store from 'domain/store';
import Home from '../../views/containers/Home';

it('renders list', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(wrapper.find(Home)).to.have.lengthOf(1);
});
