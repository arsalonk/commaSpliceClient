import React from 'react';
import { shallow,mount } from 'enzyme';

import RegistrationForm from '../components/registration-form';

describe ('<RegistrationForm />', () => {
  it('Renders without crashing', () => {  
    shallow(<RegistrationForm />);
  });

  // it('Renders the registration button...', () => {
  //   const wrapper = shallow(<RegistrationForm />);
  //   expect(wrapper.hasClass('register-button')).toEqual(true);
  // });






})