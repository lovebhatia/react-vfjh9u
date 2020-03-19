import React,{Component} from "react"
const {Provider,Consumer} = React.createContext();

class ThemeContextMove extends component{
  render()
  {
    return(
      <Provider value={"light"}>
      {this.props.children}
      </Provider>

    )
  }
}

export {ThemeContextMove, Consumer as ThemeContextMove}