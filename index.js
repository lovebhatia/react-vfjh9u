import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Child from './Child'
import AppDefaultprops from './defaultProps/AppDefaultprops'
import AppPropTypes from './PropTypes/AppPropTypes'
import AppPropspractise from './propsPractise/AppPropspractise';
import AppReactChildren from './React Children/AppReactChildren'



render(<AppReactChildren></AppReactChildren>, document.getElementById('root'));
