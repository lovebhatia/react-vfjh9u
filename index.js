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
import AppContextPractise2 from './ReactContext/ContextPractise2/AppContextPractise2'
import UserContext from './ReactContext/ContextPractise2/UserContext'
import {ThemeContextProviderMove} from './ReactContext/ContextProOwnComponent/themecontext'
import AppContextProviderMove from './ReactContext/ContextProOwnComponent/AppContextProviderMove'
import {ThemeContextProviderChange} from './ReactContext/changingContext/themeContextChange'
import AppContextChange from './ReactContext/changingContext/AppContextChange'
import AppUseState1 from './ReactHooks/useState1CreatingState/AppUseState1'
import AppUseState2 from './ReactHooks/useState2ChangingState/AppUseState2'
import AppComplexChangeState from './ReactHooks/useState3ChangingMoreComplexState/AppComplexChangeState'
import AppUseEffect1 from 
'./ReactHooks/UseEffect1/AppUseEffect1'
import AppSpeedTypingGame from 
'./ReactHooks/SpeedTypingGame/AppSpeedTypingGame'
import AppUseRef from 
'./ReactHooks/useref/AppUseRef'
import AppUseContext from 
'./ReactHooks/useContext/AppUseContext'
import {ThemeContextUseProvider} from './ReactHooks/useContext/themeContext'
import AppRefPracContext from './ReactHooks/HooksPracRefThemeContext/AppRefParc'
import {ThemeContextPracRefProvider} from './ReactHooks/HooksPracRefThemeContext/themeContext'
import AppCustomhook from './ReactHooks/CustomHooks/AppCustomHook'
import AppRefactorToggler from './ReactHooks/CHPRefactorToggler/AppRefactorToggler'
import BrowserRouterApp from './ReactRouter/BrowserRouter/BrowserRouterApp';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouterLink from './ReactRouter/RouterLink/AppRouterLink'
import AppSwitchRoute from './ReactRouter/SwitchRoute/AppSwitchRoute'
import AppSwitchRouteprac from './ReactRouter/SwitchRoutePractise/AppSwitchRouteprac'
import AppPropsPassed from './ReactRouter/PropsPaseedRouterComponent/AppPropsPassed'

import AppNestedRoute from './ReactRouter/ReactRouterNestedRoute/AppNestedRoute'

import AppUseParam from './ReactRouter/ReactRouteruseParams/AppUseParams'
import AppUseMatchParam from './ReactRouter/ReactRouteruseMatchParams/AppUseMatchParam'
import AppUseHistory from './ReactRouter/UseHistory/AppUseHistory'
import AppCapstone from "./Capstone/AppCapstone"


//const themeContext=React.createContext();
//render(<AppHocsPart someprophere="hi there"></AppHocsPart>, document.getElementById('root'));

//render(<ThemeContext.Provider value={"dark"}><AppContextProvider></AppContextProvider></ ThemeContext.Provider>, document.getElementById('root'));
//render(<UserNameContext.Provider value={"love"}><AppContextPractise></AppContextPractise></UserNameContext.Provider>, 
//document.getElementById('root'));
//render(<ThemeContextConsumer.Provider value={"dark"}><AppContextConsumer></AppContextConsumer></ ThemeContextConsumer.Provider>, document.getElementById('root'));

//render(<UserContext.Provider value={"love BHatia"}><AppContextPractise2></AppContextPractise2></UserContext.Provider>,document.getElementById('root'));

//render(<ThemeContextProviderMove ><AppContextProviderMove/></ThemeContextProviderMove>,document.getElementById("root"))
//render(<ThemeContextProviderChange ><AppContextChange/></ThemeContextProviderChange>,document.getElementById("root"))

//render(<AppUseState1/>,document.getElementById("root"));
//render(<AppUseState2/>,document.getElementById("root"));
//render(<AppComplexChangeState/>,document.getElementById("root"));
//render(<AppUseEffect1/>,document.getElementById("root"));
//render(<AppSpeedTypingGame/>,document.getElementById("root"));
//render(<AppUseRef/>,document.getElementById("root"));

//render(<ThemeContextUseStateProvider><AppUseContext/>
//</ThemeContextUseStateProvider>, document.getElementById('root'));
//render(<ThemeContextUseProvider> <AppUseContext /> </ThemeContextUseProvider>, document.getElementById("root"))
//render(<ThemeContextPracRefProvider> <AppRefPracContext/> </ThemeContextPracRefProvider>, document.getElementById("root"))
//render(<AppCustomhook/>,document.getElementById("root"));
//render(<AppRefactorToggler/>,document.getElementById("root"));

//render(<BrowserRouter><BrowserRouterApp/></BrowserRouter>,document.getElementById("root"));
//render(<BrowserRouter><AppRouterLink/></BrowserRouter>,document.getElementById("root"));
//render(<AppRouterLink/>,document.getElementById("root"));
//render(<BrowserRouter><AppSwitchRoute/></BrowserRouter>,document.getElementById("root"));
//render(<BrowserRouter><AppSwitchRouteprac/></BrowserRouter>,document.getElementById("root"));
//render(<BrowserRouter><AppPropsPassed/></BrowserRouter>,document.getElementById("root"));
//render(<BrowserRouter><AppNestedRoute/></BrowserRouter>,document.getElementById("root"));
//render(<BrowserRouter><AppUseParam/></BrowserRouter>,document.getElementById("root"));
//render(<Router><AppUseMatchParam/></Router>,document.getElementById("root"));
//render(<Router><AppUseHistory/></Router>,document.getElementById("root"));
render(<Router><AppCapstone/></Router>,document.getElementById("root"));






