import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification.jsx';

const setup = (propOverrides = {}) => {
  const props = Object.assign({
    type: "error",
    message: "Absolutely not an error message",
  }, propOverrides)

  const wrapper = shallow(<Notification {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('Component: <Notification />', () => {
  it('renders <Notification /> component with an error', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.Notification__message--error').length).toBe(1);
  });

  it('renders <Notification /> component without type if type is not predefined', () => {
    const { wrapper } = setup({ type: "noType" })
    expect(wrapper.find('.Notification__message--error').length).toBe(0);
  });

  it('renders <Notification /> component with the correct content', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('div').text()).toBe(props.message);
  });
});