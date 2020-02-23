import React from "react"
import {withFavoriteNumber} from './withFavoriteNumber';

function AppHocsPart(props) {
  console.log(props);
    return (
        <div>{props.favoriteNumber}</div>
    )
}

export default withFavoriteNumber(AppHocsPart)