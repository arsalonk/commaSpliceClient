import React from 'react';
import { shallow,mount } from 'enzyme';

import LoginForm from '../components/login-form';

describe ('<LoginForm />', () => {
  it('Renders without crashing', () => {  
    shallow(<LoginForm />);
  });

  // it('Renders the login-button...', () => {
  //   const wrapper = shallow(<LoginForm />);
  //   expect(wrapper.hasClass('login-button')).toEqual(true);
  // });






})