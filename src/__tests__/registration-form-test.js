import React from 'react';
import { shallow, mount } from 'enzyme';

import { RegistrationForm } from '../components/registration-form';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationForm handleSubmit={() => { }} />);
  });

  it('Renders the registration button...', () => {
    const wrapper = shallow(<RegistrationForm handleSubmit={() => { }} />);
    expect(wrapper.hasClass('login-form')).toEqual(true);
  });

})