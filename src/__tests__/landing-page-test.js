import React from 'react';
import { shallow,mount } from 'enzyme';

import {LandingPage} from '../components/landing-page';

describe ('<LandingPage />', () => {
  it('Renders without crashing', () => {  
    shallow(<LandingPage />);
  });

  it('Renders the welcome-screen class...', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.hasClass('welcome-screen')).toEqual(true);
  });






})