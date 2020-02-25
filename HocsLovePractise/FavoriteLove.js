import React,{Component} from 'react';
import {withToggler} from "./HocsToggle/withToggler"
class FavoriteLove extends Component
{
  state = {
        isFavorited: false
    }
    
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited: !prevState.isFavorited
            }
        })
    }

    render()
    {
      return(
      <div>
      <h3> click heart to favorite</h3>
      <h1>
     <span 
                        onClick={this.toggleFavorite}
                    >
                        {this.state.isFavorited ? "❤️" : "♡"}
                    </span>
                    </h1>
      </div>
      )
    }
}

const withSuperchargeFavoriteLove=withToggler(FavoriteLove)
export default withSuperchargeFavoriteLove;