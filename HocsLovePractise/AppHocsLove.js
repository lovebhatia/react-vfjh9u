import React from 'react'
import MenuLove from './MenuLove'
import FavoriteLove from './FavoriteLove'
function AppHocsLove()
{
  return(
    <div>
    <MenuLove something="whatever"/>
    <hr/>
    <FavoriteLove/>
    </div>
  )
}

export default AppHocsLove;