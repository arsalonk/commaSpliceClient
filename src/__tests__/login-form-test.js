import React from 'react';
import { shallow, mount } from 'enzyme';

import { LoginForm } from '../components/login-form';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm handleSubmit={() => { }} />);
  });

  it('Renders the login-button...', () => {
    const wrapper = shallow(<LoginForm handleSubmit={() => { }} />);
    expect(wrapper.hasClass('login-form')).toEqual(true);
  });

})