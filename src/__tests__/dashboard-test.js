import React from 'react';
import { shallow,mount } from 'enzyme';

import {Dashboard} from '../components/dashboard';

describe ('<Dashboard />', () => {
  it('Renders without crashing', () => {  
    shallow(<Dashboard handleSubmit={() => { }}/>);
  });

  // it('Renders the welcome-screen class...', () => {
  //   const wrapper = shallow(<Dashboard handleSubmit={() => { }}/>);
  //   expect(wrapper.hasClass('text-container')).toEqual(true);
  // });

  






})