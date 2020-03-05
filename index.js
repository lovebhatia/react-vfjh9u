import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Child from './Child'
import AppDefaultprops from './defaultProps/AppDefaultprops'
import AppPropTypes from './PropTypes/AppPropTypes'
import AppPropspractise from './propsPractise/AppPropspractise';
import AppReactChildren from './React Children/AppReactChildren';
import AppReactChildrenPractise from './ReactChildrenpractise/AppReactChildrenPractise';
import AppHocsPart from './HocsPart3/AppHocsPart';
import AppHocsPart1 from './HocsPart4/AppHocsPart1';
import AppRenderProps2 from './RenderProps2/AppRenderProps2'
import AppHocsLove from './HocsLovePractise/AppHocsLove'


//render(<AppHocsPart someprophere="hi there"></AppHocsPart>, document.getElementById('root'));
render(<AppRenderProps2></AppRenderProps2>, document.getElementById('root'));
