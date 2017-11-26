import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner.jsx';

describe('Component: <LoadingSpinner />', () => {
  it('renders <LoadingSpinner /> component', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.find('.LoadingSpinner').length).toBe(1);
  });
});