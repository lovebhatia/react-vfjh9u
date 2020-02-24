import React from  'react';
export function withToggles(component)
{
  return function(props)
  {
    return (
      <Toggler component={component} {...props}/>
    )

  }

}
 