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
import AppCompUpdate from './ShoulComponentUpdate/AppCompUpdate'
import AppReactMemo from './ReactMemo/AppReactMemo'
import AppContextProvider from './ReactContext/ContextProvider/AppContextProvider';
import ThemeContext from './ReactContext/ContextProvider/themeContext';
import AppContextPractise from './ReactContext/ContextPractise1/AppContextPractise'
import UserNameContext from './ReactContext/ContextPractise1/UserNameContext'
import ThemeContextConsumer from './ReactContext/ContextConsumer/themeContext'
import AppContextConsumer from './ReactContext/ContextConsumer/AppContextConsumer'

//const themeContext=React.createContext();
//render(<AppHocsPart someprophere="hi there"></AppHocsPart>, document.getElementById('root'));

//render(<ThemeContext.Provider value={"dark"}><AppContextProvider></AppContextProvider></ ThemeContext.Provider>, document.getElementById('root'));
//render(<UserNameContext.Provider value={"love"}><AppContextPractise></AppContextPractise></UserNameContext.Provider>, 
//document.getElementById('root'));
render(<ThemeContextConsumer.Provider value={"da"}><AppContextConsumer></AppContextConsumer></ ThemeContextConsumer.Provider>, document.getElementById('root'));
