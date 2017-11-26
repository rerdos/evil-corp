import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

const mockFetch = (data, { shouldReject } = {}) =>
  global.fetch = jest.fn().mockImplementation(() =>
    new Promise((resolve, reject) => !shouldReject ? resolve(data) : reject(data)));

const successResponse = {
  ok: true,  
  json: () => [
    { x: 1, y: 2 },
    { x: 3, y: 4 }
  ]
};

describe('Component: <App />', () => {
  it('renders <App /> component', () => {
    mockFetch(successResponse);
    const wrapper = shallow(<App />);
    expect(wrapper.state().isLoading).toBe(true);
  });
});